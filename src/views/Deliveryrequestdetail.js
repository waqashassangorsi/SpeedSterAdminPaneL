import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

function Deliveryrequestdetail() {
  const history = useHistory();
  const { state } = history.location;
  console.log("state", state);
  // Check if state exists before accessing its properties
  const username = state?.sendername?.name;
  const userphone = state?.senderphone?.phone;
  const recivername = state?.recivername?.reciver_name;
  const receivercontact = state?.receivercontact?.reciver_contact;
  const drivername = state?.drivername?.driver_name;
  const driverphone = state?.driverphone?.driver_phoneno;
  const driveremail = state?.driveremail?.driver_email;
  const trackingno = state?.trackingno?.tracking_no;
  const deliverystatus = state?.deliverystatus?.delivery_status;
  const cancelreson = state?.cancelreson?.cancel_reson;
  const paymentmode = state?.paymentmode?.payment_mode;
  const pickuplocation = state?.pickuplocation?.pickup_location;
  const droplocation = state?.droplocation?.drop_location;
  const delivery_date = state?.deliverydate?.delivery_date;
  const package_price = state?.packageprice?.package_price;

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card className="strpied-tabled-with-hover">
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

                <Col md="12" className="p-4">
                  <div className="mb-3">
                    <h6>DELIVERY INFORMATION</h6>
                  </div>

                  <table className="table table-borderless">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td>Tracking No :</td>
                        <td>{trackingno}</td>
                      </tr>

                      <tr>
                        <td>Delivery Status :</td>
                        <td>{deliverystatus}</td>
                      </tr>

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

                      <tr>
                        <td>Estimated Value Of Package :</td>
                        <td>${package_price}</td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Deliveryrequestdetail;
