import React, { useEffect, useState, useRef } from "react";

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
import "assets/js/custom.js";
import $ from "jquery";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../state/index";
function Addrole() {
	//const amount = useSelector((state) => state.amount2);
	//const amount1 = useSelector((state) => state.amount1);
	//	const dispatch = useDispatch();
	//	const { roleData } = bindActionCreators(actionCreators, dispatch);

	const [showdashboardchild, setshowdashboardchild] = useState(false);
	const [showdashboardchildtwo, setshowdashboardchildtwo] = useState(false);
	const [showdashboardchildthree, setshowdashboardchildthree] = useState(false);
	const [showdashboardchildfour, setshowdashboardchildfour] = useState(false);
	const [showdashboardchildfive, setshowdashboardchildfive] = useState(false);
	const [showdashboardchildsix, setshowdashboardchildsix] = useState(false);
	const [showdashboardchildseven, setshowdashboardchildseven] = useState(false);
	const [showdashboardchildeight, setshowdashboardchildeight] = useState(false);

	const handleClick = () => {
		setshowdashboardchild(!showdashboardchild);
		//roleData("dashboard");
	};

	const handleClicktwo = () => {
		setshowdashboardchildtwo(!showdashboardchildtwo);
		//roleData("delivery_request");
	};
	const handleClickthree = () => {
		setshowdashboardchildthree(!showdashboardchildthree);
	};
	const handleClickfour = () => {
		setshowdashboardchildfour(!showdashboardchildfour);
	};
	const handleClickfive = () => {
		setshowdashboardchildfive(!showdashboardchildfive);
	};
	const handleClicksix = () => {
		setshowdashboardchildsix(!showdashboardchildsix);
	};

	const handleClickseven = () => {
		setshowdashboardchildseven(!showdashboardchildseven);
	};
	const handleClickeight = () => {
		setshowdashboardchildeight(!showdashboardchildeight);
	};

	// const handleValues = () => {
	// 	var privilages = [];
	// 	var checkboxes = document.querySelectorAll(".checkbox_newval:checked");

	// 	checkboxes.forEach(function (checkbox) {
	// 		privilages.push(checkbox.value);
	// 	});
	// 	roleData(privilages);
	// };
	// console.log("wqeqwe", amount);

	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">Role</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<form class="add_useform">
									<div class="row">
										<div class="col">
											<label>Role Name</label>
											<input
												type="text"
												class="form-control role_name"
												placeholder="Name"
											/>
										</div>
									</div>
									<Table className="table-hover table-striped">
										<thead>
											<tr>
												<th className="border-0">Name</th>
												<th className="border-0">Select Access</th>
											</tr>
										</thead>
										<tbody id="displaydata3">
											{/****** first row start *****/}
											<tr>
												<td class="dashboard_td table_hover">
													<div onClick={handleClick}>
														<span>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-right right_arrow"
																aria-hidden="true"
															></i>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-down down_arrow"
																aria-hidden="true"
															></i>
														</span>{" "}
														<span>Dashboard</span>
													</div>
												</td>
												<td>
													<input type="checkbox" id="dashboard"></input>
												</td>
											</tr>

											{showdashboardchild == true && (
												<>
													<tr class="dashboard_collapse close2">
														<td>
															<div>
																<span>View Dashboard</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk checkbox_newval"
																value="dashboard"
															></input>
														</td>
													</tr>

													{/* <tr class="dashboard_collapse close2">
														<td>
															<div>
																<span>View Delivery, Vehicle, Agent Count</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk checkbox_newval"
																value="view_delivery_vehicle_agentcount"
															></input>
														</td>
													</tr> */}
												</>
											)}

											{/****** first row end *****/}
											{/****** Second row start *****/}
											<tr>
												<td class="dashboard_td2 table_hover">
													<div onClick={handleClicktwo}>
														<span>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-right right_arrow2"
																aria-hidden="true"
															></i>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-down down_arrow2"
																aria-hidden="true"
															></i>
														</span>{" "}
														<span>Delivery Requests</span>
													</div>
												</td>
												<td>
													<input type="checkbox" id="dashboard2"></input>
												</td>
											</tr>

											{showdashboardchildtwo == true && (
												<>
													{/* <tr class="dashboard_collapse2 close3">
														<td>
															<div>
																<span>Update Delivery Status</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk2 checkbox_newval"
																value="update_delivery_status"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse2 close3">
														<td>
															<div>
																<span>Assign Driver On Delivery</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk2 checkbox_newval"
																value="assign_driver_on_delivery"
															></input>
														</td>
													</tr> */}

													<tr class="dashboard_collapse2 close3">
														<td>
															<div>
																<span>View Delivery Details</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk2 checkbox_newval"
																value="delivery_details"
															></input>
														</td>
													</tr>
													{/* 
													<tr class="dashboard_collapse2 close3">
														<td>
															<div>
																<span>Export Delivery To Pdf</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk2 checkbox_newval"
																value="export_delivery_to_pdf"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse2 close3">
														<td>
															<div>
																<span>View Delivery Grid</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk2 checkbox_newval"
																value="export_delivery_grid"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse2 close3">
														<td>
															<div>
																<span>Export Delivery To Excel</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk2 checkbox_newval"
																value="export_delivery_to_excel"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse2 close3">
														<td>
															<div>
																<span>Add Delivery</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk2 checkbox_newval"
																value="add_delivery"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse2 close3">
														<td>
															<div>
																<span>Send Delivery Invoice Mail</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk2 checkbox_newval"
																value="send_delivery_invoice_mail"
															></input>
														</td>
													</tr> */}
												</>
											)}
											{/****** Second row end *****/}

											{/****** fourth row start *****/}

											<tr>
												<td class="dashboard_td4 table_hover">
													<div onClick={handleClickthree}>
														<span>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-right right_arrow4"
																aria-hidden="true"
															></i>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-down down_arrow4"
																aria-hidden="true"
															></i>
														</span>{" "}
														<span>Drivers</span>
													</div>
												</td>
												<td>
													<input type="checkbox" id="dashboard3"></input>
												</td>
											</tr>

											{showdashboardchildthree == true && (
												<>
													{/* <tr class="dashboard_collapse4 close5">
														<td>
															<div>
																<span>Update Driver</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk3 checkbox_newval"
																value="update_driver"
															></input>
														</td>
													</tr> */}
													{/* 
													<tr class="dashboard_collapse4 close5">
														<td>
															<div>
																<span>Export Driver Details To Excel</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk3 checkbox_newval"
																value="export_driver_details_to_excel"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse4 close5">
														<td>
															<div>
																<span>Export Driver Details To Pdf</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk3 checkbox_newval"
																value="export_driver_details_to_pdf"
															></input>
														</td>
													</tr> */}

													<tr class="dashboard_collapse4 close5">
														<td>
															<div>
																<span>View Driver Details</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk3 checkbox_newval"
																value="driver_details"
															></input>
														</td>
													</tr>
													{/* 
													<tr class="dashboard_collapse4 close5">
														<td>
															<div>
																<span>Update Driver Status</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk3 checkbox_newval"
																value="update_driver_status"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse4 close5">
														<td>
															<div>
																<span>View Driver Grid</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk3 checkbox_newval"
																value="view_driver_grid"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse4 close5">
														<td>
															<div>
																<span>Add Driver</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk3 checkbox_newval"
																value="add_driver"
															></input>
														</td>
													</tr> */}
												</>
											)}
											{/****** fourth row ends *****/}

											{/****** fifth row start *****/}

											<tr>
												<td class="dashboard_td5 table_hover">
													<div onClick={handleClickfour}>
														<span>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-right right_arrow5"
																aria-hidden="true"
															></i>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-down down_arrow5"
																aria-hidden="true"
															></i>
														</span>{" "}
														<span>Enduser</span>
													</div>
												</td>
												<td>
													<input type="checkbox" id="dashboard4"></input>
												</td>
											</tr>
											{showdashboardchildfour == true && (
												<>
													{/* <tr class="dashboard_collapse5 close6">
														<td>
															<div>
																<span>Update Vehicle Status</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk4 checkbox_newval"
																value="update_vehicle_status"
															></input>
														</td>
													</tr> */}
													{/* 
													<tr class="dashboard_collapse5 close6">
														<td>
															<div>
																<span>Export Vehicle Details To Excel</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk4 checkbox_newval"
																value="export_vehicle_details_to_excel"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse5 close6">
														<td>
															<div>
																<span>View Vehicle Grid</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk4 checkbox_newval"
																value="view_vehicle_grid"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse5 close6">
														<td>
															<div>
																<span>Export Vehicle Details To Pdf</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk4 checkbox_newval"
																value="export_vehicle_details_to_pdf"
															></input>
														</td>
													</tr> */}

													<tr class="dashboard_collapse5 close6">
														<td>
															<div>
																<span>View Enduser</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk4 checkbox_newval"
																value="enduser"
															></input>
														</td>
													</tr>

													{/* <tr class="dashboard_collapse5 close6">
														<td>
															<div>
																<span>Add Vehicle</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk4 checkbox_newval"
																value="add_vehicle"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse5 close6">
														<td>
															<div>
																<span>Update Vehicle</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk4 checkbox_newval"
																value="update_vehicle"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse5 close6">
														<td>
															<div>
																<span>Assign Agent On Vehicle</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk4 checkbox_newval"
																value="assign_agent_on_vehicle"
															></input>
														</td>
													</tr> */}
												</>
											)}
											{/****** fifth row ends *****/}

											{/****** sixth row start *****/}

											<tr>
												<td class="dashboard_td5 table_hover">
													<div onClick={handleClicksix}>
														<span>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-right right_arrow5"
																aria-hidden="true"
															></i>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-down down_arrow5"
																aria-hidden="true"
															></i>
														</span>{" "}
														<span>Rides</span>
													</div>
												</td>
												<td>
													<input type="checkbox" id="dashboard4"></input>
												</td>
											</tr>
											{showdashboardchildsix == true && (
												<>
													<tr class="dashboard_collapse5 close6">
														<td>
															<div>
																<span>View Rides</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk4 checkbox_newval"
																value="rides"
															></input>
														</td>
													</tr>
												</>
											)}
											{/****** sixth row ends *****/}

											{/****** seventh row start *****/}

											<tr>
												<td class="dashboard_td7 table_hover">
													<div onClick={handleClickfive}>
														<span>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-right right_arrow7"
																aria-hidden="true"
															></i>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-down down_arrow7"
																aria-hidden="true"
															></i>
														</span>{" "}
														<span>Promo Code</span>
													</div>
												</td>
												<td>
													<input type="checkbox" id="dashboard5"></input>
												</td>
											</tr>
											{showdashboardchildfive == true && (
												<>
													{/* <tr class="dashboard_collapse7 close8">
														<td>
															<div>
																<span>Export Promo Code Details To Pdf</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk5 checkbox_newval"
																value="export_promocode_details_topdf"
															></input>
														</td>
													</tr> */}

													<tr class="dashboard_collapse7 close8">
														<td>
															<div>
																<span>View Promo code</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk5 checkbox_newval"
																value="promocode"
															></input>
														</td>
													</tr>

													{/* <tr class="dashboard_collapse7 close8">
														<td>
															<div>
																<span>Add Promo code</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk5 checkbox_newval"
																value="add_promocode"
															></input>
														</td>
													</tr> */}
													{/* 
													<tr class="dashboard_collapse7 close8">
														<td>
															<div>
																<span>Update Promo code Status</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk5 checkbox_newval"
																value="update_promocode_status"
															></input>
														</td>
													</tr> */}

													{/* <tr class="dashboard_collapse7 close8">
														<td>
															<div>
																<span>Export Promo Code Details To Excel</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk5 checkbox_newval"
																value="export_promocode_details_to_excel"
															></input>
														</td>
													</tr> */}
												</>
											)}
											{/****** seventh row ends *****/}

											{/****** eight row start *****/}

											<tr>
												<td class="dashboard_td5 table_hover">
													<div onClick={handleClickseven}>
														<span>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-right right_arrow5"
																aria-hidden="true"
															></i>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-down down_arrow5"
																aria-hidden="true"
															></i>
														</span>{" "}
														<span>User Management</span>
													</div>
												</td>
												<td>
													<input type="checkbox" id="dashboard4"></input>
												</td>
											</tr>
											{showdashboardchildseven == true && (
												<>
													<tr class="dashboard_collapse5 close6">
														<td>
															<div>
																<span>View User Management</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk4 checkbox_newval"
																value="usermanagement"
															></input>
														</td>
													</tr>
												</>
											)}
											{/****** eight row ends *****/}

											{/****** nine row start *****/}

											<tr>
												<td class="dashboard_td5 table_hover">
													<div onClick={handleClickeight}>
														<span>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-right right_arrow5"
																aria-hidden="true"
															></i>
															<i
																id="arrow_dashboard"
																class="fa fa-arrow-circle-down down_arrow5"
																aria-hidden="true"
															></i>
														</span>{" "}
														<span>Setting</span>
													</div>
												</td>
												<td>
													<input type="checkbox" id="dashboard4"></input>
												</td>
											</tr>
											{showdashboardchildeight == true && (
												<>
													<tr class="dashboard_collapse5 close6">
														<td>
															<div>
																<span>View Setting</span>
															</div>
														</td>
														<td>
															<input
																type="checkbox"
																class="chk4 checkbox_newval"
																value="setting"
															></input>
														</td>
													</tr>
												</>
											)}
											{/****** nine row ends *****/}
										</tbody>
									</Table>

									<div class="row mt-5">
										<div class="col-sm-12 add_userbtn">
											<button
												type="button"
												class="btn btn-primary"
												id="addrole_cancel"
											>
												Cancel
											</button>
											<button
												type="button"
												class="btn btn-success"
												id="addrole_form"
											>
												Submit
											</button>

											{/* <button
												type="button"
												class="btn btn-success"
												onClick={handleValues}
											>
												Add values
											</button> */}
										</div>
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

export default Addrole;
