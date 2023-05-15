import React, { useEffect, useCallback } from "react";
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
function Typography() {
	const history = useHistory();

	$(document).on("click", ".newdetail", function () {
		//  var id=$(this).attr('data-id');
		var customername = $(this).attr("data-customername");
		var dp = $(this).attr("data-dp");
		var email = $(this).attr("data-email");
		var phoneno = $(this).attr("data-phoneno");
		//alert(customername);
		//history.push("/admin/typographydetail");
		history.push({
			pathname: "/admin/typographydetail",
			// search: '?the=search',
			customername: { name: customername },
			dp: { user_dp: dp },
			email: { user_email: email },
			phoneno: { user_phoneno: phoneno },
		});
	});

	useEffect(() => {
		async function totaluser() {
			let table2 = $("#newexample").DataTable();
			try {
				const response = await fetch(
					"http://speedster.book2say.com/Authentication/admin_showalluser",
					{
						method: "GET",
					}
				);
				const data = await response.json();
				if (data.status == true) {
					var userdetail = data.data;
					var content_html = "";
					var j = 1;
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
						var newusername = userdetail[i].name.replace(/\s/g, "");
						var detail_new =
							'<i class="fa fa-pencil eye_fontawesome eye_fontnew tick_icon"></i>';
						detail_new +=
							'<i class="fa fa-eye eye_fontawesome eye_fontnew newdetail tick_icon" data-customername=' +
							newusername +
							" data-dp=" +
							userdetail[i].dp +
							" data-email=" +
							userdetail[i].email +
							" data-phoneno=" +
							userdetail[i].phone_no +
							"></i>";

						if (userdetail[i].user_privilidge == 1) {
							detail_new +=
								'<span class="tick_span"><i class="fa fa-check mynewtick" data-id=' +
								userdetail[i].u_id +
								' aria-hidden="true"></i></span>';
						} else if (userdetail[i].user_privilidge == 0) {
							detail_new +=
								'<span class="tick_span_red"><i class="fa fa-check mynewtick" data-id=' +
								userdetail[i].u_id +
								' aria-hidden="true"></i></span>';
						}
						//content_html+='<tr><td>'+j+'</td><td>'+userdetail[i].name+'</td><td>'+userdetail[i].email+'</td><td>'+status+'</td><td>'+userdetail[i].joining_date+'</td></tr>';
						table2.row.add([
							j,
							userdetail[i].name,
							userdetail[i].email,
							userdetail[i].phone_no,
							userdetail[i].joining_date,
							detail_new,
						]);
						j++;
					}
					$("#displaydata2").prepend(content_html);
				}
			} catch (error) {
				console.log(error);
			}
			table2.draw();
		}

		$(document).ready(function () {
			totaluser();
			$("#newexample").DataTable();
		});
	}, []);

	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">All EndUser</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<Table className="table-hover table-striped" id="newexample">
									<thead>
										<tr>
											<th className="border-0">ID</th>
											<th className="border-0">Name</th>
											<th className="border-0">Email</th>
											<th className="border-0">Mobile Number</th>
											<th className="border-0">Date of joining</th>
											<th className="border-0">Action</th>
										</tr>
									</thead>
									<tbody id="displaydata2"></tbody>
								</Table>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Typography;
