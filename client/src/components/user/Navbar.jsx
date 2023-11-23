import "./Navbar.css";
import logoImg from "../../images/logo-icon-s-blue.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import NavB from 'react-bootstrap/Nav';
import NavbarB from 'react-bootstrap/Navbar';

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
      <NavbarB.Toggle aria-controls="responsive-navbar-nav" />
      <NavbarB.Collapse id="responsive-navbar-nav">
        <NavB className="me-auto">
        </NavB>
        <NavB>
        <div className="nav-email">
          <a type="button" onClick={logout}>
            เข้าสู่ระบบโดย, {user}
          </a>
        </div>  
        <button onClick={handleClick} className="btn custom-button1">แจ้งน้ำท่วม</button>
        <a className="btn custom-button2" href="/">
          ตรวจสอบพื้นที่ของคุณ
        </a>
          {/* <NavB.Link href="#deets">More deets</NavB.Link>
          <NavB.Link eventKey={2} href="#memes">
            Dank memes
          </NavB.Link> */}
        </NavB>
      </NavbarB.Collapse>
    </Container>
  </NavbarB>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="/">
    //     <div className="Logo">
    //       <img src={logoImg} alt="" className="logo-image" />
    //     </div>
    //   </a>

    //   <div className="nav-buttons">
    //     <div className="nav-email">
    //       <a type="button" onClick={logout}>
    //         สวัสดี,{user}
    //       </a>
    //     </div>
    //     <button onClick={handleClick} className="btn custom-button1">แจ้งน้ำท่วม</button>
    //     <a className="btn custom-button2" href="#check">
    //       ตรวจสอบพื้นที่ของคุณ
    //     </a>
    //   </div>
    // </nav>
  );
}
