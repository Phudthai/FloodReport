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

export default function MainSc() {
  const [formposts, setFormposts] = useState([]);

  const navigate = useNavigate();
  const fetchData = async () => {
    await axios.get(`${process.env.REACT_APP_API}/post`)
      .then((response) => {
        setFormposts(response.data)
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="main-container">
      <Navbar />
      <div className="table-header-hero">
        <h1 className="table-header-text">รายการสถานการณ์น้ำท่วม</h1>
      </div>
      <div className="table-container">
        <div className="table-wrapper">
          <Row className="table-header">
          <Col className="table-data">
            <div>สถานะน้ำท่วม</div>
            </Col>
            <Col className="table-data">
              <div>เขต</div>
            </Col>
            <Col className="table-data">
            <div>แขวง</div>
            </Col>
            <Col className="table-data">
            <div>รายละเอียด</div>
            </Col>
            <Col className="table-data">
            <div>วันที่</div>
            </Col>
            <Col className="table-data">
            <div>เวลา</div>
            </Col>
            <Col className="table-data">
            <div>ดูข้อมูลเพิ่มเติม</div>
            </Col>
          </Row>
          {formposts.length > 0 ? (
              formposts.map((formpost) => (
          <Row className="table-data-fetch">
            <Col className="table-data">
              <div>{formpost.status}</div>
            </Col>
            <Col className="table-data">
            <div>{formpost.area}</div>
            </Col>
            <Col className="table-data">
              <div>{formpost.district}</div>
            </Col>
            <Col className="table-data">
            <div>{formpost.information}</div>
            </Col>
            <Col className="table-data">
            <div>xx/xx/xx</div>
            </Col>
            <Col className="table-data">
            <div>xx:xx</div>
            </Col>
            <Col className="table-data">
            <Link to={`/post/${formpost.slug}`}>info
                    </Link>
            </Col>
          </Row>
          ))
          ) : (
            <p>ไม่มีข้อมูลน้ำท่วม</p>
          )}


        {/* <Table striped="columns" responsive="sm" className="table-row-body"> 
            <thead>
              <tr>
                <th>#</th>
                <th>District</th>
                <th>Area</th>
                <th>Information</th>
                <th>Status</th>
                <th>Button</th>
              </tr>
            </thead>
            {formposts.length > 0 ? (
              formposts.map((formpost, index) => (
                <tbody>
                  <tr className="table-row-body" key={index}>
                    <td>{index + 1}</td>
                    <td>{formpost.district}</td>
                    <td>{formpost.area}</td>
                    <td>{formpost.information}</td>
                    <td>{formpost.status}</td>
                    <td>
                    <Link to={`/post/${formpost.slug}`}>info
                    </Link>
                    </td>
                  </tr>
                </tbody>
              ))

            ) : (
              <p>ไม่มีข้อมูลน้ำท่วม</p>
            )}
          </Table> */}
        </div>
      </div>
        
      
      
      {/* <div className="table-container">
        <div className="table-wrapper">
          <div className="table-header">
            <h1>รายการสถานการณ์น้ำท่วม</h1>
          </div>
          <Table striped="columns">
            <thead>
              <tr>
                <th>#</th>
                <th>District</th>
                <th>Area</th>
                <th>Information</th>
                <th>Status</th>
                <th>Button</th>
              </tr>
            </thead>
            {formposts.length > 0 ? (
              formposts.map((formpost, index) => (
                <tbody>
                  <tr className="table-row-body" key={index}>
                    <td>{index + 1}</td>
                    <td>{formpost.district}</td>
                    <td>{formpost.area}</td>
                    <td>{formpost.information}</td>
                    <td>{formpost.status}</td>
                    <td>
                    <Link to={`/post/${formpost.slug}`}>info
                    </Link>
                    </td>
                  </tr>
                </tbody>
              ))

            ) : (
              <p>No data available</p>
            )}
          </Table>
        </div>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}