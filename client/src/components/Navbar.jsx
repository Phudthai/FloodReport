import React, { useState, useContext } from "react";
import "./Navbar.css";
import logoImg from "../images/logo-icon-s-blue.png";
import { useNavigate } from "react-router-dom";
import { CurrentAccount } from "../context/AuthContext";

export default function Navbar() {
  const currentAccount = useContext(CurrentAccount);
  console.log(currentAccount)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <div className="Logo">
          <img src={logoImg} className="logo-image" />
        </div>
      </a>
      <div>

        {currentAccount}
      </div>
      <div className="nav-buttons">
        <a href="/signup">
          <button className="btn custom-button1">แจ้งน้ำท่วม</button>
        </a>
        <a className="btn custom-button2" href="#check">
          ตรวจสอบพื้นที่ของคุณ
        </a>
      </div>
    </nav>
  );
}
