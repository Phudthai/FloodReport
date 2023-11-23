import "./MainSc.css";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Donate() {
  return (
    <div className="main-container">
      <Navbar />
      <div>
        <div>
            <h1>สนับสนุนพวกเรา</h1>
        </div>
        <div>
            <div>
                <img></img>
            </div>
            <div>
                <p>จิรชาติ หงษ์สามารถ</p>
            </div>
        </div>
      </div>
       <Footer /> 
    </div>
  );
}