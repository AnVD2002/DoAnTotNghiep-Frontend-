import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";
import "./NewCollection.css";

const NewCollection = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/account/ProductOutStanding"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collection-item">
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

export default NewCollection;
