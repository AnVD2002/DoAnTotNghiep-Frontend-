import React from "react";
import { Link } from "react-router-dom";

function SidebarAdmin({ isOpen }) {
  return (
    <aside className={`dashboard-sidebar ${isOpen ? "open" : "closed"}`}>
      <ul>
        <li>
          <Link to="/dashboard/products">Products</Link>
        </li>
        <li>
          <Link to="/dashboard/users">Users</Link>
        </li>
        <li>
          <Link to="/dashboard/admins">Admins</Link>
        </li>
      </ul>
    </aside>
  );
}

export default SidebarAdmin;
