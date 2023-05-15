import React, { useState } from "react";
import { useParams } from "react-router-dom";
// react-bootstrap components
import {
	Badge,
	Button,
	Card,
	Navbar,
	Nav,
	Container,
	Row,
	Col,
	Table,
} from "react-bootstrap";
import $ from "jquery";
function Driverdetail() {
	const [drivername, setdrivername] = useState("");
	const [driveremail, setdriveremail] = useState("");
	const [driverfrontlicense, setdriverfrontlicense] = useState("");
	const [driverbacklicense, setdriverbacklicense] = useState("");
	const [driverregistrationdocument, setregistrationdocument] = useState("");
	const [driveridcardfront, setdriveridcardfront] = useState("");
	const [driveridcardback, setdriveridcardback] = useState("");

	const params = window.location.search.substring(1);
	var pair = params.split("=");
	var id = pair[1];
	console.log(id);
	$.ajax({
		url: "http://speedster.book2say.com/Authentication/admin_singledriverdetail",
		type: "POST",
		data: { id: id },
		dataType: "json",
		success: function (html) {
			if (html.status == true) {
				setdrivername(html.data.name);
				setdriveremail(html.data.email);
				setdriverfrontlicense(html.data.driving_license_front);
				setdriverbacklicense(html.data.driving_license_back);
				setregistrationdocument(html.data.registration_document);
				setdriveridcardfront(html.data.id_card_front);
				setdriveridcardback(html.data.id_card_back);
			} else {
				alert("Record not exists");
			}
		},
	});

	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">Driverdetail</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<form class="addprpromoform">
									<div class="form-group">
										<label class="driver_imagelabel">Name</label>
										<input
											type="text"
											class="form-control"
											readOnly
											value={drivername}
											id="driver_name"
										/>
									</div>

									<div class="form-group">
										<label class="driver_imagelabel">Email</label>
										<input
											type="text"
											class="form-control"
											readOnly
											value={driveremail}
											id="driver_name"
										/>
									</div>

									<div class="form-group">
										<label class="driver_imagelabel">
											Front Image of License
										</label>
										<div class="col-sm-12">
											{driverfrontlicense !== "" && (
												<img
													src={driverfrontlicense}
													class="driver_licenceimg"
												></img>
											)}
											{driverfrontlicense == "" && <p>No Image Found</p>}
										</div>
									</div>

									<div class="form-group">
										<label class="driver_imagelabel">
											Back Image of License
										</label>
										<div class="col-sm-12">
											{driverbacklicense !== "" && (
												<img
													src={driverbacklicense}
													class="driver_licenceimg"
												></img>
											)}
											{driverbacklicense == "" && <p>No Image Found</p>}
										</div>
									</div>

									<div class="form-group">
										<label class="driver_imagelabel">
											Regristration Document
										</label>
										<div class="col-sm-12">
											{driverbacklicense !== "" && (
												<img
													src={driverregistrationdocument}
													class="driver_licenceimg"
												></img>
											)}
											{driverregistrationdocument == "" && (
												<p>No Image Found</p>
											)}
										</div>
									</div>

									<div class="form-group">
										<label class="driver_imagelabel">
											Front Image of Id Card
										</label>
										<div class="col-sm-12">
											{driveridcardfront !== "" && (
												<img
													src={driveridcardfront}
													class="driver_licenceimg"
												></img>
											)}
											{driveridcardfront == "" && <p>No Image Found</p>}
										</div>
									</div>

									<div class="form-group">
										<label class="driver_imagelabel">
											Back Image of Id Card
										</label>
										<div class="col-sm-12">
											{driveridcardback !== "" && (
												<img
													src={driveridcardback}
													class="driver_licenceimg"
												></img>
											)}
											{driveridcardback == "" && <p>No Image Found</p>}
										</div>
									</div>
								</form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Driverdetail;
