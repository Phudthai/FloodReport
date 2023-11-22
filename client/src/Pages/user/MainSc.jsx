import "./MainSc.css";
import googlemap from "../../images/googlemap.jpg";
import status from "../../images/floodingstatus.png";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router";

export default function MainSc() {
  const [formposts, setFormposts] = useState([]);

  const navigate = useNavigate();
  const fetchData = async () => {
    await axios.get(`${process.env.REACT_APP_API}/`)
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
      <div className="maps-menu">
        <img src={googlemap} alt="" className="googleAPI" />
        <img src={status} alt="" className="menusc" />
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
                <button onClick={() => navigate(`/post/${formpost.slug}`)} className="button-accept">info</button>
              </tr>

            </tbody>
          ))

        ) : (
          <p>No data available</p>
        )}

      </Table>
      <Footer />
    </div>
  );
}