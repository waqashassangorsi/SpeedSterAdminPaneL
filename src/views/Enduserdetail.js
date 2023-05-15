import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// react-bootstrap components
import {
	Badge,
	Button,
	Card,
	Navbar,
	Nav,
	Container,
	Table,
	Row,
	Col,
} from "react-bootstrap";
import $ from "jquery";
import "assets/js/custom.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
function Enduserdetail() {
	const history = useHistory();
	const customername = history.location.customername.name;
	const dp = history.location.dp.user_dp;
	const email = history.location.email.user_email;
	const phoneno = history.location.phoneno.user_phoneno;

	console.log("customername", customername);
	const styles = {
		border: "2px solid #f5f5f5",
		borderRadius: "16px",
	};

	const headingcolor = {
		backgroundColor: "#f5f5f5",
		padding: "3px",
		paddingLeft: "5px",
		paddingTop: "10px",
	};

	const imagedata = {
		height: "121px",
	};

	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">EndUser Detail</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<Row>
									<Col md="6" className="p-4">
										<div style={styles}>
											<div className="mb-3" style={headingcolor}>
												<h5>Customer Profile</h5>
											</div>

											<div className="text-center">
												<img
													style={imagedata}
													src={dp}
													alt="..."
													class="side_barlogo"
												/>
												<h5 className="mt-1">{customername}</h5>
											</div>
										</div>
									</Col>

									<Col md="6" className="p-4">
										<div style={styles}>
											<div className="mb-3" style={headingcolor}>
												<h5>Customer Details</h5>
											</div>

											<div className="text-center">
												<table class="table table-borderless">
													<tbody>
														{/* <tr>
															<td>Code :</td>
															<td>U02286</td>
														</tr> */}

														<tr>
															<td>Email :</td>
															<td>{email}</td>
														</tr>

														<tr>
															<td>Mobile :</td>
															<td>{phoneno}</td>
														</tr>
													</tbody>
												</table>
											</div>
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

export default Enduserdetail;
