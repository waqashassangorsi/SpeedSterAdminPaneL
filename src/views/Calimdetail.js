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
function Calimdetail() {
  const myimage = {
    width: "20%",
    marginRight: "20px",
    height: "250px",
  };
  const history = useHistory();
  const customername = history.location.customername.customer_name;
  const drivername = history.location.drivername.driver_name;
  const customerphone = history.location.customerphone.customer_phone;
  const driverphone = history.location.driverphone.driver_phone;
  const tripcost = history.location.tripcost.trip_cost;
  const claimfrom = history.location.claimfrom.claim_from;
  const claimto = history.location.claimto.claim_to;
  const dataimages = history.location.dataimages.data_images;
  const dataid = history.location.dataid.data_id;
  const datastatus = history.location.datastatus.data_status;
  const datasubject = history.location.datasubject.data_subject;
  const datamessage = history.location.datamessage.data_message;
  const separatedArray = dataimages.split(",");
  console.log("separatedArray", separatedArray);
  function approveclaim() {
    var response = confirm("Are you sure you want to change the status?");
    if (response == true) {
      const claim_id = $("#approvebtnnew").attr("data-id");

      const status = "Approved";
      $.ajax({
        url: "http://speedster.book2say.com/Authentication/adminclaimstatus",
        type: "POST",
        data: { claim_id: claim_id, status: status },
        dataType: "json",
        success: function (html) {
          if (html.status == true) {
            alert(html.message);
          } else {
            alert("Claim not Changed");
          }
        },
      });
    }
  }

  function disapproveclaim() {
    var response = confirm("Are you sure you want to change the status?");
    if (response == true) {
      const claim_id = $("#disapprovebtnnew").attr("data-id");

      const status = "Rejected";
      $.ajax({
        url: "http://speedster.book2say.com/Authentication/adminclaimstatus",
        type: "POST",
        data: { claim_id: claim_id, status: status },
        dataType: "json",
        success: function (html) {
          if (html.status == true) {
            alert(html.message);
          } else {
            alert("Claim not Changed");
          }
        },
      });
    }
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Body className="table-full-width table-responsive px-0">
                <Row>
                  <Col md="12" className="p-4">
                    <div className="mb-3">
                      <h6>Calim Detail</h6>
                    </div>

                    <table class="table table-borderless">
                      {/* <thead>
												<tr>
													<th>Tracking No :</th>
													<th>asdasd</th>
												</tr>
											</thead> */}
                      <tbody>
                        <tr>
                          <td>Driver Name :</td>
                          <td>{drivername}</td>
                        </tr>

                        <tr>
                          <td>Driver Phone :</td>
                          <td>{driverphone}</td>
                        </tr>

                        <tr>
                          <td>Customer Name :</td>
                          <td>{customername}</td>
                        </tr>

                        <tr>
                          <td>Customer Phone :</td>
                          <td>{customerphone}</td>
                        </tr>

                        <tr>
                          <td>Trip Cost :</td>
                          <td>${tripcost}</td>
                        </tr>

                        <tr>
                          <td>Calim from :</td>
                          <td>{claimfrom}</td>
                        </tr>

                        <tr>
                          <td>Calim to :</td>
                          <td>{claimto}</td>
                        </tr>

                        <tr>
                          <td>Subject :</td>
                          <td>{datasubject}</td>
                        </tr>

                        <tr>
                          <td>Message :</td>
                          <td>{datamessage}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="mb-3">
                      <p>Picture Uploaded</p>

                      {separatedArray &&
                        separatedArray.map((separatedArray, index) => (
                          <img
                            src={separatedArray}
                            alt="..."
                            class="side_barlogo"
                            style={myimage}
                          />
                        ))}
                    </div>

                    {/* <div class="mb-3">
                      <p>Picture Uploaded by driver</p>
                     
                      {separatedArray &&
                        separatedArray.map((separatedArray, index) => (
                          <img
                            src={separatedArray}
                            alt="..."
                            class="side_barlogo"
                            style={myimage}
                          />
                        ))}
                    </div> */}

                    {/* <div>
                      <p>Picture Uploaded by agent</p>
                   

                      {separatedArray &&
                        separatedArray.map((separatedArray, index) => (
                          <img
                            src={separatedArray}
                            alt="..."
                            class="side_barlogo"
                            style={myimage}
                          />
                        ))}
                    </div> */}

                    {/* {datastatus === "Pending" && (
                      <div class="text-center mt-2">
                        <button
                          class="btn btn-primary mr-2"
                          onClick={approveclaim}
                          data-id={dataid}
                          id="approvebtnnew"
                        >
                          Approve
                        </button>
                        <button
                          class="btn btn-danger"
                          id="disapprovebtnnew"
                          data-id={dataid}
                          onClick={disapproveclaim}
                        >
                          Disapprove
                        </button>
                      </div>
                    )} */}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Calimdetail;
