import React from "react";
import "./MainSc.css";
import googlemap from "../images/googlemap.jpg";
import status from "../images/floodingstatus.png";
export default function MainSc() {
  return (
    <div>
      <img src={googlemap} className="googleAPI" />
      <img src={status} className="menusc" />
      <h1 class="center-text">ตรวจสอบพื้นที่ของคุณ</h1>
      <div class="container">
        <p class="custom-style center-text">แขวง / เขต:</p>
        <label for="menu"></label>
        <select id="menu" class="custom-dropdown custom-style">
          <option value="option1">กรุณาเลือก</option>
          <option value="option2">ตัวเลือก 2</option>
          <option value="option3">ตัวเลือก 3</option>
          <option value="option4">ตัวเลือก 4</option>
        </select>
        <p class="custom-style center-text">ตำบล / อำเภอ:</p>
        <label for="menu"></label>
        <select id="menu" class="custom-dropdown custom-style">
          <option value="option1">กรุณาเลือก</option>
          <option value="option2">ตัวเลือก 2</option>
          <option value="option3">ตัวเลือก 3</option>
          <option value="option4">ตัวเลือก 4</option>
        </select>
      </div>

      <div class="table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th>สถานะน้ำท่วม</th>
              <th>เขต</th>
              <th>แขวง</th>
              <th>วันที่</th>
              <th>เวลา</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
            </tr>
            <tr>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
            </tr>
            <tr>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
            </tr>
            <tr>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
            </tr>
            <tr>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
            </tr>
            <tr>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
            </tr>
            <tr>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
            </tr>
            <tr>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
            </tr>
            <tr>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
            </tr>
            <tr>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
            </tr>
            <tr>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
            </tr>
            <tr>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
              <td>xoxoxox</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}