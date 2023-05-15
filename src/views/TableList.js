import React, { useState, useEffect } from "react";
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
function TableList() {
	//datatable///

	const history = useHistory();
	$(document).on("click", ".driver_detail", function () {
		var id = $(this).attr("data-id");
		history.push("/admin/driverdetail/?id=" + id);
	});

	useEffect(() => {
		async function totaluser(event) {
			let table = $("#example").DataTable();
			try {
				const response = await fetch(
					"http://speedster.book2say.com/Authentication/admin_showalldriver",
					{
						method: "GET",
					}
				);
				const data = await response.json();
				if (data.status == true) {
					var userdetail = data.data;
					var content_html = "";
					var j = 1;
					if (userdetail.length > 0) {
						for (var i = 0; i < userdetail.length; i++) {
							// if (userdetail[i].user_privilidge == "2") {
							// 	var status =
							// 		'<button type="button" class="btn btn-secondary btn_status" data-id=' +
							// 		userdetail[i].u_id +
							// 		">Active</button>";
							// } else if (userdetail[i].user_privilidge == "0") {
							// 	var status =
							// 		'<button type="button" class="btn btn-danger btn_status" data-id=' +
							// 		userdetail[i].u_id +
							// 		">Inactive</button>";
							// }

							// var action_btn =
							// 	'<button type="button" class="btn btn-primary driver_detail" data-id=' +
							// 	userdetail[i].u_id +
							// 	">View Detail</button>";
							var action_btn =
								'<i class="fa fa-eye driver_detail" data-id=' +
								userdetail[i].u_id +
								"></i>";

							if (userdetail[i].user_privilidge == 1) {
								action_btn +=
									'<span class="tick_span"><i class="fa fa-check mynewtick" data-id=' +
									userdetail[i].u_id +
									' aria-hidden="true"></i></span>';
							} else if (userdetail[i].user_privilidge == 0) {
								action_btn +=
									'<span class="tick_span_red"><i class="fa fa-check mynewtick" data-id=' +
									userdetail[i].u_id +
									' aria-hidden="true"></i></span>';
							}
							table.row.add([
								j,
								userdetail[i].name,
								userdetail[i].email,
								userdetail[i].phone_no,
								userdetail[i].joining_date,
								action_btn,
							]);
							//content_html+='<tr><td>'+j+'</td><td>'+userdetail[i].name+'</td><td>'+userdetail[i].email+'</td><td>'+status+'</td><td>'+userdetail[i].joining_date+'</td><td><button type="button" class="btn btn-primary driver_detail" data-id='+userdetail[i].u_id+'>View Detail</button></td></tr>';
							j++;
						}
						//$("#displaydata").prepend(content_html);
						//console.log('content_html',content_html);
					}
				}
			} catch (error) {
				console.log(error);
			}
			table.draw();
		}

		$(document).ready(function () {
			totaluser();
			$("#example").DataTable();
		});
	}, []);

	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							{/* <Card.Header>
                <Card.Title as="h4">All Drivers</Card.Title>
              </Card.Header> */}
							<Card.Body className="table-full-width table-responsive px-0">
								<Table className="table-hover table-striped" id="example">
									<thead>
										<tr>
											<th className="border-0">ID</th>
											<th className="border-0">Name</th>
											<th className="border-0">Email</th>
											<th className="border-0">Phone No</th>
											<th className="border-0">Date of joining</th>
											<th className="border-0">Action</th>
										</tr>
									</thead>
									<tbody id="displaydata"></tbody>
								</Table>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default TableList;
