import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
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

function Deliveryrequest(props) {
  const [allrecord, setallrecord] = useState([]);
  const [alldriver, setalldriver] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const handleShowModal = (item) => {
    history.push({
      pathname: "/admin/deliverrequestdetail",
      state: {
        sendername: { name: item.name },
        senderphone: { phone: item.phone_no },
        recivername: { reciver_name: item.receiver_name },
        receivercontact: { reciver_contact: item.receiver_contact_no },
        drivername: { driver_name: item?.driverdetail?.name || " " },
        driverphone: { driver_phoneno: item?.driverdetail?.phone_no },
        driveremail: { driver_email: item?.driverdetail?.email },
        trackingno: { tracking_no: item.tracking_no },
        deliverystatus: { delivery_status: item.status },
        cancelreson: { cancel_reson: item.cancelreson },
        paymentmode: { payment_mode: item.paymentmode },
        pickuplocation: { pickup_location: item.pickup_location },
        droplocation: { drop_location: item.drop_location },
        deliverydate: { delivery_date: item.delivery_Date },
        packageprice: { package_price: item.price },
      },
    });
  };

  useEffect(() => {
    async function totaluser() {
      try {
        const response = await fetch(`${storeurl}admin_gettripdeliveries`, {
          method: "GET",
        });
        const data = await response.json();
        if (data.status === true) {
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
        if (data.status === true) {
          setalldriver(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    totaluser();
    totaldriver();
    if (allrecord.length > 0) {
      $("#myTable").DataTable();
    }
  }, [allrecord]);
  useEffect(() => {
    const authToken = localStorage.getItem("userid");
    props.history.push("/admin/deliverrequest");
    if (!authToken) {
      props.history.push("/login");
    }
  }, []);
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
                          </span>
                          <span className="eye_font">
                            <i
                              className="fa fa-eye driver_detail"
                              onClick={() => handleShowModal(item)}
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
    </>
  );
}

export default Deliveryrequest;
