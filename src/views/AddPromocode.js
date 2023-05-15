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
function AddPromocode() {
	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">Add Promocode</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<form class="addprpromoform">
									<div class="form-group">
										<label for="exampleInputEmail1">Enter Promocode</label>
										<input
											type="text"
											class="form-control"
											id="new_promocode"
										/>
									</div>
									<button type="button" class="btn btn-primary add_promocode">
										Submit
									</button>
								</form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default AddPromocode;
