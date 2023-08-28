import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// react-bootstrap components
import {
	Badge,
	Button,
	Card,
	Navbar,
	Nav,
	Table,
	Container,
	Row,
	Col,
	Modal,
} from "react-bootstrap";
import $ from "jquery";
import "assets/js/custom.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
function Calimdetail() {
	const myimage = {
		width: "20%",
		marginRight: "20px",
		height: "250px",
	};
	const history = useHistory();
	const customername = history.location.customername.customer_name;
	const drivername = history.location.drivername.driver_name;
	const tripcost = history.location.tripcost.trip_cost;
	const claimfrom = history.location.claimfrom.claim_from;
	const claimto = history.location.claimto.claim_to;
	const dataimages = history.location.dataimages.data_images;
	const separatedArray = dataimages.split(",");
	console.log("separatedArray", separatedArray);
	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Body className="table-full-width table-responsive px-0">
								<Row>
									<Col md="12" className="p-4">
										<div className="mb-3">
											<h6>Calim Detail</h6>
										</div>

										<table class="table table-borderless">
											{/* <thead>
												<tr>
													<th>Tracking No :</th>
													<th>asdasd</th>
												</tr>
											</thead> */}
											<tbody>
												<tr>
													<td>Driver Name :</td>
													<td>{drivername}</td>
												</tr>

												<tr>
													<td>Customer Name :</td>
													<td>{customername}</td>
												</tr>

												<tr>
													<td>Trip Cost :</td>
													<td>${tripcost}</td>
												</tr>

												<tr>
													<td>Calim from :</td>
													<td>{claimfrom}</td>
												</tr>

												<tr>
													<td>Calim to :</td>
													<td>{claimto}</td>
												</tr>
											</tbody>
										</table>

										<div class="mb-3">
											<p>Picture Uploaded by customer</p>

											{separatedArray &&
												separatedArray.map((separatedArray, index) => (
													<img
														src={separatedArray}
														alt="..."
														class="side_barlogo"
														style={myimage}
													/>
												))}
										</div>

										<div class="mb-3">
											<p>Picture Uploaded by driver</p>
											<img
												src={require("assets/img/speedster.png")}
												alt="..."
												class="side_barlogo"
											/>
										</div>

										<div>
											<p>Picture Uploaded by agent</p>
											<img
												src={require("assets/img/speedster.png")}
												alt="..."
												class="side_barlogo"
											/>
										</div>

										<div class="text-center">
											<button class="btn btn-primary mr-2">Approve</button>
											<button class="btn btn-danger">Disapprove</button>
										</div>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Calimdetail;
