import React from "react";
import "./ProductDisplay.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const ProductDisplay = (props) => {
  const { product } = props;
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchSizes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/account/AllSize"
        );
        setSizes(response.data);
      } catch (error) {
        console.error("Error fetching sizes:", error);
      }
    };

    fetchSizes();
  }, []);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/account/AllColors"
        );
        setColors(response.data);
      } catch (error) {
        console.error("Error fetching sizes:", error);
      }
    };

    fetchColors();
  }, []);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img
            src={`${process.env.PUBLIC_URL}/images/${product.productImage}`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${product.productImage}`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${product.productImage}`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${product.productImage}`}
            alt=""
          />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={`${process.env.PUBLIC_URL}/images/${product.productImage}`}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={`${process.env.PUBLIC_URL}/images/star_icon.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/images/star_icon.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/images/star_icon.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/images/star_icon.png`} alt="" />
          <img
            src={`${process.env.PUBLIC_URL}./images/star_dull_icon.png`}
            alt=""
          />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.productVarients && product.productVarients.length > 0
              ? product.productVarients[0].oldPrice
              : null}
          </div>
          <div className="productdisplay-right-price-new">
            {product.productVarients && product.productVarients.length > 0
              ? product.productVarients[0].newPrice
              : null}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {sizes.map((size, index) => (
              <div key={size.sizeID}>{size.name}</div>
            ))}
          </div>
        </div>
        <div className="productdisplay-right-color">
          <h1>Select Colors</h1>
          <div className="productdisplay-right-colors">
            {colors.map((color, index) => (
              <div key={color.sizeID}>{color.name}</div>
            ))}
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span>, Womens, T-shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Category :</span>, Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
