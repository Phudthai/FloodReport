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
        <div >
            <Navbar />
            <div className="moreInfo-outer">
            <Row className="moreInfo">
            <Col className="col-left">
            {/* image */}
            <div className="info-img">
            <img src={formposts.image} alt=""className="s-img" ></img>
            </div>
            </Col>
            <Col className="col-right">
            <Row><div className="tag">{formposts.status}</div></Row>
            <Row>{formposts.district}</Row>
            <Row>{formposts.area}</Row>
            <Row>{formposts.information}</Row>
            {/* status */}
            
            {/* district */}
            
            {/* area */}
            
            {/* information */}
            
            </Col>
            </Row>
            </div>
            
            
            
            
            
        </div>
    )
}