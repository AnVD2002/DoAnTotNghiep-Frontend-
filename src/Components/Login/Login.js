import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/account/Login",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      const token = response.data;

      console.log(token);

      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      console.error("dang nhap that bai");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src="" alt="" />
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="input">
            <img src="" alt="" />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="forgot-password">
          fogot password ?<span>Click here</span>
        </div>
        <div className="submit-container">
          <button onClick={() => handleLogin()}>Login</button>
        </div>
      </div>
    </div>
  );
};
