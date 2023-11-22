import React, { useEffect, useState } from "react";
import "../user/Navbar.css";
import { useNavigate } from "react-router-dom";


export default function AdminNavbar() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const logout = async (req, res) => {
    localStorage.removeItem("token")
    localStorage.removeItem("email")
    navigate('/')
    window.location.reload(true)
  }

  useEffect(() => {
    if (localStorage.getItem("email") !== null) {
      setUser(localStorage.getItem("email").replace(/"/g, ''))
    }
    else {
      setUser("Guest")
      console.log(user)
    }
  }, [user]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
      </a>
      <div className="nav-buttons">
        <div className="nav-email">
          <a type="button" onClick={logout}>
            สวัสดี,{user}
          </a>
        </div>
      </div>
    </nav>
  );
}
