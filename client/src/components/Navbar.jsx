import React, { useState } from "react";
import "./Navbar.css";
import logoImg from "../images/logo-icon-s-blue.png";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [checklogin, setChecklogin] = useState(false);

  const AuthContext = React.createContext();

  function Check() {
    const [auth, setAuth] = useState(null);
  }


  return (
    <AuthContext.Provider value=>

    </AuthContext.Provider>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <div className="Logo">
          <img src={logoImg} className="logo-image" />
        </div>
      </a>
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
