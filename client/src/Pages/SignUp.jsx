import React from "react";
import "./SignUp.css";
import { useState } from 'react';
import LogoImg from '../images/logo-icon-bt-blue.png'
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const handleclick = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmpassword) {
      await Swal.fire(
        'แจ้งเตือน',
        'กรุณากรอกข้อมูลให้ครบ',
        'error'
      )
      return
    } else {

      await axios.post("/api/signup", { email, password, confirmpassword }).then(async (res) => {
        await Swal.fire(
          'แจ้งเตือน',
          'สมัครสมาชิกสำเร็จ',
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
      <div className="container-body-signup">
        <div class="container-body-signup-config">
          <div className="body-signup-card">
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
            <form className="signup-form" onSubmit={handleclick}>
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
                  className="form-control border-form-signup border-top-0 border-end-0 border-start-0 nunito-placeholder nunito-600"
                  id="signup_Password"
                  placeholder="รหัสผ่าน"
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setConfirmpassword(e.target.value)}
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
              <button onClick={handleclick} className="btn btn-block signup-btn">
                สมัครสมาชิก
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}
export default SignUp;