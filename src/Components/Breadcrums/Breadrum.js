import React from "react";
import "./Breadcrum.css";

const Breadrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME{" "}
      <img
        src={`${process.env.PUBLIC_URL}/images/breadcrum_arrow.png`}
        alt=""
      />{" "}
      SHOP{" "}
      <img
        src={`${process.env.PUBLIC_URL}/images/breadcrum_arrow.png`}
        alt=""
      />{" "}
      {product.categoryID}{" "}
      <img
        src={`${process.env.PUBLIC_URL}/images/breadcrum_arrow.png`}
        alt=""
      />{" "}
      {product.name}
    </div>
  );
};

export default Breadrum;
