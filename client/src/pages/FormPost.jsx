import React from "react";
import "./FormPost.css";
import googlemap from "../images/googlemap.jpg";
import floodingimage from "../images/flooding.jpg";

export default function FormPost() {
  return (
    <div className="main-container-formpost">
      <div className="config-container-formpost">
        <div className="form-row1">
          <div className="form-row1-location">
            <div className="form-row1-location-text">
              <p>เลือกพิกัดที่ต้องการ:</p>
            </div>
            <div className="form-row1-location-image">
              <img src={googlemap} alt="" className="google-map-image-row1" />
            </div>
          </div>
          <div className="form-row1-infomation">
            <p>รายละเอียดทั่วไป:</p>
            <textarea name="description" id="description" cols="40" rows="5" />
          </div>
        </div>
        <div className="form-row2-description">
          <div className="form-row2-description-text">
            <p>รายละเอียดที่ต้องการ:</p>
          </div>
          <div className="form-row2-description-textarea">
            <textarea name="description" id="description" cols="67" rows="5" />
          </div>
        </div>
        <div className="form-row3-picture">
          <div className="form-row3-picture-text">
            <p>รูปภาพ:</p>
          </div>
          <div className="form-row3-picture-image">
            <img src={floodingimage} alt="" className="google-map-image-row3" />
          </div>
        </div>
        <div className="form-row4-button">
          <div className="form-row4-button-1">
            <a href="/">
              <button className="button-back">ย้อนกลับ</button>
            </a>
          </div>
          <div className="form-row4-button-2">
            <a href="/">
              <button className="button-submit">ยืนยันการโพส</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
