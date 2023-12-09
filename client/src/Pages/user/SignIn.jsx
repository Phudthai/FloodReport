import React, { useState } from "react";
import "./SignIn.css";
import LogoImg from "../../images/logo-icon-bt-blue.png";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import { authenticate } from "../../service/autherize";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const lowercaseemail = email.toLowerCase();
  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();

    await axios
      .post(`${process.env.REACT_APP_API}/signin`, { lowercaseemail, password })
      .then(async (res) => {
        //login สำเร็จ
        await Swal.fire("แจ้งเตือน", "เข้าสู่ระบบสำเร็จ", "success");
        authenticate(res, () => navigate("/"));
        window.location.reload(true);
      })
      .catch((err) => {
        Swal.fire("แจ้งเตือน", err.response.data.error, "error");
      });
  };

  return (
    <div className="vh-100 d-flex">
      <div class="container-body-signin m-auto">
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
            <form className="signin-form" onSubmit={submitForm}>
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
                  placeholder="Email@example.com"
                  onChange={inputValue("email")}
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
                  placeholder="รหัสผ่าน"
                  onChange={inputValue("password")}
                ></input>
              </div>
              <button type="submit" className="btn btn-block signin-btn">
                เข้าสู่ระบบ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
