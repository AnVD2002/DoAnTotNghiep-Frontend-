import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Breadrum from "../Breadcrums/Breadrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import RelatedProduct from "../RelatedProduct/RelatedProduct";

const Product = () => {
  const { productID } = useParams();
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/account/AllProduct"
        );
        setData(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);

  const product = data.find((e) => e.productID.toString() === productID);
  console.log(product);

  useEffect(() => {
    if (data.length > 0 && !product) {
      setNotFound(true);
    }
  }, [data, product]);

  if (notFound) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <Breadrum product={product || {}} />
      <ProductDisplay product={product || {}} />
      <RelatedProduct></RelatedProduct>
    </div>
  );
};

export default Product;
