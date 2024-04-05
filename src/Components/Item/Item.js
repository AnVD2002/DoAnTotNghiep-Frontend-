import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/products/${props.id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${props.img}`} alt="" />
        <p>{props.name}</p>
        <p className="description">{props.description}</p>
        <div className="item-price">
          <div className="item-pice-new">${props.new_price}</div>
          <div className="item-price-old">${props.old_price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
