import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Item from "../Item/Item";
import "./RelateProducts.css";

const RelatedProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/account/ProductOutStanding"
        );
        setData(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproduct-item">
        {data.map((item, i) => {
          return (
            <Item
              key={item.productID}
              id={item.productID}
              name={item.name}
              description={item.description}
              new_price={
                item.productVarients && item.productVarients.length > 0
                  ? item.productVarients[0].newPrice
                  : null
              }
              old_price={
                item.productVarients && item.productVarients.length > 0
                  ? item.productVarients[0].oldPrice
                  : null
              }
              img={item.productImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
