import React from "react";
import "./SignUp.css";
import cwg1 from "../images/cwg.png";

export default function SignUp() {
	return (
		<div className="container signup-container ">
			<div class="card mb-3 card-center position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body rounded ">
				<div class="card-body body-signup-card">
					<div>
						<div class="btngroup">
							<button class="btn btn-sm signup-btn-activate">สมัครสมาชิก</button>
							<a href="/signin">
								<button class="btn btn-sm signin-tab-btn">เข้าสู่ระบบ</button>
							</a>
						</div>
						<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label nunito-600">
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
							<label for="exampleInputPassword1" className="form-label nunito-600">
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
							<label for="exampleInputPassword1" className="form-label nunito-600">
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
								ฉันได้ยอมรับกับ <a href=" ">เงื่อนไขและข้อตกลงการให้บริการ</a> แล้ว
							</p>
						</div>

						<button type="submit" className="btn btn-block signup-btn">
							สมัครสมาชิก
						</button>

						<div className="ortext">หรือ</div>

						<div className="continueWgoogle">
							<div className="google-container-btn">
								<button type="submit" className="btn btn-block google-btn">
									<img src={cwg1} class="cwg-image" alt="" />
									<p class="google-text">สมัครสมาชิกด้วย Google</p>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}