import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={`${process.env.PUBLIC_URL}/images/logo_big.png`} alt="" />
        <p>Shopper</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={`./icons/insta.png`} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={`./icons/facebook.png`} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={`./icons/youtube.webp`} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2023 -All right Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
