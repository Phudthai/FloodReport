import React, { useEffect, useState } from "react";
import "./FormPost.css";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';

export default function FormPost() {
  const navigate = useNavigate()

  const [state, setState] = useState({
    district: "",
    area: "",
    information: "",
  });

  const [image, setImage] = useState(null);
  const [pic, setPic] = useState()
  const [uploaded, setUploaded] = useState(false);
  const { district, area, information } = state

  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    

    if (district === "" || area === "" || information === "") {
      await Swal.fire(
        'แจ้งเตือน',
        'กรุณากรอกข้อมูลให้ครบถ้วน',
        'error'
      )
      return
    }

    if (image === null) {
      Swal.fire(
        'แจ้งเตือน',
        'โปรดเลือกรูปภาพ',
        'error'
      )
      return;
    }

    if (image.type !== "image/jpeg" && image.type !== "image/png") {
      Swal.fire(
        'แจ้งเตือน',
        'โปรดเลือกรูปภาพไฟล์ Jpeg หรือ Png',
        'error'
      )
      return;
    }

    if (image.type === "image/jpeg" || image.type === "image/png") {
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "floodreport")
      data.append("cloud_name", "dlw7n48ff")
      try {
        const response = await axios
        .post("https://api.cloudinary.com/v1_1/dlw7n48ff/image/upload", data)
        setPic(response.data.url.toString());
        setUploaded(true)

      } catch (error) {
        Swal.fire('แจ้งเตือน', error.message, 'error');
      }
    }
  }
  useEffect(() => {
    const loadUser = localStorage.getItem("token")

    if(uploaded){
      axios
        .post(`${process.env.REACT_APP_API}/formpost`, { loadUser, district, area, information, pic })
        .then(async (res) => {
          await Swal.fire(
            'แจ้งเตือน',
            res.data.message,
            'success'
          )
          navigate('/')
        }).catch(async (err) => {
          await Swal.fire(
            'แจ้งเตือน',
            err.response.data.error,
            'error'
          )
        })
    }
  },[uploaded])

  return (

    <div className="main-container-formpost">
      <Navbar />
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
            <input type="file" p={1.5} accept="image/*" onChange={handleImage}></input>
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