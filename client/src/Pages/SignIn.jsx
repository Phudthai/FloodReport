import React from "react";
import './SignIn.css';
import { useState } from 'react';
import LogoImg from '../images/logo-icon-bt-blue.png'
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate()
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleclick = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      await Swal.fire(
        'แจ้งเตือน',
        'กรุณากรอกข้อมูลให้ครบ',
        'error'
      )
      return
    } else {

      await axios.post("/api/signin", { email, password }).then(async (res) => {
        await Swal.fire(
          'แจ้งเตือน',
          'เข้าสู่ระบบสำเร็จ',
          'success'
        )
        navigate('/')
      }).catch((err) => {
        Swal.fire(
          'แจ้งเตือน',
          err.response.data.error,
          'error'
        )
      })
    }
  }
  return (
    <>
      <div class="container-body-signin">
        <div class="container-body-signin-config">
          <div className="body-signup-card">
            <img src={LogoImg} className="LogoImg-image" alt="" />
            <div class="btngroup btngroup-signin">
              <a href="/signup">
                <button class="btn btn-sm signup-tab-btn-unactivate">
                  สมัครสมาชิก
                </button>
              </a>
              <button class="btn btn-sm signin-btn-activate">
                เข้าสู่ระบบ
              </button>
            </div>
            <form className="signin-form" onSubmit={handleclick}>
              <div className="mb-3">
                <label
                  for="exampleInputEmail1"
                  className="form-label nunito-600"
                >
                  อีเมล
                </label>
                <input
                  type="email"
                  className="form-control border-form-signin border-top-0 border-end-0 border-start-0 nunito-600 nunito-placeholder"
                  id="signin_Email"
                  aria-describedby="emailHelp"
                  placeholder="Email@example.com"
                  onChange={(e) => setEmail(e.target.value)}
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
                  className="form-control border-form-signin border-top-0 border-end-0 border-start-0 nunito-600 nunito-placeholder"
                  id="signin_Password"
                  placeholder="รหัสผ่าน"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <button onClick={handleclick} className="btn btn-block signin-btn">
                เข้าสู่ระบบ
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;