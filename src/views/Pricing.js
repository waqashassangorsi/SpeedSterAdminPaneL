import React from "react";
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
import "assets/js/custom.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
function Promocode() {
	let table9 = $("#newexample9").DataTable();
	$(document).ready(function () {
		$("#newexample9").DataTable();
	});

	const edit_pencil = {
		marginLeft: "10px",
	};
	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">Pricing</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<Table className="table-hover table-striped" id="newexample9">
									<thead>
										<tr>
											<th className="border-0">ID</th>
											<th className="border-0">Item Name</th>
											<th className="border-0">Service Name</th>
											<th className="border-0">Action</th>
										</tr>
									</thead>
									<tbody id="displaydata3">
										<tr>
											<td>1</td>
											<td>Delivery by van</td>
											<td>Meduim</td>
											<td>
												<span class="eye_font">
													<i class="fa fa-eye eye_fontawesome"></i>
												</span>

												<span class="eye_font" style={edit_pencil}>
													<i
														class="fa fa-pencil pencile_fontawesome"
														aria-hidden="true"
													></i>
												</span>

												<span class="tick_span">
													<i
														class="fa fa-check mynewtick"
														aria-hidden="true"
													></i>
												</span>
											</td>
										</tr>
									</tbody>
								</Table>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Promocode;
