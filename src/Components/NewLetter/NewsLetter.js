import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div>
      <div className="newsletter">
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subcribe to our newletter and stay update</p>
        <div>
          <input type="email" placeholder="Your Email ID" />
          <button>Subcribe</button>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
