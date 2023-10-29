import React from "react";
import "./Navbar.css";
import logoImg from "../images/logo-icon-s-blue.png";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="nav-buttons">
        <a href="signup">
          <button className="btn custom-button1">แจ้งน้ำท่วม</button>
        </a>
        
        <button className="btn custom-button2" href="#">ตรวจสอบพื้นที่ของคุณ</button>
      </div>
      <a className="navbar-brand" href="#">
        <div className="Logo">
          <img src={logoImg} className="logo-image"/>
        </div>
      </a>
      <div className="nav-buttons">
        <button className="btn custom-button1" href="#" >แจ้งน้ำท่วม</button>
        <a className="btn custom-button2" href="#check">ตรวจสอบพื้นที่ของคุณ</a>
      </div>
    </nav>
  );
}