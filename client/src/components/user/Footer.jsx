import React from "react";
import logoImg from "../../images/logo-icon-bt-white.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function Footer() {
	return (
		<footer className="mt-5 sticky-bottom position-relative w-100">
			<Container style={{ backgroundColor: "#687EFF"}} fluid>
                <Container >
				<Row >
					<Col className="text-center"
						xxl={3}
						xl={4}
						lg={4}
						md={4}
						sm={12}
						xs={12}
					>
						<Image src={logoImg} alt="" style={{width:189}} fluid/>
					</Col>
					<Col xxl={9} xl={8} lg={8} md={8} sm={12} xs={12} className="m-auto">
						<Container>
							<Row style={{ color: "#B6FFFA", fontSize: 20 }}>
								<Col className="m-auto" xxl={6} xl={6} lg={6} md={6} sm={7} xs={12}>
									<p>ติดต่อเรา</p>
									<Row>
										<Col
											style={{ color: "#ffffff", fontSize: 14 }}
											className="d-flex"
										>
											<i class="fa-solid fa-location-dot"></i>
											<p className="ps-2">
												9/1 ม.5 ถ.พหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี
												12120
											</p>
										</Col>
									</Row>
									<Row>
										<Col
											style={{ color: "#ffffff", fontSize: 14 }}
											className="d-flex"
										>
											<i class="fa-solid fa-envelope"></i>{" "}
											<p className="ps-2">flood-report@gmail.com</p>
										</Col>
									</Row>
								</Col>
								<Col className="m-auto" xxl={6} xl={6} lg={6} md={6} sm={5} xs={12}>
									<p>ช่วยเหลือ</p>
									<Row>
										<Col
											style={{ color: "#ffffff", fontSize: 14 }}
											className="d-flex"
										>
											<i class="fa-solid fa-flag"></i>
											<p className="ps-2">แจ้งปัญหาน้ำท่วม</p>
										</Col>
									</Row>
									<Row>
										<Col
											style={{ color: "#ffffff", fontSize: 14 }}
											className="d-flex"
										>
											<i class="fa-solid fa-scroll"></i>
											<p className="ps-2">ข้อตกลงการใช้บริการของเว็ปไซต์</p>
										</Col>
									</Row>
                                    <Row>
                                    <Col
											style={{ color: "#ffffff", fontSize: 14 }}
											className="d-flex"
										>
                                            <i class="fa-solid fa-user"></i>
                                            <p className="ps-2">นโยบายความเป็นส่วนตัว</p>
                                        </Col>
                                    </Row>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
				<Row>
					<Col className="text-center" style={{ color: "#ffffff", fontSize: 14 }}>
						<p>&copy; 2023 Flood Report. All rights reserved.</p>
					</Col>
				</Row>
                </Container>
			</Container>
		</footer>

		//     <div>

		// <nav className="footer-bg">
		//         <nav className="footer-container-1">
		//             <nav className="footer-head">
		//                 <label>เว็ปไซต์ของเรามีประโยชน์หรือไม่ ?</label>
		//             </nav>
		//             <nav className="footer-body">
		//                 <label>หากท่านผู้ใช้งานคิดว่าเว็ปไซต์ของเรามีประโยชน์ต่อท่าน และต้องการสนับสนุนพวกเรา</label>
		//                 <label>สามารถกดที่ปุ่มสนับสนุน เพื่อเป็นกำลังใจให้ทีมงานพัฒนาเว็ปต่อไป</label>
		//             </nav>
		//             <nav className="footer-button">
		//                 <button className="button">สนับสนุน</button>
		//             </nav>
		//         </nav>
		//         <nav className="footer-container-2">
		//             <nav className="footer-logo">
		//                 <img src={logoImg} alt="" className="foot-logo-image"/>
		//             </nav>
		//             <nav className="footer-contact">
		//                 <nav className="footer-contact-head">
		//                     <label>ติดต่อเรา</label>
		//                 </nav>
		//                 <nav className="footer-contact-body">
		//                     <label className="info1">9/1 ม.5 ถ.พหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12120</label>
		//                     <label>flood-report@gmail.com</label>
		//                 </nav>
		//             </nav>
		//             <nav className="footer-help">
		//                 <nav className="footer-help-head">
		//                     <label>ช่วยเหลือ</label>
		//                 </nav>
		//                 <nav className="footer-help-body">
		//                     <label>แจ้งปัญหาน้ำท่วม</label>
		//                     <label>ข้อตกลงการใช้บริการของเว็ปไซต์</label>
		//                     <label>นโยบายความเป็นส่วนตัว</label>
		//                 </nav>
		//             </nav>
		//           </nav>
		//         <nav className="footer-container-3">
		//             <label>Copyright © 2023 Flood Report</label>
		//         </nav>
		//     </nav>
		//     </div>
	);
}
