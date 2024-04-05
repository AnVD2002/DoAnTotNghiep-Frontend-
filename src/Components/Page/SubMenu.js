import React from "react";
import "./CSS/SubMenu.css";
import { Link } from "react-router-dom";

const SubMenu = (props) => {
  return (
    <div className="submenu">
      <ul>
        <li>
          <Link to={`/${props.categoryid}/1`}>Trousers</Link>
        </li>
        <li>
          <Link to={`/${props.categoryid}/2`}>Shirt</Link>
        </li>
        <li>Belts</li>
        <li>Shoe</li>
        <li>Glasses</li>
      </ul>
    </div>
  );
};

export default SubMenu;
