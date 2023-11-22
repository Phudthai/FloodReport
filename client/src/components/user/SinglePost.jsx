import "./Navbar.css";
import logoImg from "../../images/logo-icon-s-blue.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
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
            {/* district */}
            <p>district</p>
            <p> : {formposts.district}</p>
            {/* area */}
            <p>area</p>
            <p> : {formposts.area}</p>
            {/* information */}
            <p>information</p>
            <p> : {formposts.information}</p>
            {/* image */}
            <p>image</p>
            <img src={formposts.image} alt=""></img>
            {/* status */}
            <p>status</p>
            <p> : {formposts.status}</p>
        </div>
    )
}