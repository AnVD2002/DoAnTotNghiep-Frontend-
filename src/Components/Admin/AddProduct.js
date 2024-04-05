import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [productCategoryID, setProductCategoryID] = useState(0);
  const [productImage, setProductImage] = useState("");

  const handleImageChange = (event) => {
    if (event.target.files.length > 0) {
      const fileName = event.target.files[0].name;
      setProductImage(fileName);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const productData = {
      productName,
      description,
      productCategoryID,
      productImage: productImage,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/account/CreateProduct",
        productData
      );
      console.log("Product added successfully", response.data);
    } catch (error) {
      console.error("There was an error adding the product", error.response);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Category ID:</label>
        <input
          type="text"
          value={productCategoryID}
          onChange={(e) => {
            const value = e.target.value;
            if ((!isNaN(value) && value.trim() === "") || Number(value) >= 0) {
              setProductCategoryID(value);
            }
          }}
        />
      </div>
      <div className="form-group file-input">
        <label>Product Image Name:</label>
        <input type="file" onChange={handleImageChange} />
        {productImage && <p>File name: {productImage}</p>}
      </div>
      <button type="submit" className="submit-button">
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;
