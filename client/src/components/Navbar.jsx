import "./Navbar.css";
import logoImg from "../images/logo-icon-s-blue.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [user, setUser] = useState();

  const navigate = useNavigate()
  const handleClick = async (req, res) => {
    if (localStorage.getItem("token") !== null) {
      navigate("/formpost")
    } else {
      navigate("/signup")
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setUser(localStorage.getItem("token"))
    }
    else {
      setUser("Guest")
      console.log(user)
    }
  }, [user]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <div className="Logo">
          <img src={logoImg} alt="" className="logo-image" />
        </div>
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
