import React from "react";

function AdminList() {
  // Giả định có một mảng admin
  const admins = [
    { id: 1, name: "Admin 1" },
    { id: 2, name: "Admin 2" },
  ];

  return (
    <div className="admin-list">
      <h2>Admin List</h2>
      {/* Hiển thị danh sách admin ở đây */}
    </div>
  );
}

export default AdminList;
