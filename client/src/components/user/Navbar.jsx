import "./Navbar.css";
import logoImg from "../../images/logo-icon-s-blue.png";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import NavB from 'react-bootstrap/Nav';
import NavbarB from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/esm/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    <NavbarB collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <NavbarB.Brand href="/">
        <div className="Logo">
          <img src={logoImg} alt="" className="logo-image" />
        </div>
      </NavbarB.Brand>
      <NavbarB.Toggle aria-controls="responsive-navbar-nav"/>
      <NavbarB.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <NavB className="gap-2">
            <Button onClick={logout} className="nav-transparent-button">เข้าสู่ระบบโดย, {user}</Button>
            <Button onClick={handleClick} className="nav-primary-button">แจ้งน้ำท่วม</Button>
            <Button className="nav-secondary-button" href="/">ตรวจสอบพื้นที่ของคุณ</Button>
        </NavB>
      </NavbarB.Collapse>
    </Container>
  </NavbarB>
  );
}
