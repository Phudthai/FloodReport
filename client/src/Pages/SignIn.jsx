import React from "react";
import './SignIn.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LogoImg from '../images/logo-icon-bt-blue.png'
import MainSc from "./MainSc";
export default function SignIn() {
    const [show, setShow] = useState(true);
	return (
        <>
        <MainSc/>
		<Modal
        className="container-modal-signin"
        size="md"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body className="container-modal-body">
          <div class="card-body body-signin-card">
                    <div>
                        <img src={LogoImg} className="LogoImg-image" alt=""/>
                        <div class="btngroup btngroup-signin">
                            <a href="/signup"><button class="btn btn-sm signup-tab-btn-unactivate">สมัครสมาชิก</button></a>
                            <button class="btn btn-sm signin-btn-activate" >เข้าสู่ระบบ</button>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label nunito-600">อีเมล</label>
                            <input type="email" className="form-control border-form-signin border-top-0 border-end-0 border-start-0 nunito-600 nunito-placeholder" id="signin_Email" aria-describedby="emailHelp" placeholder="Email@example.com"></input>
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label nunito-600">รหัสผ่าน</label>
                            <input type="password" className="form-control border-form-signin border-top-0 border-end-0 border-start-0 nunito-600 nunito-placeholder" id="signin_Password" placeholder="รหัสผ่าน"></input>
                        </div>
                        <button type="submit" className="btn btn-block signin-btn">เข้าสู่ระบบ</button>

                    </div>
                </div>
        </Modal.Body>
		</Modal>
		</>
	);
}
