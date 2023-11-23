import React from "react";
import "./Footer.css";
import logoImg from "../../images/logo-icon-bt-white.png";

export default function Footer() {
  return (
    <div>
<nav className="footer-bg">
        <nav className="footer-container-1">
            <nav className="footer-head">
                <label>เว็ปไซต์ของเรามีประโยชน์หรือไม่ ?</label>
            </nav>
            <nav className="footer-body">
                <label>หากท่านผู้ใช้งานคิดว่าเว็ปไซต์ของเรามีประโยชน์ต่อท่าน และต้องการสนับสนุนพวกเรา</label>
                <label>สามารถกดที่ปุ่มสนับสนุน เพื่อเป็นกำลังใจให้ทีมงานพัฒนาเว็ปต่อไป</label>
            </nav>
            <nav className="footer-button">
                <button className="button">สนับสนุน</button>
            </nav>
        </nav>
        <nav className="footer-container-2">
            <nav className="footer-logo">
                <img src={logoImg} alt="" className="foot-logo-image"/>
            </nav>
            <nav className="footer-contact">
                <nav className="footer-contact-head">
                    <label>ติดต่อเรา</label>
                </nav>
                <nav className="footer-contact-body">
                    <label className="info1">9/1 ม.5 ถ.พหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12120</label>
                    <label>flood-report@gmail.com</label>
                </nav>
            </nav>
            <nav className="footer-help">
                <nav className="footer-help-head">
                    <label>ช่วยเหลือ</label>
                </nav>
                <nav className="footer-help-body">
                    <label>แจ้งปัญหาน้ำท่วม</label>
                    <label>ข้อตกลงการใช้บริการของเว็ปไซต์</label>
                    <label>นโยบายความเป็นส่วนตัว</label>
                </nav>
            </nav>
          </nav>
        <nav className="footer-container-3">
            <label>Copyright © 2023 Flood Report</label>
        </nav>
    </nav>
    </div>
    
  );
}
