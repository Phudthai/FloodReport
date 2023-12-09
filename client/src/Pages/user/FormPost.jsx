import React, { useEffect, useState } from "react";
import "./FormPost.css";
import Swal from "sweetalert2";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/esm/Button";

export default function FormPost() {
	const navigate = useNavigate();

	const [state, setState] = useState({
		district: "",
		area: "",
		information: "",
		status: "",
	});

	const [image, setImage] = useState(null);
	const [pic, setPic] = useState();
	const [uploaded, setUploaded] = useState(false);
	const { district, area, information, status } = state;

	const inputValue = (name) => (event) => {
		setState({ ...state, [name]: event.target.value });
	};

	const handleImage = (e) => {
		const file = e.target.files[0];
		setImage(file);
	};

	const submitButton = async (e) => {
		e.preventDefault();

		if (district === "" || area === "" || information === "" || status === "") {
			await Swal.fire("แจ้งเตือน", "กรุณากรอกข้อมูลให้ครบถ้วน", "error");
			return;
		}

		if (image === null) {
			Swal.fire("แจ้งเตือน", "โปรดเลือกรูปภาพ", "error");
			return;
		}

		if (image.type !== "image/jpeg" && image.type !== "image/png") {
			Swal.fire("แจ้งเตือน", "โปรดเลือกรูปภาพไฟล์ Jpeg หรือ Png", "error");
			return;
		}

		if (image.type === "image/jpeg" || image.type === "image/png") {
			const data = new FormData();
			data.append("file", image);
			data.append("upload_preset", "floodreport");
			data.append("cloud_name", "dlw7n48ff");
			try {
				const response = await axios.post(
					"https://api.cloudinary.com/v1_1/dlw7n48ff/image/upload",
					data
				);
				setPic(response.data.url.toString());
				setUploaded(true);
			} catch (error) {
				Swal.fire("แจ้งเตือน", error.message, "error");
			}
		}
	};
	useEffect(() => {
		const loadUser = localStorage.getItem("email").replace(/"/g, "");

		if (uploaded) {
			axios
				.post(`${process.env.REACT_APP_API}/formpost`, {
					loadUser,
					district,
					area,
					information,
					pic,
					status,
				})
				.then(async (res) => {
					await Swal.fire("แจ้งเตือน", res.data.message, "success");
					navigate("/");
				})
				.catch(async (err) => {
					await Swal.fire("แจ้งเตือน", err.response.data.error, "error");
				});
		}
	}, [uploaded]);

	return (
		<Container className="vh-100">
			<Row
				className="text-center mt-5"
				style={{ color: "#192655", fontSize: 16, fontWeight: 400 }}
			>
				<Col style={{ color: "#192655", fontSize: 64, fontWeight: 800 }}>
					<p>แจ้งน้ำท่วม</p>
				</Col>
				<Container className="d-grid gap-2">
					<Row className="mt-5">
						<Col>เลือกสถานะน้ำท่วม:</Col>
					</Row>
					<Row className="d-flex justify-content-center">
						<Col xxl={4} xl={4} lg={5} md={6} sm={7} xs={7}>
							<Form.Select
								aria-label="Default select example"
								onChange={inputValue("status")}
							>
								<option>กรุณาเลือก</option>
								<option value="น้ำท่วมขังเล็กน้อย">น้ำท่วมขังเล็กน้อย</option>
								<option value="น้ำท่วมขังมาก">น้ำท่วมขังมาก</option>
							</Form.Select>
						</Col>
					</Row>
					<Row>
						<Col>แขวง/ตำบล:</Col>
					</Row>
					<Row className="d-flex justify-content-center">
						<Col xxl={4} xl={4} lg={5} md={6} sm={7} xs={7}>
							<Form.Select
								aria-label="Default select example"
								onChange={inputValue("district")}
							>
								<option>หา</option>
								<option value="แขวง">API</option>
								<option value="ตำบล">มาใส่</option>
							</Form.Select>
						</Col>
					</Row>
					<Row>
						<Col>เขต/อำเภอ:</Col>
					</Row>
					<Row className="d-flex justify-content-center">
						<Col xxl={4} xl={4} lg={5} md={6} sm={7} xs={7}>
							<Form.Select
								aria-label="Default select example"
								onChange={inputValue("area")}
							>
								<option>หา</option>
								<option value="เขต">API</option>
								<option value="อำเภอ">มาใส่</option>
							</Form.Select>
						</Col>
					</Row>
					<Row>
						<Col>กรอกรายละเอียดเพิ่มเติม:</Col>
					</Row>
					<Row className="d-flex justify-content-center">
						<Col xxl={4} xl={4} lg={5} md={6} sm={7} xs={7}>
							<FloatingLabel
								controlId="floatingTextarea2"
								label="กรุณากรอกรายละเอียดเพิ่มเติม"
							>
								<Form.Control
									as="textarea"
									placeholder="Leave a comment here"
                  onChange={inputValue("information")}
									style={{ height: "100px" }}
								/>
							</FloatingLabel>
						</Col>
					</Row>
					<Row>
						<Col>แนบรูปภาพสถานที่:</Col>
					</Row>
					<Row className="d-flex justify-content-center">
						<Col xxl={4} xl={4} lg={5} md={6} sm={7} xs={7}>
							<Form.Group>
								<Form.Control
                  p={1.5}
									type="file"
									accept="image/*"
									onChange={handleImage}
								/>
							</Form.Group>
						</Col>
					</Row>
				</Container>
        <Row className="text-center m-auto mt-5">
        <Col>
          <Button variant="success" onClick={submitButton}>
            ยืนยันการโพส
          </Button>
        </Col>
        <Col>
        <Button variant="outline-secondary" href="/">
            ย้อนกลับ
            </Button>
        </Col>
        </Row>
        
			</Row>
		</Container>
		// <div className="test">
		//   <div className="main-container-formpost">
		//     <div className="report-outer">
		//     <Row>
		//       <Col className="report-text">
		//         <label htmlFor="myDropdown" className="mb-3">เลือกสถานะน้ำท่วม: </label>
		//       </Col>
		//       <Col>
		//         <select id="myDropdown" onChange={inputValue("status")} className="report-inputBox">
		//           <option value=""></option>
		//           <option value="น้ำท่วมขังเล็กน้อย">น้ำท่วมขังเล็กน้อย</option>
		//           <option value="น้ำท่วมขังมาก">น้ำท่วมขังมาก</option>
		//         </select>
		//       </Col>
		//     </Row>
		//     <Row>
		//       <Col>
		//         <p className="report-text">แขวง:</p>
		//       </Col>
		//       <Col>
		//         <input onChange={inputValue("district")} className="report-inputBox"/>
		//       </Col>
		//     </Row>
		//     <Row>
		//       <Col>
		//         <p className="report-text">เขต:</p>
		//       </Col>
		//       <Col>
		//         <input onChange={inputValue("area")} className="report-inputBox"/>
		//       </Col>
		//     </Row>
		//     <Row>
		//       <Col>
		//         <p className="report-text">รายละเอียดเพิ่มเติม:</p>
		//       </Col>
		//       <Col>
		//         <textarea onChange={inputValue("information")} className="report-inputBox" rows={6} cols={40}/>
		//       </Col>
		//     </Row>
		//     <Row className="padbot">
		//       <Col>
		//         <p className="report-text">แนบรูปภาพสถานที่:</p>
		//       </Col>
		//       <Col>
		//         <input type="file" p={1.5} accept="image/*" onChange={handleImage}></input>
		//       </Col>
		//     </Row>
		//     <div className="form-row4-button">
		//         <div className="form-row4-button-1">
		//           <a href="/">
		//             <button className="button-back">ย้อนกลับ</button>
		//           </a>
		//         </div>
		//         <div className="form-row4-button-2">
		//           <button onClick={submitButton} className="button-submit">ยืนยันการโพส</button>
		//         </div>
		//       </div>
		//     </div>
		//   </div>
		// </div>
	);
}
{
	/* <div className="config-container-formpost">
        <div className="form-row1">
          <div className="form-row1-status">
            <label htmlFor="myDropdown">เลือกสถานะน้ำท่วม: </label>
            <select id="myDropdown" onChange={inputValue("status")}>
              <option value=""></option>
              <option value="น้ำท่วมขังเล็กน้อย"></option>
              <option value="น้ำท่วมขังมาก"></option>
            </select>
          </div>
          <div className="form-row1-district">
            <p>แขวง:</p>
            <input onChange={inputValue("district")} cols="40" rows="5" />
          </div>
          <div className="form-row1-area">
            <p>เขต:</p>
            <input onChange={inputValue("area")} cols="40" rows="5" />
          </div>
        </div>
        <div className="form-row2-description">
          <div className="form-row2-description-text">
            <p>รายละเอียดเพิ่มเติม:</p>
          </div>
          <div className="form-row2-description-textarea">
            <input onChange={inputValue("information")} cols="67" rows="5" />
          </div>
        </div>
        <div className="form-row3-picture">
          <div className="form-row3-picture-text">
            <p>แนบรูปภาพสถานที่:</p>
          </div>
          <div className="form-row3-picture-image">
            <input type="file" p={1.5} accept="image/*" onChange={handleImage}></input>
          </div>
        </div>
        <div className="form-row4-button">
          <div className="form-row4-button-1">
            <a href="/">
              <button className="button-back">ย้อนกลับ</button>
            </a>
          </div>
          <div className="form-row4-button-2">
            <button onClick={submitButton} className="button-submit">ยืนยันการโพส</button>
          </div>
        </div>
      </div> */
}
