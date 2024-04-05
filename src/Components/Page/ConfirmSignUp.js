import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CSS/ConfirmUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ConfirmSignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Sử dụng useEffect để log giá trị một lần khi component mount
  useEffect(() => {
    console.log(location.state.formData);
  }, [location.state.formData]); // Thêm location.state.formData vào mảng phụ thuộc nếu bạn muốn useEffect re-run khi giá trị này thay đổi

  const [code, setCode] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmRequest = {
      registerResponse: location.state.formData, // Đảm bảo sử dụng dữ liệu từ location.state một cách đúng đắn
      code: code,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/account/ConfirmAccount",
        confirmRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setNotification({
          message: "Xác nhận thành công. Bạn sẽ được chuyển hướng!",
          type: "success",
        });
        setTimeout(() => navigate("/login"), 3000); // Chờ 3 giây rồi chuyển hướng để người dùng đọc thông báo
      } else {
        setNotification({
          message: "Có lỗi xảy ra hoặc mã xác nhận không đúng.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu xác nhận: ", error.response);
      setNotification({
        message: "Lỗi khi gửi yêu cầu xác nhận. Vui lòng thử lại.",
        type: "error",
      });
    }
  };

  return (
    <div className="confirm-signup">
      <div className="confirm-signup-container">
        <h1>Xác Nhận Đăng Ký</h1>
        {notification.message && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="confirm-signup-fields">
            <input
              type="text"
              value={code}
              onChange={handleChange}
              placeholder="Nhập mã xác nhận"
            />
            <button type="submit">Xác Nhận</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmSignUp;
