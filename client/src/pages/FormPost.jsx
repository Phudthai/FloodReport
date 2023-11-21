import React, { useEffect, useState } from "react";
import "./FormPost.css";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

export default function FormPost() {
  const [state, setState] = useState({
    district: "",
    area: "",
    information: "",
    image:""
  });

  const { district, area, information } = state

  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };
  
  const [pic,setPic] = useState()
  const [loading, setLoading] = useState(false)
  const submitForm = async (req, res) => {
    const loadUser = localStorage.getItem("token")

  }

  const postDetails = (pics) => {
    setLoading(true);

    if (pics === undefined) {
      Swal.fire(
        'แจ้งเตือน',
        'โปรดเลือกรูปภาพ',
        'error'
      )
      return;
    }

    if (pics.type !== "image/jpeg" && pics.type !== "image/png") {
      Swal.fire(
        'แจ้งเตือน',
        'โปรดเลือกรูปภาพไฟล์ Jpeg หรือ Png',
        'error'
      )
      setLoading(false);
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {

      const data = new FormData()
      data.append("file", pics)
      data.append("upload_preset", "floodreport")
      data.append("cloud_name", "dlw7n48ff")
      axios.post("https://api.cloudinary.com/v1_1/dlw7n48ff/image/upload", data)
        .then((response) => {
          console.log("Cloudinary response:", response);
          setPic(response.data.url.toString());
          setLoading(false);
          Swal.fire(
            'แจ้งเตือน',
            'อัพโหลดรูปภาพสำเร็จ',
            'success'
          )
        })
        .catch((error) => {
          console.log("Cloudinary error:", error);
          setLoading(false);
        });
    }
  }

  const handleDataFromChild = (data) => {
    setImage(data)
  }

  useEffect(() => {

  }, []);
  return (
    
    <div className="main-container-formpost">
      <Navbar />
      {loading && <Loading />}
      <form className="config-container-formpost" onSubmit={submitForm}>
        <div className="form-row1">
          <div className="form-row1-infomation">
            <p>แขวง:</p>
            <input onChange={inputValue("district")} cols="40" rows="5" />
          </div>
          <div className="form-row1-infomation">
            <p>เขต:</p>
            <input onChange={inputValue("area")} cols="40" rows="5" />
          </div>
        </div>
        <div className="form-row2-description">
          <div className="form-row2-description-text">
            <p>รายละเอียดเพิ่มเติม:</p>
          </div>
          <div className="form-row2-description-textarea">
            <input onChange={inputValue("information")} cols="67" rows="5" />
          </div>
        </div>
        <div className="form-row3-picture">
          <div className="form-row3-picture-text">
            <p>แนบรูปภาพสถานที่:</p>
          </div>
          <div className="form-row3-picture-image">
            <input type="file" p={1.5} accept="image/*" onChange={(e) => postDetails(e.target.files[0])}></input>
          </div>
        </div>
        <div className="form-row4-button">
          <div className="form-row4-button-1">
            <a href="/">
              <button className="button-back">ย้อนกลับ</button>
            </a>
          </div>
          <div className="form-row4-button-2">
              <button type="submit" className="button-submit">ยืนยันการโพส</button>
          </div>
        </div>
      </form>
    </div>
  );
}
