import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
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
  Spinner

} from "react-bootstrap";
import $ from "jquery";
import "assets/js/custom.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import { storeurl } from "components/App/storeurl";
function Claim(props) {
  const [claimrecord, setclaimrecord] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const gonextscreen = (id) => {
    history.push("/admin/claimdetail/?id="+id);
  };

  useEffect(() => {
    async function totaluser() {
      //let table5 = $("#newexample5").DataTable();adminclaim
      try {
        const response = await fetch(`${storeurl}adminclaim`, {
          method: "GET",
        });
        const data = await response.json();
        if (data.status == true) {
          var userdetail = data.data;
          setclaimrecord(userdetail);
        }
      } catch (error) {
        console.log(error);
      }finally {
        setLoading(false); // Set loading to false after fetching data
      }
      //table5.draw();
    }

    // $(document).ready(function () {
    // 	totaluser();
    // 	$("#newexample5").DataTable();
    // });
    totaluser();
    if (claimrecord.length > 0) {
      let table3 = $("#newexample9").DataTable();
      //table3.draw();
    }
  }, [claimrecord]);

  //console.log("users", userblock);
  useEffect(() => {
    const authToken = localStorage.getItem("userid");
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
              <button type="button" class="btn btn-primary settingaddcsv_btn">
                Export to CSV
              </button>
            </div>

            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Claim</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
              {loading ? (
                  // Show loader when loading is true
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100vh',
                    }}
                  >
                    <Spinner animation="border"
                      role="status"
                      variant="danger" />
                  </div>
                ) : (
                <Table className="table-hover table-striped" id="newexample9">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Customer Name</th>
                      <th className="border-0">Driver Name</th>
                      <th className="border-0">Tracking No</th>
                      {/* <th className="border-0">Trip Cost</th> */}
                      <th className="border-0">Status</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {claimrecord &&
                      claimrecord.map((claimrecord, index) => {
                        const concatenatedImageUrls =
                          claimrecord.calimimages.map((image) => image.file);
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{claimrecord.customerdata.name}</td>
                            <td>{claimrecord.driverdata.name}</td>
                            <td>{claimrecord.tracking_no}</td>
                            {/* <td>${claimrecord.price}</td> */}
                            <td>{claimrecord.claim_status}</td>
                            <td>
                              <button
                               onClick={() => gonextscreen(claimrecord.claim_id)}
                                type="button"
                                class="btn btn-primary mynewtick23"
                                data-customername={
                                  claimrecord.customerdata.name
                                }
                                data-customerphone={
                                  claimrecord.customerdata.phone_no
                                }
                                data-drivername={claimrecord.driverdata.name}
                                data-driverphone={
                                  claimrecord.driverdata.phone_no
                                }
                                data-price={claimrecord.price}
                                data-claimfrom={claimrecord.pickup_location}
                                data-claimto={claimrecord.drop_location}
                                data-images={concatenatedImageUrls}
                                data-id={claimrecord.claim_id}
                                data-status={claimrecord.claim_status}
                                data-subject={claimrecord.subject}
                                data-message={claimrecord.message}
                              >
                                View Claim
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Claim;
