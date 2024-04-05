import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import SubMenu from "../Page/SubMenu";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const handleLoginRedirect = () => {
    navigate("/login"); // Sử dụng hàm navigate để chuyển hướng
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" />
        <p>My Shop</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          className="menu-item"
          onClick={() => {
            setMenu("mens");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/mens">
            Mens
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
          <SubMenu categoryid="mens" />
        </li>
        <li
          className="menu-item"
          onClick={() => {
            setMenu("womens");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/womens">
            Womens
          </Link>{" "}
          {menu === "womens" ? <hr /> : <></>}
          <SubMenu categoryid="womens" />
        </li>
        <li
          className="menu-item"
          onClick={() => {
            setMenu("kids");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
          <SubMenu categoryid="kids" />
        </li>
      </ul>
      <div className="nav-login-cart">
        {isLoggedIn ? (
          <button onClick={logout}>Log Out</button>
        ) : (
          <button onClick={handleLoginRedirect}>Login</button>
        )}
        <img src={`./images/cart_icon.png`} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
export default Navbar;
