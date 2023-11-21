import React from "react";
import "./Navbar.css";

export default function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
      </a>
      <div className="nav-buttons">
        <div className="nav-email">
          สวัสดี,{user}
        </div>
        <button onClick={handleClick} className="btn custom-button1">แจ้งน้ำท่วม</button>
        <a className="btn custom-button2" href="#check">
          ตรวจสอบพื้นที่ของคุณ
        </a>
      </div>
    </nav>
  );
}
