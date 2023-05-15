import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
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
function Promocode() {
	const history = useHistory();
	function handleClick() {
		history.push("/admin/addpromocode");
	}

	useEffect(() => {
		async function totaluser() {
			let table4 = $("#newexample4").DataTable();
			try {
				const response = await fetch(
					"http://speedster.book2say.com/Authentication/admin_showpromocode",
					{
						method: "GET",
					}
				);
				const data = await response.json();
				if (data.status == true) {
					var userdetail = data.data;

					var j = 1;
					for (var i = 0; i < userdetail.length; i++) {
						//table10.row.add([j, userdetail[i].name, detail_new]);
						table4.row.add([j, userdetail[i].banner]);
						j++;
					}
					//$('#displaydata2').prepend(content_html);
				}
			} catch (error) {
				console.log(error);
			}
			table4.draw();
		}

		$(document).ready(function () {
			totaluser();
			$("#newexample4").DataTable();
		});
		// $(document).ready(function () {
		// 	totaluser();
		// 	$("#myTable").DataTable();
		// });
	}, []);

	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<div class="col-sm-12 promocode_btn">
							<button
								type="button"
								class="btn btn-primary addpromocode_btn"
								onClick={handleClick}
							>
								Add Promocode
							</button>
						</div>
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">All Promocodes</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<Table className="table-hover table-striped" id="newexample4">
									<thead>
										<tr>
											<th className="border-0">ID</th>
											<th className="border-0">Promocode</th>
										</tr>
									</thead>
									<tbody id="displaydata3">
										{/* <tr>
											<td>1</td>
											<td>123</td>
										</tr> */}
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
