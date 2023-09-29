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
function Deliveryrequestdetail() {
  const history = useHistory();
  const username = history.location.sendername.name;
  const userphone = history.location.senderphone.phone;
  const recivername = history.location.recivername.reciver_name;
  const receivercontact = history.location.receivercontact.reciver_contact;
  const drivername = history.location.drivername.driver_name;
  const driverphone = history.location.driverphone.driver_phoneno;
  const driveremail = history.location.driveremail.driver_email;
  const trackingno = history.location.trackingno.tracking_no;
  const deliverystatus = history.location.deliverystatus.delivery_status;
  const cancelreson = history.location.cancelreson.cancel_reson;
  const paymentmode = history.location.paymentmode.payment_mode;
  const pickuplocation = history.location.pickuplocation.pickup_location;
  const droplocation = history.location.droplocation.drop_location;
  const delivery_date = history.location.deliverydate.delivery_date;
  const package_price = history.location.packageprice.package_price;
  //console.log("driverphone", driverphone);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              {/* <Card.Header>
                <Card.Title as="h4">Delivery Request</Card.Title>
              </Card.Header> */}
              <Card.Body className="table-full-width table-responsive px-0">
                <Row>
                  <Col md="6" className="p-4">
                    <div className="mb-3">
                      <h6>CUSTOMER DETAILS</h6>
                    </div>

                    <p>Name : {username}</p>
                    <p>Mobile : {userphone}</p>
                  </Col>

                  <Col md="6" className="p-4">
                    <div className="mb-3">
                      <h6>DRIVER DETAILS</h6>
                    </div>

                    {drivername == 0 && (
                      <>
                        <p>Driver not assigned.</p>
                      </>
                    )}

                    {drivername != 0 && (
                      <>
                        <p>Name : {drivername}</p>
                        <p>Email : {driveremail}</p>
                        <p>Mobile : {driverphone}</p>
                      </>
                    )}
                  </Col>

                  {/* <Col md="12" className="p-4">
										<div className="mb-3">
											<h6>DRIVER DETAILS</h6>
										</div>

										{drivername == 0 && (
											<>
												<p>Driver not assigned.</p>
											</>
										)}

										{drivername != 0 && (
											<>
												<p>Name : {drivername}</p>
												<p>Email : {driveremail}</p>
												<p>Mobile : {driverphone}</p>
											</>
										)}
									</Col> */}

                  <Col md="12" className="p-4">
                    <div className="mb-3">
                      <h6>DELIVERY INFORMATION</h6>
                    </div>

                    <table class="table table-borderless">
                      <thead>
                        {/* <tr>
													<th>Tracking No :</th>
													<th>{trackingno}</th>
												</tr> */}
                      </thead>
                      <tbody>
                        {/* <tr>
													<td>Category :</td>
													<td>Delivery</td>
												</tr>*/}

                        <tr>
                          <td>Tracking No :</td>
                          <td>{trackingno}</td>
                        </tr>

                        <tr>
                          <td>Delivery Status :</td>
                          <td>{deliverystatus}</td>
                        </tr>

                        {/* <tr>
													<td>Cancellation Reason :</td>
													<td>{cancelreson}</td>
												</tr> */}

                        {/* <tr>
													<td>Cancellation Comment :</td>
													<td>Blabls</td>
												</tr> */}

                        {/* <tr>
													<td>Payment Mode :</td>
													<td>{paymentmode}</td>
												</tr> */}

                        <tr>
                          <td>Pickup Location :</td>
                          <td>{pickuplocation} </td>
                        </tr>

                        <tr>
                          <td>Delivery Location :</td>
                          <td>{droplocation}</td>
                        </tr>

                        <tr>
                          <td>Pickup Date & Time :</td>
                          <td>{delivery_date}</td>
                        </tr>

                        {/* <tr>
													<td>Item Category :</td>
													<td>Delivered by Sedan</td>
												</tr>

												<tr>
													<td>Quantity per package :</td>
													<td>1</td>
												</tr>

												<tr>
													<td>Weight per package :</td>
													<td>Less than 30 lbs</td>
												</tr>

												<tr>
													<td>Item Description :</td>
													<td>blabks</td>
												</tr> */}

                        <tr>
                          <td>Estimated Value Of Package :</td>
                          <td>${package_price}</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <p>Delivery Code :	BC00218</p>
                                <p>Category :	Delivery</p> */}
                  </Col>

                  {/* <Col md="12" className="pl-4 pt-0">
										<p>Payment Status : Payment Release</p>
									</Col> */}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Deliveryrequestdetail;
