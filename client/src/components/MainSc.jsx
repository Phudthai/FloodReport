import React from "react";
import "./Navbar.css";
import googlemap from "../images/googlemap.jpg";
import status from "../images/floodingstatus.png";
export default function MainSc() {
  return (
    <div>
        <img src={googlemap} className="googleAPI" />
        <img src={status} className="menusc"/>
    </div>
  );
}