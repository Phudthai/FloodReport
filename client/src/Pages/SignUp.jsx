import React from "react";
import "./SignUp.css";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LogoImg from '../images/logo-icon-bt-blue.png'
import MainSc from "./MainSc";

export default function SignUp() {
	const [show, setShow] = useState(true);
	return (
    <>
      <MainSc />
      <Modal
        className="container-modal-signup"
        size="md"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body className="container-modal-body">
          <div className="container-body">
            <div class="card-body body-signup-card">
              <div>
                <img src={LogoImg} className="LogoImg-image" alt="" />
                <div class="btngroup btngroup-signup">
                  <button class="btn btn-sm signup-btn-activate">
                    สมัครสมาชิก
                  </button>
                  <a href="/signin">
                    <button class="btn btn-sm signin-tab-btn-unactivate">
                      เข้าสู่ระบบ
                    </button>
                  </a>
                </div>
                <div className="mb-3">
                  <label
                    for="exampleInputEmail1"
                    className="form-label nunito-600"
                  >
                    อีเมล
                  </label>
                  <input
                    type="email"
                    className="form-control border-form-signup border-top-0 border-end-0 border-start-0 nunito-placeholder nunito-600"
                    id="signup_Email"
                    aria-describedby="emailHelp"
                    placeholder="Email@example.com"
                  ></input>
                </div>

                <div className="mb-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label nunito-600"
                  >
                    รหัสผ่าน
                  </label>
                  <input
                    type="password"
                    className="form-control border-form-signup border-top-0 border-end-0 border-start-0 nunito-placeholder nunito-600"
                    id="signup_Password"
                    placeholder="รหัสผ่าน"
                  ></input>
                </div>

                <div className="mb-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label nunito-600"
                  >
                    ยืนยันรหัสผ่าน
                  </label>
                  <input
                    type="password"
                    className="form-control border-form-signup border-top-0 border-end-0 border-start-0 nunito-placeholder nunito-600"
                    id="signup_ConfirmPassword"
                    placeholder="ยืนยันรหัสผ่าน"
                  ></input>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input signup-checkbox"
                    id="exampleCheck1"
                  ></input>
                  <p
                    className="form-check-label font-checkbox"
                    for="exampleCheck1"
                  >
                    ฉันได้ยอมรับกับ{" "}
                    <a href=" ">เงื่อนไขและข้อตกลงการให้บริการ</a> แล้ว
                  </p>
                </div>
                <a href="/signin">
                  <button type="submit" className="btn btn-block signup-btn">
                    สมัครสมาชิก
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}