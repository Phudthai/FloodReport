import "./Navbar.css";
import "./SinglePost.css";
import logoImg from "../../images/logo-icon-s-blue.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function SinglePost(props) {

    const [formposts, setFormposts] = useState([]);
    const param = useParams();

    const fetchData = async () => {
        await axios.get(`${process.env.REACT_APP_API}/post/${param.slug}`)
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
      <div>
        <Navbar />
        <div className="moreInfo-outer">
          <Row className="moreInfo">
            <Col>
              {/* image */}
              <div className="info-img">
                <img src={formposts.image} alt="" className="s-img"></img>
              </div>
            </Col>
            <Col>
              <Row className="tag-section">
                <div className="tag">{formposts.status}</div>
              </Row>
              <div className="info-desc">
                <Row>
                  <Col>
                    <p className="info-desc-text">แขวง:</p>
                  </Col>
                  <Col>{formposts.district}</Col>
                </Row>
                <Row>
                  <Col>
                    <p className="info-desc-text">เขต:</p>
                  </Col>
                  <Col>{formposts.area}</Col>
                </Row>
                <Row>
                  <Col>
                    <p className="info-desc-text">รายละเอียดเพิ่มเติม:</p>
                  </Col>
                  <Col>{formposts.information}</Col>
                </Row>
                <div>
                  <Row>
                    <p>ข้อมูลจาก: {formposts.email}</p>
                  </Row>
                  <Row>
                    <p>
                      ทำการโพสเมื่อ:{" "}
                      {new Date(formposts.createdAt).toLocaleString()}
                    </p>
                  </Row>
                </div>
              </div>

              {/* status */}

              {/* district */}

              {/* area */}

              {/* information */}
            </Col>
          </Row>
        </div>
      </div>
    );
}