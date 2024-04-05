import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/account/AllUser"
        );
        setUser(response.data); //
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="user-list">
      <h2>User List</h2>
      {/* Hiển thị danh sách người dùng ở đây */}
      <button>Add User</button>{" "}
      {/* Bạn có thể thêm sự kiện onClick để xử lý thêm sản phẩm */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Password</th>
            <th>Expiry</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userID}>
              <td>{user.userID}</td>
              <td>{user.tenTK}</td>
              <td>{user.email}</td>
              <td>{user.quyenHanID}</td>
              <td>{user.matKhau}</td>
              <td>{user.updatePasswordTokenExpiry}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
                <button>Create</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
