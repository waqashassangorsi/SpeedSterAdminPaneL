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
import { storeurl } from "components/App/storeurl";
function Deliveryrequest() {
  const [allrecord, setallrecord] = useState([]);
  const [alldriver, setalldriver] = useState([]);
  const [drivername, setdrivername] = useState(" ");
  //const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
    var trackingno = $(this).attr("data-tracking_no");
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

  useEffect(() => {
    async function totaluser() {
      try {
        const response = await fetch(`${storeurl}admin_gettripdeliveries`, {
          method: "GET",
        });
        const data = await response.json();
        if (data.status == true) {
          setallrecord(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    async function totaldriver() {
      try {
        const driver_response = await fetch(`${storeurl}admin_showalldriver`, {
          method: "GET",
        });
        const data = await driver_response.json();
        if (data.status == true) {
          setalldriver(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    totaluser();
    totaldriver();
    if (allrecord.length > 0) {
      let table3 = $("#myTable").DataTable();
      //table3.draw();
      // for (let i = 0; i < allrecord.length; i++) {
      // 	if(allrecord[i].driverdetail.length>0){
      // 	console.log("record",allrecord[i].driverdetail)
      // 	}
      //   }
    }
  }, [allrecord]);
  console.log("record", allrecord);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <div class="col-sm-12 csv_btn">
              <button type="button" class="btn btn-primary addcsv_btn">
                Export to CSV
              </button>
            </div>
            <Card className="strpied-tabled-with-hover">
              {/* <Card.Header>
                <Card.Title as="h4">Delivery Request</Card.Title>
              </Card.Header> */}

              {/*
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
							*/}

              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" id="myTable">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Customer Name</th>
                      <th className="border-0">Mobile Number</th>
                      <th className="border-0">Pickup Location</th>

                      <th className="border-0">Date & Time</th>
                      <th className="border-0">Delivery Status</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allrecord.map((item, index) => (
                      <tr key={index}>
                        {/* {item.driverdetail !== null ? (
														 (item.driverdetail).map((item2, innerIndex) => (
															<p key={innerIndex}>{item2}</p>
														  ))
													) : (
														<p>No</p>
														)} */}

                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.phone_no}</td>
                        <td>{item.pickup_location}</td>

                        <td>{item.delivery_Date}</td>
                        <td>{item.status}</td>

                        <td>
                          <span>
                            <Button
                              className="driver_detailbtn"
                              onClick={() => setShowModal(true)}
                              data-id={item.trip_id}
                            >
                              Driver
                            </Button>

                            <Modal
                              show={showModal}
                              onClose={() => setShowModal(false)}
                              aria-labelledby="LiveDemoExampleLabel"
                            >
                              <Modal.Header onClose={() => setShowModal(false)}>
                                <Modal.Title id="LiveDemoExampleLabel">
                                  Drivers
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <label>Select Driver</label>
                                <select class="form-control select_driver">
                                  {alldriver &&
                                    alldriver.map((mydrivers, index) => (
                                      <option
                                        key={index}
                                        value={mydrivers.u_id}
                                      >
                                        {mydrivers.name}
                                      </option>
                                    ))}
                                </select>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  color="secondary"
                                  onClick={() => setShowModal(false)}
                                >
                                  Close
                                </Button>
                                <Button
                                  color="success"
                                  className="change_driver"
                                >
                                  Save changes
                                </Button>
                              </Modal.Footer>
                            </Modal>
                            {/* <button
                              type="button"
                              class="btn btn-primary driver_detailbtn"
                              data-coreui-toggle="modal"
                              data-coreui-target="#exampleModal"
                            >
                              Driver
                            </button> */}
                            {/* <button
                              type="button"
                              className="btn btn-success driver_detailbtn"
                            >
                              Driver
                            </button> */}
                          </span>
                          <span className="eye_font">
                            <i
                              className="fa fa-eye driver_detail"
                              data-sendername={item.name}
                              data-senderphone={item.phone_no}
                              data-receivername={item.receiver_name}
                              data-receivercontact={item.receiver_contact_no}
                              {...(item.driverdetail !== "null"
                                ? { "data-drivername": item.driverdetail.name }
                                : { "data-drivername": " " })}
                              data-driverphoneno={item.driverdetail.phone_no}
                              data-driveremail={item.driverdetail.email}
                              data-tracking_no={item.tracking_no}
                              data-deliverystatus={item.status}
                              // data-cancelreson={item.cancel_reason}
                              // data-paymentmode={item.payment_mode}
                              data-pickuplocation={item.pickup_location}
                              data-droplocation={item.drop_location}
                              data-deliverydate={item.delivery_Date}
                              data-packageprice={item.price}
                            ></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* 
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-coreui-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-coreui-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Deliveryrequest;
