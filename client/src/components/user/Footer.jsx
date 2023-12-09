import React from "react";
import logoImg from "../../images/logo-icon-bt-white.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./Footer.css";
import { Outlet, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import QR from "../../images/qr.jpg";

export default function Footer() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [showTos, setShowTos] = useState(false);

	const handleCloseTos = () => setShowTos(false);
	const handleShowTos = () => setShowTos(true);

	const [showPol, setShowPol] = useState(false);

	const handleClosePol = () => setShowPol(false);
	const handleShowPol = () => setShowPol(true);

	return (
		<footer className="mt-5 sticky-bottom position-relative w-100">
			<Container style={{ backgroundColor: "#687EFF" }} fluid>
				<Container className="text-center p-5 border-bottom">
					<Row style={{ color: "#FFFFFF", fontSize: 32 }}>
						<Col className="m-auto">
							<p>เว็ปไซต์ของเรามีประโยชน์หรือไม่ ?</p>
						</Col>
					</Row>
					<Row style={{ color: "#FFFFFF", fontSize: 14 }}>
						<Col xxl={5} xl={6} lg={7} md={8} sm={9} xs={12} className="m-auto">
							<p>
								หากท่านผู้ใช้งานคิดว่าเว็ปไซต์ของเรามีประโยชน์ต่อท่าน
								และต้องการสนับสนุนพวกเรา สามารถกดที่ปุ่มสนับสนุน
								เพื่อเป็นกำลังใจให้ทีมงานพัฒนาเว็ปต่อไป
							</p>
						</Col>
					</Row>
					<Row>
						<Col className="m-auto">
							<Button
								style={{ fontSize: 20, fontWeight: 600 }}
								className="nav-donate-button"
								onClick={handleShow}
							>
								สนับสนุน
							</Button>

							<Modal
								show={show}
								onHide={handleClose}
								animation={true}
								size="lg"
								aria-labelledby="contained-modal-title-vcenter"
								centered
							>
								<Modal.Header closeButton>
									<Modal.Title>ช่วยเหลือพวกเรา</Modal.Title>
								</Modal.Header>
								<Modal.Body className="text-center">
									<Row>
										<Col>
											<Image
												src={QR}
												style={{
													width: 600,
													height: 700,
													borderRadius: 10,
												}}
											/>
										</Col>
									</Row>
								</Modal.Body>
								<Modal.Footer>
									<Button variant="outline-secondary" onClick={handleClose}>
										ปิด
									</Button>
								</Modal.Footer>
							</Modal>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container style={{ backgroundColor: "#687EFF" }} fluid>
				<Container className="p-5 border-bottom">
					<Row>
						<Col
							className="text-center"
							xxl={3}
							xl={4}
							lg={4}
							md={4}
							sm={12}
							xs={12}
						>
							<Image src={logoImg} alt="" style={{ width: 189 }} fluid />
						</Col>
						<Col
							xxl={9}
							xl={8}
							lg={8}
							md={8}
							sm={12}
							xs={12}
							className="m-auto"
						>
							<Container>
								<Row style={{ color: "#B6FFFA", fontSize: 20 }}>
									<Col
										className="m-auto"
										xxl={6}
										xl={6}
										lg={6}
										md={6}
										sm={7}
										xs={12}
									>
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
									<Col
										className="m-auto"
										xxl={6}
										xl={6}
										lg={6}
										md={6}
										sm={5}
										xs={12}
									>
										<p>ช่วยเหลือ</p>
										<Row>
											<Col>
												<Link
													to="/formpost"
													className=" d-flex text-decoration-none"
													style={{ color: "#ffffff", fontSize: 14 }}
												>
													<i class="fa-solid fa-flag"></i>
													<p className="ps-2">แจ้งปัญหาน้ำท่วม</p>
												</Link>
											</Col>
										</Row>
										<Row>
											<Col>
												<Link
													className="d-flex  text-decoration-none"
													onClick={handleShowTos}
													style={{ color: "#ffffff", fontSize: 14 }}
												>
													<i class="fa-solid fa-scroll"></i>
													<p className="ps-2">ข้อตกลงการใช้บริการของเว็ปไซต์</p>
												</Link>
												<Modal
													show={showTos}
													onHide={handleCloseTos}
													animation={true}
													size="lg"
													aria-labelledby="contained-modal-title-vcenter"
													centered
												>
													<Modal.Header closeButton>
														<Modal.Title id="contained-modal-title-vcenter">
															ข้อตกลงการใช้บริการของเว็ปไซต์
														</Modal.Title>
													</Modal.Header>
													<Modal.Body>
														<Row>
															<Col>
																<p>
																	โปรดอ่านข้อกำหนดในการให้บริการเหล่านี้อย่างละเอียด
																	การใช้งานของคุณ (ตามที่กำหนดไว้ด้านล่าง)
																	ถือเป็นการยินยอมของคุณต่อข้อตกลงนี้
																</p>
															</Col>
														</Row>
														<Row>
															<Col>
																<p>
																	1การให้บริการ:
																	เว็บไซต์นี้มีเป้าหมายเพื่อช่วยในการแจ้งข่าวสารเกี่ยวกับพื้นที่ประสบอุทกภัย
																	เพื่อให้ผู้ใช้งานได้หลีกเลี่ยงเส้นทางหรือพื้นที่ดังกล่าว
																	การให้บริการของเรามุ่งเน้นให้ข้อมูลที่ถูกต้องเท่าที่เป็นไปได้แก่ผู้ใช้บริการทุกท่าน.
																</p>
															</Col>
														</Row>
														<Row>
															<Col>
																<p>
																	2ความรับผิดชอบ:
																	เราไม่รับประกันความถูกต้องของข้อมูลที่ได้รับจากแหล่งข้อมูลภายนอกหรือผู้ใช้บริการ
																	ผู้ใช้ต้องตรวจสอบความถูกต้องของข้อมูลด้วยความระมัดระวัง
																</p>
															</Col>
														</Row>
														<Row>
															<Col>
																<p>
																	3การใช้งานและความเสี่ยง:
																	การใช้บริการของเราถือเป็นความยินยอมที่ยอมรับความเสี่ยงที่อาจเกิดขึ้น
																	เราไม่รับผิดชอบต่อความสูญหายหรือความเสียหายที่อาจเกิดขึ้นจากการใช้บริการ.
																</p>
															</Col>
														</Row>
														<Row>
															<Col>
																<p>
																	4การเปลี่ยนแปลง:
																	เราสงวนสิทธิ์ในการเปลี่ยนแปลงข้อกำหนดและเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
																	การใช้บริการต่อจากการเปลี่ยนแปลงถือเป็นการยอมรับข้อกำหนดและเงื่อนไขใหม่.
																</p>
															</Col>
														</Row>
														<Row>
															<Col>
																<p>
																	การใช้บริการของเราถือเป็นการยินยอมตามข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ข้างต้น
																	หากมีคำถามหรือข้อสงสัยเกี่ยวกับข้อกำหนดและเงื่อนไขนี้
																	โปรดติดต่อเราสำหรับความช่วยเหลือ
																	ได้ตามอีเมล์ที่ระบุไว้ทางเว็บไซต์
																</p>
															</Col>
														</Row>
													</Modal.Body>
													<Modal.Footer>
														<Button
															variant={"outline-secondary"}
															onClick={handleCloseTos}
														>
															ปิด
														</Button>
													</Modal.Footer>
												</Modal>
											</Col>
										</Row>
										<Row>
											<Col>
												<Link
													className=" d-flex text-decoration-none"
													onClick={handleShowPol}
													style={{ color: "#ffffff", fontSize: 14 }}
												>
													<i class="fa-solid fa-user"></i>
													<p className="ps-2">นโยบายความเป็นส่วนตัว</p>
												</Link>
												<Modal
													show={showPol}
													onHide={handleClosePol}
													animation={true}
													size="lg"
													aria-labelledby="contained-modal-title-vcenter"
													centered
												>
													<Modal.Header closeButton>
														<Modal.Title id="contained-modal-title-vcenter">
															นโยบายความเป็นส่วนตัว
														</Modal.Title>
													</Modal.Header>
													<Modal.Body>
														<Row>
															<Col>
																<p>
																	นโยบายความเป็นส่วนตัว
																	เว็บไซต์แจ้งข่าวสารเกี่ยวกับพื้นที่ประสบอุทกภัย
																	ได้มีการเก็บรวบรวมข้อมูลของผู้สูญหายและผู้ใช้บริการ
																	ตามนโยบายความเป็นส่วนตัว ดังนี้
																</p>
															</Col>
														</Row>
														<Row>
															<Col>
																<p>
																	1ข้อมูลที่เราเก็บรวบรวม:
																	เราเก็บรวบรวมข้อมูลของผู้ใช้บริการ เช่น
																	สถานะเขต,แขวง,วันที่ทำการแจ้ง,เวลาที่ทำการแจ้ง,รูปภาพสถานที่,Email
																	ของผู้ใช้บริการ
																</p>
															</Col>
														</Row>
														<Row>
															<Col>
																<p>
																	2การใช้ข้อมูล:
																	เราใช้ข้อมูลเพื่อการแจ้งข่าวสารเกี่ยวกับพื้นที่ประสบอุทกภัยตามวัตถุประสงค์ของเราเท่านั้น
																	และไม่อนุญาติให้นำข้อมูลไปใช้เพื่อวัตถุประสงค์อื่น
																	ๆ โดยไม่ได้รับอนุญาต.
																</p>
															</Col>
														</Row>
														<Row>
															<Col>
																<p>
																	3การเปิดเผยข้อมูล:
																	เราไม่รับประกันความถูกต้องของข้อมูลที่ได้รับจากแหล่งข้อมูลภายนอกหรือผู้ใช้บริการ
																	ผู้ใช้ต้องตรวจสอบความถูกต้องของข้อมูลด้วยความระมัดระวัง
																</p>
															</Col>
														</Row>
														<Row>
															<Col>
																<p>
																	4ความปลอดภัยของข้อมูล:
																	เราใช้มาตรการทางเทคโนโลยีและดำเนินการตามหลักการเพื่อรักษาความปลอดภัยของข้อมูลส่วนบุคคล.
																</p>
															</Col>
														</Row>
														<Row>
															<Col>
																<p>
																	5การเก็บรักษาข้อมูล:
																	เราเก็บรักษาข้อมูลตามระยะเวลาที่จำเป็นเท่าที่มีความจำเป็นตามวัตถุประสงค์ของการให้บริการ.
																</p>
															</Col>
														</Row>
														<Row>
															<Col>
																<p>
																6สิทธิของผู้ใช้:
ผู้ใช้มีสิทธิที่จะขอเข้าถึงข้อมูลส่วนบุคคลของตนเองและขอให้แก้ไขหรือลบข้อมูลที่ไม่ถูกต้อง.
																</p>
															</Col>
														</Row>
														<Row>
															<Col>
																<p>
																การใช้บริการของเราถือเป็นการยินยอมตามนโยบายความเป็นส่วนตัวทั้งหมดที่ระบุไว้ข้างต้น หากมีคำถามหรือข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว โปรดติดต่อเราสำหรับความช่วยเหลือ ได้ตามอีเมล์ที่ระบุไว้ทางเว็บไซต์
																</p>
															</Col>
														</Row>
													</Modal.Body>
													<Modal.Footer>
														<Button
															variant={"outline-secondary"}
															onClick={handleClosePol}
														>
															ปิด
														</Button>
													</Modal.Footer>
												</Modal>
											</Col>
										</Row>
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>
				<Container className="pt-4">
					<Row>
						<Col
							className="text-center"
							style={{ color: "#ffffff", fontSize: 14 }}
						>
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
