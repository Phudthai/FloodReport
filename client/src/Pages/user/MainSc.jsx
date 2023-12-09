import "./MainSc.css";
import Navbar from "../../components/user/Navbar";
import Footer from "../../components/user/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function MainSc() {
	const [formposts, setFormposts] = useState([]);

	const navigate = useNavigate();
	const fetchData = async () => {
		await axios
			.get(`${process.env.REACT_APP_API}/post`)
			.then((response) => {
				setFormposts(response.data);
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container className="vh-100">
			{/* <Row>
        <Col>
          <Container style={{backgroundColor:"#B5D2FF"}} className="w-100 h-100 m-5"/>
        </Col>
      </Row> */}
			<Row className="text-center mt-5">
				<Col style={{ color: "#192655", fontSize: 64, fontWeight: 800 }}>
					<p>ตรวจสอบพื้นที่ของคุณ</p>
				</Col>
			</Row>
			<Row className="text-center">
				<Col style={{ color: "#002446", fontSize: 20, fontWeight: 400 }}>
					<p>กรุณารอแอดมินทำการตรวจสอบข้อมูลเพื่ออัพเดทขึ้นหน้าเว็บไซต์</p>
				</Col>
			</Row>
			<Row className="text-center my-3">
				<Col>
					<Row>
						<Col className="m-auto">แขวง / ตำบล</Col>
						<Col>
							<Form.Select aria-label="Default select example">
								<option>กรุณาเลือก</option>
								<option value="1">หา</option>
								<option value="2">API</option>
								<option value="3">มาใส่</option>
							</Form.Select>
						</Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col className="m-auto">เขต / อำเภอ</Col>
						<Col>
							<Form.Select aria-label="Default select example">
								<option>กรุณาเลือก</option>
								<option value="1">หา</option>
								<option value="2">API</option>
								<option value="3">มาใส่</option>
							</Form.Select>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Container fluid className=" rounded">
					<Table responsive striped hover className="table-main-custom my-5">
						<thead style={{ height: 40 }} className="text-center">
							<tr>
								<th>สถานะน้ำท่วม</th>
								<th>แขวง/ตำบล</th>
								<th>เขต/อำเภอ</th>
								<th>รายละเอียด</th>
								<th>วันที่</th>
								<th>เวลา</th>
								<th>ดูข้อมูลเพิ่มเติม</th>
							</tr>
						</thead>
						{formposts.length > 0 ? (
							formposts.map((formpost) => (
								<tbody className="text-center">
									<tr>
										<td>{formpost.status}</td>
										<td>{formpost.district}</td>
										<td>{formpost.area}</td>
										<td>{formpost.information.substring(0, 10) + "..."}</td>
										<td>{new Date(formpost.createdAt).toLocaleDateString()}</td>
										<td>
											{new Date(formpost.createdAt).toLocaleTimeString([], {
												hour: "2-digit",
												minute: "2-digit",
											})}
										</td>
										<td>
											{/* <Link to={`/post/${formpost.slug}`}>ดูเพิ่มเติม</Link> */}
											<Button variant="primary" onClick={handleShow}>
												เปิด
											</Button>

											<Modal
												show={show}
												onHide={handleClose}
												size="lg"
												aria-labelledby="contained-modal-title-vcenter"
												centered
											>
												<Modal.Header closeButton>
													<Modal.Title>ดูรายละเอียดเพิ่มเติม</Modal.Title>
												</Modal.Header>
												<Modal.Body>
													<Container>
														<Row>
															<Col>
																<div className="info-img">
																	<img
																		src={formposts.image}
																		alt=""
																		className="s-img"
                                    style={{width: 300, height: 400, borderRadius: 10}}
																	></img>
																</div>
															</Col>
															<Col>
																<Container>
																	<Row className="tag-section">
																		<div className="tag">
																			{formposts.status}
																		</div>
																	</Row>
																	<div className="info-desc">
																		<Row>
																			<Col>
																				<p className="info-desc-text">แขวง:</p>
																			</Col>
																			<Col>{formposts.district}</Col>
																		</Row>
																		<Row>
																			<Col>
																				<p className="info-desc-text">เขต:</p>
																			</Col>
																			<Col>{formposts.area}</Col>
																		</Row>
																		<Row>
																			<Col>
																				<p className="info-desc-text">
																					รายละเอียดเพิ่มเติม:
																				</p>
																			</Col>
																			<Col>{formposts.information}</Col>
																		</Row>
																		<div>
																			<Row>
																				<p>ข้อมูลจาก: @asdasd.com</p>
																			</Row>
																			<Row>
																				<p>ทำการโพสเมื่อ: xx/xx/xx xx:xx น.</p>
																			</Row>
																		</div>
																	</div>
																</Container>
															</Col>
														</Row>
													</Container>
												</Modal.Body>
												<Modal.Footer>
													<Button variant="secondary" onClick={handleClose}>
														ปิด
													</Button>
												</Modal.Footer>
											</Modal>
										</td>
									</tr>
								</tbody>
							))
						) : (
							<p>ไม่มีข้อมูลน้ำท่วม</p>
						)}
					</Table>
				</Container>
			</Row>
		</Container>
		// <div className="main-container">
		//
		//   <div className="table-header-hero">
		//     <h1 className="table-header-text">รายการสถานการณ์น้ำท่วม</h1>
		//   </div>
		//   <div className="table-container">
		//     <div className="table-wrapper">
		//       <Row className="table-header">
		//       <Col className="table-data">
		//         <div></div>
		//         </Col>
		//         <Col className="table-data">
		//           <div></div>
		//         </Col>
		//         <Col className="table-data">
		//         <div>เขต</div>
		//         </Col>
		//         <Col className="table-data">
		//         <div>รายละเอียด</div>
		//         </Col>
		//         <Col className="table-data">
		//         <div>วันที่</div>
		//         </Col>
		//         <Col className="table-data">
		//         <div>เวลา</div>
		//         </Col>
		//         <Col className="table-data">
		//         <div>ดูข้อมูลเพิ่มเติม</div>
		//         </Col>
		//       </Row>
		// {formposts.length > 0 ? (
		//     formposts.map((formpost) => (
		// <Row className="table-data-fetch">
		//   <Col className="table-data">
		//     <div>{formpost.status}</div>
		//   </Col>
		//   <Col className="table-data">
		//   <div>{formpost.district}</div>
		//   </Col>
		//   <Col className="table-data">
		//     <div>{formpost.area}</div>
		//   </Col>
		//   <Col className="table-data">
		//   <div>{formpost.information.substring(0,10)+'...'}</div>
		//   </Col>
		//   <Col className="table-data">
		//   <div>{new Date(formpost.createdAt).toLocaleDateString()}</div>
		//   </Col>
		//   <Col className="table-data">
		//   <div>{new Date(formpost.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
		//   </Col>
		//   <Col className="table-data">
		//   <Link to={`/post/${formpost.slug}`}>info
		//           </Link>
		//   </Col>
		// </Row>
		// ))
		// ) : (
		//   <p>ไม่มีข้อมูลน้ำท่วม</p>
		// )}

		//     <Table striped="columns" responsive="sm" className="table-row-body">
		//         <thead>
		//           <tr>
		//             <th>#</th>
		//             <th>District</th>
		//             <th>Area</th>
		//             <th>Information</th>
		//             <th>Status</th>
		//             <th>Button</th>
		//           </tr>
		//         </thead>
		//         {formposts.length > 0 ? (
		//           formposts.map((formpost, index) => (
		//             <tbody>
		//               <tr className="table-row-body" key={index}>
		//                 <td>{index + 1}</td>
		//                 <td>{formpost.district}</td>
		//                 <td>{formpost.area}</td>
		//                 <td>{formpost.information}</td>
		//                 <td>{formpost.status}</td>
		//                 <td>
		//                 <Link to={`/post/${formpost.slug}`}>info
		//                 </Link>
		//                 </td>
		//               </tr>
		//             </tbody>
		//           ))

		//         ) : (
		//           <p>ไม่มีข้อมูลน้ำท่วม</p>
		//         )}
		//       </Table>
		//     </div>
		//   </div>

		//   <div className="table-container">
		//     <div className="table-wrapper">
		//       <div className="table-header">
		//         <h1>รายการสถานการณ์น้ำท่วม</h1>
		//       </div>
		//       <Table striped="columns">
		//         <thead>
		//           <tr>
		//             <th>#</th>
		//             <th>District</th>
		//             <th>Area</th>
		//             <th>Information</th>
		//             <th>Status</th>
		//             <th>Button</th>
		//           </tr>
		//         </thead>
		//         {formposts.length > 0 ? (
		//           formposts.map((formpost, index) => (
		//             <tbody>
		//               <tr className="table-row-body" key={index}>
		//                 <td>{index + 1}</td>
		//                 <td>{formpost.district}</td>
		//                 <td>{formpost.area}</td>
		//                 <td>{formpost.information}</td>
		//                 <td>{formpost.status}</td>
		//                 <td>
		//                 <Link to={`/post/${formpost.slug}`}>info
		//                 </Link>
		//                 </td>
		//               </tr>
		//             </tbody>
		//           ))

		//         ) : (
		//           <p>No data available</p>
		//         )}
		//       </Table>
		//     </div>
		//   </div>

		// </div>
	);
}
