import Header from "./Header";
import Sidebar from "./SideBarAdmin";
import { Routes, Route } from "react-router-dom"; // Bỏ import Router
import ProductList from "./ProductList";
import UserList from "./UserList";
import AdminList from "./AdminList";
import React, { useState } from "react";
import "./SideBar.css";
import AddProduct from "./AddProduct";

function Dashboardd() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <>
      <Header />
      <button onClick={toggleSidebar}>Toggle Sidebar</button>{" "}
      <div className="dashboard-container">
        <Sidebar isOpen={isSidebarOpen} />
        <Routes>
          <Route path="products" element={<ProductList />}></Route>
          <Route path="users" element={<UserList />} />
          <Route path="admins" element={<AdminList />} />
          <Route path="/products/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </>
  );
}
export default Dashboardd;
