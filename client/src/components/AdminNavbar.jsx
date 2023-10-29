import React from "react";
import "./Navbar.css";
import logoImg from "../images/logo-icon-s-blue.png";

export default function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="nav-buttons">
        <button className="btn custom-button2" href="#">ออกจากระบบ</button>
      </div>
      <a className="navbar-brand" href="#">
        <div className="Logo">
          <img src={logoImg} className="logo-image"/>
        </div>
      </a>
      <div className="navbar-divider"></div>
    </nav>
  );
}
