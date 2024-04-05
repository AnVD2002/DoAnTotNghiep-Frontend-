import React from "react";
import "./CSS/LoginSignup.css";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";

import { useNavigate } from "react-router-dom";

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  let navigate = useNavigate();
  const { login } = useAuth();
  const [formSignUp, setFormSignUp] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const handleChangeSignUp = (e) => {
    const { name, value } = e.target;
    setFormSignUp((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setFormLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignUp
      ? "http://localhost:8080/api/v1/account/CreateAccount"
      : "http://localhost:8080/api/v1/account/Login";
    const dataToSend = isSignUp ? formSignUp : formLogin;
    try {
      const response = await axios.post(endpoint, dataToSend);
      console.log(response.data);
      if (!isSignUp && response.status === 200) {
        login(response.data.accessToken, response.data.role);
        navigate("/", { state: { dataToSend } });
      } else if (isSignUp && response.status === 200) {
        const updatedFormData = {
          ...dataToSend,
          code: response.data.code,
          message: response.data.message,
          status: response.data.status,
        };
        navigate("/confirmUser", { state: { formData: updatedFormData } });
      }
    } catch (error) {
      console.error("There was an error!", error.response);
    }
  };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <form onSubmit={handleSubmit}>
          {isSignUp ? (
            <>
              <h1>Sign Up</h1>
              <div className="loginsignup-fields">
                <input
                  type="text"
                  name="username"
                  placeholder="Your Name"
                  onChange={handleChangeSignUp}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChangeSignUp}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  onChange={handleChangeSignUp}
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Your PhoneNumber"
                  onChange={handleChangeSignUp}
                />
              </div>
            </>
          ) : (
            <>
              <h1>Login</h1>
              <div className="loginsignup-fields">
                <input
                  type="text"
                  name="username"
                  placeholder="Your Account"
                  onChange={handleChangeLogin}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  onChange={handleChangeLogin}
                />
              </div>
            </>
          )}
          <button type="submit">Continue</button>
          {isSignUp ? (
            <p className="loginsignup-login">
              Already have an account{" "}
              <span onClick={() => setIsSignUp(false)}>Login</span>
            </p>
          ) : (
            <p className="loginsignup-login">
              Don't have an account?{" "}
              <span onClick={() => setIsSignUp(true)}>Sign Up</span>
            </p>
          )}
          <div className="loginsignup-agree">
            <input type="checkbox" name="agree" id="agree" />
            <p>By continuing, I agree to the Terms of Use & Privacy</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignUp;
