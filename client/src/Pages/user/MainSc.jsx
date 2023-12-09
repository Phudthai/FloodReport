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
  const [modalformpost, setModalformpost] = useState([]);
  const [districtlist, setDistrictlist] = useState([]);
  const [subdistrictlist, setSubDistrictlist] = useState([]);
  const [districtName, setDistrictName] = useState("");
  const [subdistrictName, setSubDistrictName] = useState("");
  const [filteredpost, setFilteredpost] = useState([]);

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
    loadData();
  }, []);

  const loadData = async () => {
    await axios
      .get(`https://ckartisan.com/api/amphoes?province=กรุงเทพมหานคร`)
      .then((res) => {
        setDistrictlist(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangesDistrict = async (event) => {
    setDistrictName(event.target.value);
    await axios
      .get(
        `https://ckartisan.com/api/tambons?province=กรุงเทพมหานคร&amphoe=${event.target.value}`
      )
      .then((res) => {
        setSubDistrictlist(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChangeSubDistrict = async (event) => {
    setSubDistrictName(event.target.value);
    console.log(event.target.value);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowModal = (formpost) => {
    setModalformpost(formpost);
    handleShow();
  };
  const handleCloseModal = () => {
    setModalformpost([]);
    handleClose();
  };

  const handleFilter = async () => {
    await axios
      .post(`${process.env.REACT_APP_API}/allpost-filter`, {
        districtName,
        subdistrictName,
      })
      .then((response) => {
        console.log(response.data);
        setFormposts(response.data);
        setDistrictName("");
        setSubDistrictName("");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Container className="vh-100">
      <Row>
        {/* <Col>
          <Container className="bg-img w-100 h-100 m-5" />
        </Col> */}
      </Row>
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
        <Col xxl={4} xl={4} lg={4} md={5} sm={12} xs={12} className="my-2">
          <Row>
            <Col className="m-auto">แขวง / ตำบล</Col>
            <Col>
              <Form.Select
                aria-label="Default select example"
                value={districtName}
                onChange={onChangesDistrict}
              >
                <option value="">กรุณาเลือก</option>
                {districtlist.map((item, index) => (
                  <option key={index} value={item.amphoe}>
                    {item.amphoe}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={5} sm={12} xs={12} className="my-2">
          <Row>
            <Col className="m-auto">เขต / อำเภอ</Col>
            <Col>
              <Form.Select
                value={subdistrictName}
                aria-label="Default select example"
                onChange={onChangeSubDistrict}
              >
                <option value="">กรุณาเลือก</option>
                {subdistrictlist.map((item, index) => (
                  <option key={index} value={item.tambon}>
                    {item.tambon}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={2} sm={12} xs={12} className="my-2">
          <Button className="m-auto main-primary-button w-75 " onClick={handleFilter}>
            ค้นหา
          </Button>
        </Col>
      </Row>
      <Row>
        <Container fluid className=" rounded" >
          <Table responsive striped hover className="table-main-custom my-5" >
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
                            variant="outline-secondary"
                            onClick={handleCloseModal}
                          >
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
