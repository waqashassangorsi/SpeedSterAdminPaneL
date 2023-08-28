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
	const [driverfrontlicense, setdriverfrontlicense] = useState([]);
	const [driverbacklicense, setdriverbacklicense] = useState([]);
	const [driverregistrationdocument, setregistrationdocument] = useState([]);
	const [driveridcardfront, setdriveridcardfront] = useState([]);
	const [driveridcardback, setdriveridcardback] = useState([]);
	const [vehicalinfo, setvehicalinfo] = useState([]);
	const [drivermodel_year, setmodel_year] = useState([]);
	const [plate_no, setplate_no] = useState([]);

	const [privilages, setPrivilages] = useState([]);
	//var privilages = new Array();
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
			console.log("driverdetail", html);
			if (html.status == true) {
				setdrivername(html.data.name);
				setdriveremail(html.data.email);
				if (html.vehicaldata.length > 0) {
					var newdatamy = html.vehicaldata;
					var privilagesArray = [];
					var backlicenseArray = [];
					var registrationdocumentArray = [];
					var driveridcardfrontArray = [];
					var driveridcardbackArray = [];
					var vehicalinfoArray = [];
					var drivermodel_yearArray = [];
					var plate_noArray = [];

					newdatamy.forEach(function (checkbox) {
						privilagesArray.push(checkbox.driving_license_front);
						backlicenseArray.push(checkbox.driving_license_back);
						registrationdocumentArray.push(checkbox.registration_document);
						driveridcardfrontArray.push(checkbox.id_card_front);
						driveridcardbackArray.push(checkbox.id_card_back);
						vehicalinfoArray.push(checkbox.vehicle_info);
						drivermodel_yearArray.push(checkbox.model_year);
						plate_noArray.push(checkbox.plate_no);
						//console.log("amount1231232323", checkbox.driving_license_back);
						//setdriverfrontlicense(checkbox.driving_license_front);
						//setdriverbacklicense(checkbox.driving_license_back);
						//setregistrationdocument(checkbox.registration_document);
						//setdriveridcardfront(checkbox.id_card_front);
						//setdriveridcardback(checkbox.id_card_back);
						// if (checkbox === "dashboard") {
						// 	dashboard_id = "show_dashboard";
						// } else {
						// 	dashboard_id = "hide_dashboard";
						// }
						// privilages.push(checkbox.value);
					});
					setdriverfrontlicense(privilagesArray);
					setdriverbacklicense(backlicenseArray);
					setregistrationdocument(registrationdocumentArray);
					setdriveridcardfront(driveridcardfrontArray);
					setdriveridcardback(driveridcardbackArray);
					setvehicalinfo(vehicalinfoArray);
					setmodel_year(drivermodel_yearArray);
					setplate_no(plate_noArray);
				}
				// setdriverfrontlicense(html.data.driving_license_front);
				// setdriverbacklicense(html.data.driving_license_back);
				// setregistrationdocument(html.data.registration_document);
				// setdriveridcardfront(html.data.id_card_front);
				// setdriveridcardback(html.data.id_card_back);
			} else {
				alert("Record not exists");
			}
			//console.log("asdasd234234", privilages);
		},
	});
	//console.log("asdasd2342341", driverfrontlicense);
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

									{vehicalinfo.length > 0 && (
										<div class="form-group">
											<label class="driver_imagelabel">Vehical Info</label>
											{vehicalinfo.map((value, index) => (
												<input
													type="text"
													class="form-control mb-2"
													readOnly
													value={value}
													id="driver_name"
												/>
											))}
										</div>
									)}

									{drivermodel_year.length > 0 && (
										<div class="form-group">
											<label class="driver_imagelabel">Model</label>
											{drivermodel_year.map((value, index) => (
												<input
													type="text"
													class="form-control mb-2"
													readOnly
													value={value}
													id="driver_name"
												/>
											))}
										</div>
									)}

									{plate_no.length > 0 && (
										<div class="form-group">
											<label class="driver_imagelabel">Plate No</label>
											{plate_no.map((value, index) => (
												<input
													type="text"
													class="form-control mb-2"
													readOnly
													value={value}
													id="driver_name"
												/>
											))}
										</div>
									)}
									<div class="form-group">
										<label class="driver_imagelabel">
											Front Image of License
										</label>

										{driverfrontlicense.length > 0 && (
											<div class="col-sm-12">
												{driverfrontlicense.map((url, index) => (
													//console.log('url',url);
													//<p>{url}</p>
													<img src={url} class="driver_licenceimg"></img>
												))}
												{/* {driverfrontlicense !== "" && (
												<img
													src={driverfrontlicense}
													class="driver_licenceimg"
												></img>
											)}
											{driverfrontlicense == "" && <p>No Image Found</p>} */}
											</div>
										)}
										{driverfrontlicense == "" && <p>No Image Found</p>}
									</div>

									<div class="form-group">
										<label class="driver_imagelabel">
											Back Image of License
										</label>
										{driverbacklicense.length > 0 && (
											<div class="col-sm-12">
												{driverbacklicense.map((url, index) => (
													//console.log('url',url);
													//<p>{url}</p>
													<img src={url} class="driver_licenceimg"></img>
												))}
												{/* {driverbacklicense !== "" && (
												<img
													src={driverbacklicense}
													class="driver_licenceimg"
												></img>
											)}
											{driverbacklicense == "" && <p>No Image Found</p>} */}
											</div>
										)}
										{driverbacklicense == "" && <p>No Image Found</p>}
									</div>

									<div class="form-group">
										<label class="driver_imagelabel">
											Regristration Document
										</label>
										{driverregistrationdocument.length > 0 && (
											<div class="col-sm-12">
												{driverregistrationdocument.map((url, index) => (
													//console.log('url',url);
													//<p>{url}</p>
													<img src={url} class="driver_licenceimg"></img>
												))}
												{/* {driverbacklicense !== "" && (
												<img
													src={driverregistrationdocument}
													class="driver_licenceimg"
												></img>
											)}
											{driverregistrationdocument == "" && (
												<p>No Image Found</p>
											)} */}
											</div>
										)}
										{driverregistrationdocument == "" && <p>No Image Found</p>}
									</div>

									<div class="form-group">
										<label class="driver_imagelabel">
											Front Image of Id Card
										</label>
										{driveridcardfront.length > 0 && (
											<div class="col-sm-12">
												{driveridcardfront.map((url, index) => (
													//console.log('url',url);
													//<p>{url}</p>
													<img src={url} class="driver_licenceimg"></img>
												))}
												{/* {driveridcardfront !== "" && (
												<img
													src={driveridcardfront}
													class="driver_licenceimg"
												></img>
											)}
											{driveridcardfront == "" && <p>No Image Found</p>} */}
											</div>
										)}
										{driveridcardfront == "" && <p>No Image Found</p>}
									</div>

									<div class="form-group">
										<label class="driver_imagelabel">
											Back Image of Id Card
										</label>
										{driveridcardback.length > 0 && (
											<div class="col-sm-12">
												{driveridcardback.map((url, index) => (
													//console.log('url',url);
													//<p>{url}</p>
													<img src={url} class="driver_licenceimg"></img>
												))}
												{/* {driveridcardback !== "" && (
												<img
													src={driveridcardback}
													class="driver_licenceimg"
												></img>
											)}
											{driveridcardback == "" && <p>No Image Found</p>} */}
											</div>
										)}
										{driveridcardback == "" && <p>No Image Found</p>}
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
