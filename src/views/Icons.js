import React, { useEffect } from "react";

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
function Icons() {
	useEffect(() => {
		async function totaluser() {
			let table3 = $("#newexample2").DataTable();
			try {
				const response = await fetch(
					"http://speedster.book2say.com/Authentication/admin_showallrides",
					{
						method: "GET",
					}
				);
				const data = await response.json();
				if (data.status == true) {
					var user_detail = data.data;
					// var content_html='';
					var j = 1;
					if (user_detail.length > 0) {
						for (var i = 0; i < user_detail.length; i++) {
							// content_html+='<tr><td>'+j+'</td><td>'+user_detail[i].name+'</td><td>'+user_detail[i].email+'</td><td>'+user_detail[i].	status+'</td></tr>';
							table3.row.add([
								j,
								user_detail[i].name,
								user_detail[i].email,
								user_detail[i].status,
							]);
							j++;
						}
					}
					// $('#displaydata3').prepend(content_html);
				}
			} catch (error) {
				console.log(error);
			}
			table3.draw();
		}

		$(document).ready(function () {
			totaluser();
			$("#newexample2").DataTable();
		});
	}, []);

	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">All Rides</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<Table className="table-hover table-striped" id="newexample2">
									<thead>
										<tr>
											<th className="border-0">ID</th>
											<th className="border-0">Customer Name</th>
											<th className="border-0">Customer Email</th>
											<th className="border-0">Status</th>
										</tr>
									</thead>
									<tbody id="displaydata3"></tbody>
								</Table>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Icons;
