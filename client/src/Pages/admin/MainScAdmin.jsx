import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function MainSc(props) {
	const [formposts, setFormposts] = useState([]);
	const [displayPage, setDisplayPage] = useState(false);
	const [modalformpost, setModalformpost] = useState([]);

	const navigate = useNavigate();

	const handleShowModal = (formpost) => {
		setModalformpost(formpost);
		handleShow();
	};
	const handleCloseModal = () => {
		setModalformpost([]);
		handleClose();
	};

	const checkAdmin = () => {
		if (localStorage.getItem("token")) {
			const email = localStorage.getItem("email").replace(/"/g, "");
			axios
				.post(`${process.env.REACT_APP_API}/checkAdmin`, { email })
				.then((response) => {
					if (response.data === false) {
						Swal.fire({
							icon: "error",
							title: "แจ้งเตือน",
							text: "คุณไม่ได้รับอนุญาตให้เข้าใช้งาน",
						}).then(() => {
							navigate("/");
						});
					} else {
						setDisplayPage(true);
					}
				});
		} else {
			Swal.fire({
				icon: "error",
				title: "แจ้งเตือน",
				text: "โปรดล็อคอินก่อน",
			}).then(() => {
				navigate("/signin");
			});
		}
	};
	const fetchData = async () => {
		await axios
			.get(`${process.env.REACT_APP_API}/admin`)
			.then((response) => {
				setFormposts(response.data);
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	useEffect(() => {
		checkAdmin();
		fetchData();
	}, []);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const updateComfirmed = (slug) => {
		axios
			.patch(`${process.env.REACT_APP_API}/admin/${slug}`)
			.then((response) => {
				Swal.fire("แจ้งเตือน", response.data.message, "success");
				handleCloseModal();

				fetchData();
			})
			.catch((err) => alert(err));
	};

	const changeIsConfirmed = (slug) => {
		Swal.fire({
			title: "ต้องการยืนยันโพสต์?",
			icon: "warning",
			showCancelButton: true,
		}).then((result) => {
			if (result.isConfirmed) {
				updateComfirmed(slug);
			}
		});
	};

	const deleteRequire = (slug) => {
		axios
			.delete(`${process.env.REACT_APP_API}/admin/${slug}`)
			.then((response) => {
				Swal.fire("แจ้งเตือน", response.data.message, "success");
				fetchData();
			})
			.catch((err) => alert(err));
	};

	const confirmDelete = (slug) => {
		Swal.fire({
			title: "ยืนยันเพื่อลบบัญชีผู้ใช้งาน",
			icon: "warning",
			showCancelButton: true,
		}).then((result) => {
			if (result.isConfirmed) {
				deleteRequire(slug);
			}
		});
	};

	return (
		<Container className="vh-100">
		<Helmet>
      <title>Flood Report</title>
    	</Helmet>
			{displayPage && (
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
										<Button
											className="main-primary-button"
											onClick={() => handleShowModal(formpost)}
										>
											เปิด
										</Button>

										<Modal
											show={show}
											onHide={handleCloseModal}
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
														<Col className="d-flex">
															<img
																src={modalformpost.image}
																alt=""
																className="m-auto"
																style={{
																	width: 300,
																	height: 400,
																	borderRadius: 10,
																}}
															></img>
														</Col>
														<Col className="d-flex">
															<Container>
																<Row className="my-3">
                                  <Col className="m-auto">
                                  <Button className="primary-tag">
                                    {modalformpost.status}
                                  </Button>
                                  </Col>
																</Row>
																<Row>
																	<Col style={{ color: "#002446", fontSize: 16 }}>
																		<p>แขวง/ตำบล:</p>
																	</Col>
																	<Col>{modalformpost.district}</Col>
																</Row>
																<Row>
																	<Col style={{ color: "#002446", fontSize: 16 }}>
																		<p>เขต/อำเภอ:</p>
																	</Col>
																	<Col>{modalformpost.area}</Col>
																</Row>
																<Row>
																	<Col style={{ color: "#002446", fontSize: 16 }}>
																		<p>รายละเอียดเพิ่มเติม:</p>
																	</Col>
																	<Col style={{ color: "#002446", fontSize: 16 }}>{modalformpost.information}</Col>
																</Row>
																<Row className="mt-5">
																	<p style={{ color: "#808FA4", fontSize: 16 }}>ข้อมูลจาก: {modalformpost.email}</p>
																</Row>
																<Row>
																	<p style={{ color: "#808FA4", fontSize: 16 }}>
																		ทำการโพสเมื่อ:{" "}
																		{new Date(
																			modalformpost.createdAt
																		).toLocaleDateString()}{" "}
																		เวลา{" "}
																		{new Date(
																			modalformpost.createdAt
																		).toLocaleTimeString([], {
																			hour: "2-digit",
																			minute: "2-digit",
																		})}{" "}
																		น.
																	</p>
																</Row>
															</Container>
														</Col>
													</Row>
												</Container>
											</Modal.Body>
											<Modal.Footer>
												<Button
													variant="success"
													onClick={() => changeIsConfirmed(formpost.slug)}
												>
													อนุมัติ
												</Button>
												<Button
													variant="outline-danger"
													onClick={() => confirmDelete(formpost.slug)}
												>
													ไม่อนุมัติ
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
			)}
		</Container>
	);
}
