import "./Navbar.css";
import logoImg from "../../images/logo-icon-s-blue.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SinglePost(){

    const [formposts, setFormposts] = useState([]);

    const navigate = useNavigate();

    const fetchData = async () => {
        await axios.get(`${process.env.REACT_APP_API}/post/:slug`)
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
    return(
        <div>{formposts}</div>
    )
}