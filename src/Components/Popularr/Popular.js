import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Popular.css";
import Item from "../Item/Item";

const Popular = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/account/WomenProductOutStanding"
        );
        setData(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);
  console.log(setData);

  return (
    <div className="popular">
      <h1>POPULAR IN MEN</h1>
      <hr />
      <div className="popular-item">
        {data && data.length > 0 ? (
          data.map((item) => (
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
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Popular;
