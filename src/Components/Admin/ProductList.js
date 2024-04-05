import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/account/AllProduct"
        );
        setProducts(response.data); //
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <button onClick={() => navigate("/dashboard/products/add-product")}>
        Add Product
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category ID</th>
            <th>Description</th>
            <th>OutStanding</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productID}>
              <td>{product.productID}</td>
              <td>{product.name}</td>
              <td>{product.categoryID}</td>
              <td>{product.description}</td>
              <td>{product.outstandingProduct ? "Yes" : "No"}</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
                <button>Create</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
