import React from "react";
import './SignIn.css';
import cwg1 from '../images/cwg.png';
export default function SignIn() {
	return (
		<div className="container signin-container ">
            <div class="card mb-3 card-center position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body rounded">
                <div class="card-body body-signin-card">
                    <div>
                        <div class="btngroup">
                            <a href="/signup"><button class="btn btn-sm signup-tab-btn">สมัครสมาชิก</button></a>
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

                        <div className="mb-3 form-check">
                            <a href="#" className="signin-font-label text-end">ลืมรหัสผ่าน?</a>
                        </div>

                        <button type="submit" className="btn btn-block signin-btn">เข้าสู่ระบบ</button>

                        <div className="ortext">
                            หรือ
                        </div>

                        <div className="continueWgoogle">
                            <div className="google-container-btn">
                            <button type="submit" className="btn btn-block google-btn">
                                    <img src={cwg1} class="cwg-image" alt=""/>
                                    <p class="google-text nunito-600">เข้าสู่ระบบด้วย Google</p>
                                </button> 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}
