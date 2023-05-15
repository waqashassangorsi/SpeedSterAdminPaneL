import React, { useEffect, useState, useRef } from "react";
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
import { useHistory } from "react-router-dom";
function Deliveryrequest() {
	const dropdwn_div = {
		padding: "10px",
	};

	const dropdown_status = {
		width: "24%",
	};

	const delivery_statuslabel = {
		marginLeft: "5px",
	};

	const history = useHistory();

	$(document).on("click", ".driver_detail", function () {
		var sendername = $(this).attr("data-sendername");
		var senderphone = $(this).attr("data-senderphone");
		var recivername = $(this).attr("data-receivername");
		var receivercontact = $(this).attr("data-receivercontact");
		var drivername = $(this).attr("data-drivername");
		var driverphoneno = $(this).attr("data-driverphoneno");
		var driveremail = $(this).attr("data-driveremail");
		var trackingno = $(this).attr("data-trackingno");
		var deliverystatus = $(this).attr("data-deliverystatus");
		var cancelreson = $(this).attr("data-cancelreson");
		var paymentmode = $(this).attr("data-paymentmode");
		var pickuplocation = $(this).attr("data-pickuplocation");
		//var newlocation = pickuplocation.replace(/,/g, " ");
		var droplocation = $(this).attr("data-droplocation");
		var deliverydate = $(this).attr("data-deliverydate");
		var packageprice = $(this).attr("data-packageprice");

		history.push({
			pathname: "/admin/deliverrequestdetail",
			// search: '?the=search',
			sendername: { name: sendername },
			senderphone: { phone: senderphone },
			recivername: { reciver_name: recivername },
			receivercontact: { reciver_contact: receivercontact },
			drivername: { driver_name: drivername },
			driverphone: { driver_phoneno: driverphoneno },
			driveremail: { driver_email: driveremail },
			trackingno: { tracking_no: trackingno },
			deliverystatus: { delivery_status: deliverystatus },
			cancelreson: { cancel_reson: cancelreson },
			paymentmode: { payment_mode: paymentmode },
			pickuplocation: { pickup_location: pickuplocation },
			droplocation: { drop_location: droplocation },
			deliverydate: { delivery_date: deliverydate },
			packageprice: { package_price: packageprice },
		});
		//history.push("/admin/deliverrequestdetail");
	});
	// function handleClick() {
	// 	history.push("/admin/deliverrequestdetail");
	// }

	useEffect(() => {
		async function totaluser() {
			let table10 = $("#myTable").DataTable();
			try {
				const response = await fetch(
					"http://speedster.book2say.com/Authentication/admin_gettripdeliveries",
					{
						method: "GET",
					}
				);
				const data = await response.json();
				if (data.status == true) {
					var userdetail = data.data;

					var j = 1;
					for (var i = 0; i < userdetail.length; i++) {
						if (userdetail[i].driverdetail != null) {
							//console.log("driver", userdetail[i].driverdetail.u_id);
							var driver_name = userdetail[i].driverdetail.name;
							var driver_phonenone = userdetail[i].driverdetail.phone_no;
							var driver_email = userdetail[i].driverdetail.email;
						} else {
							var driver_name = 0;
							var driver_phonenone = 0;
							var driver_email = 0;
						}

						if (userdetail[i].cancel_reason != "") {
							//console.log("driver", userdetail[i].driverdetail.u_id);
							var cancel_reason = userdetail[i].cancel_reason;
						} else {
							var cancel_reason = "no";
						}

						if (userdetail[i].pg != null) {
							//console.log("driver", userdetail[i].driverdetail.u_id);
							var payment_mode = userdetail[i].pg;
						} else {
							var payment_mode = "no";
						}

						var newpickup = userdetail[i].pickup_location.replace(/\s/g, "");
						var newdroplocation = userdetail[i].drop_location.replace(
							/\s/g,
							""
						);
						var newdeliverdate = userdetail[i].delivery_Date.replace(/\s/g, "");
						var detail_new =
							'<span class="eye_font"><i class="fa fa-eye driver_detail" style="cursor: pointer;" data-sendername=' +
							userdetail[i].name +
							" data-senderphone=" +
							userdetail[i].phone_no +
							" data-receivername=" +
							userdetail[i].receiver_name +
							" data-receivercontact=" +
							userdetail[i].receiver_contact_no +
							" data-drivername=" +
							driver_name +
							" data-driverphoneno=" +
							driver_phonenone +
							" data-driveremail=" +
							driver_email +
							" data-trackingno=" +
							userdetail[i].tracking_no +
							" data-deliverystatus=" +
							userdetail[i].status +
							" data-cancelreson=" +
							cancel_reason +
							" data-paymentmode=" +
							payment_mode +
							" data-pickuplocation=" +
							newpickup +
							" data-droplocation=" +
							newdroplocation +
							" data-deliverydate=" +
							newdeliverdate +
							" data-packageprice=" +
							userdetail[i].price +
							"></i></span>";
						//table10.row.add([j, userdetail[i].name, detail_new]);
						table10.row.add([
							j,
							userdetail[i].name,
							userdetail[i].phone_no,
							userdetail[i].pickup_location,
							userdetail[i].drop_location,
							userdetail[i].delivery_Date,
							userdetail[i].status,
							detail_new,
						]);
						j++;
					}
					//$('#displaydata2').prepend(content_html);
				}
			} catch (error) {
				console.log(error);
			}
			table10.draw();
		}

		$(document).ready(function () {
			totaluser();
			$("#myTable").DataTable();
		});
	}, []);
	// $(document).ready(function () {
	// 	$("#myTable").DataTable();
	// });

	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							{/* <Card.Header>
                <Card.Title as="h4">Delivery Request</Card.Title>
              </Card.Header> */}
							<div style={dropdwn_div}>
								<label style={delivery_statuslabel}>Delivery Status</label>
								<select
									id="dropdown"
									className="form-control"
									style={dropdown_status}
								>
									<option value="All">All</option>
									<option value="Completed">Completed</option>
									<option value="Cancelled">Cancelled</option>
									<option value="Inprogress">Inprogress</option>
								</select>
							</div>

							<Card.Body className="table-full-width table-responsive px-0">
								<Table className="table-hover table-striped" id="myTable">
									<thead>
										<tr>
											<th className="border-0">ID</th>
											<th className="border-0">Customer Name</th>
											<th className="border-0">Mobile Number</th>
											<th className="border-0">Pickup Location</th>
											<th className="border-0">Delivery Location</th>
											<th className="border-0">Date & Time</th>
											<th className="border-0">Delivery Status</th>
											<th className="border-0">Action</th>
										</tr>
									</thead>
									<tbody>
										{/* <tr>
											<td>1</td>
											<td>Hamza</td>
											<td>03018138901</td>
											<td>Bahria phase4</td>
											<td>Bahria phase5</td>
											<td>Feb 22, 2023</td>
											<td>Canceled</td>
											<td>
												<span class="eye_font">
													<i
														class="fa fa-eye eye_fontawesome"
														onClick={handleClick}
													></i>
												</span>
											</td>
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

export default Deliveryrequest;
