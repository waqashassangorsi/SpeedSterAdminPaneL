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
  Spinner
} from "react-bootstrap";
import { storeurl } from "components/App/storeurl";
import $ from "jquery";
import "assets/js/custom.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
function Calimdetail() {
  const myimage = {
    width: "20%",
    marginRight: "20px",
    height: "150px",
  };
  const history = useHistory();
  const [apidata, setapidata] = useState([]);
  const [loading, setLoading] = useState(true);
  async function callapi(id) {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("claim_id", id);
      const response = await fetch(`${storeurl}adminclaim_detail`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.status == true) {
        setapidata(data.data[0]);
      }
      setLoading(false);

      console.log("logindata123", data);

      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);

    }
  }

  useEffect(() => {

    const params = window.location.search.substring(1);
    var pair = params.split("=");
    var id = pair[1];

    console.log("ourfirstid", id);


    const authToken = localStorage.getItem("userid");
    if (id == undefined) {

    } else {
      if (!authToken) {
        props.history.push("/login");
      }

      callapi(id);
    }

  }, []);

  console.log("apidata==>", apidata)


  function approveclaim() {
    var response = confirm("Are you sure you want to change the status?");
    if (response == true) {
      const claim_id = $("#approvebtnnew").attr("data-id");

      const status = "Approved";
      $.ajax({
        url: `${storeurl}adminclaimstatus`,
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
        url: `${storeurl}adminclaimstatus`,
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
                    {loading ? (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                      }}>
                        <Spinner animation="border"
                          role="status"
                          variant="danger" /></div>
                    ) : (
                      <>
                        <div className="mb-3">
                          <h6>Claim Detail</h6>
                        </div>

                        <table class="table table-borderless">

                          <tbody>
                            <tr>
                              <td>Driver Name :</td>
                              <td>{apidata?.driverdata?.name}</td>
                            </tr>

                            <tr>
                              <td>Driver Phone :</td>
                              <td>{apidata?.driverdata?.phone_no}</td>
                            </tr>

                            <tr>
                              <td>Customer Name :</td>
                              <td>{apidata?.customerdata?.name}</td>
                            </tr>

                            <tr>
                              <td>Customer Phone :</td>
                              <td>{apidata?.customerdata?.phone_no}</td>
                            </tr>

                            <tr>
                              <td>Trip Cost :</td>
                              <td>${apidata?.price}</td>
                            </tr>

                            <tr>
                              <td>Calim from :</td>
                              <td>{"claimfrom"}</td>
                            </tr>

                            <tr>
                              <td>Calim to :</td>
                              <td>{"claimto"}</td>
                            </tr>

                            <tr>
                              <td>Subject :</td>
                              <td>{apidata?.subject}</td>
                            </tr>

                            <tr>
                              <td>Message :</td>
                              <td>{apidata?.message}</td>
                            </tr>
                          </tbody>
                        </table>

                        <div class="mb-3">
                          <p>Picture Uploaded</p>

                          {apidata?.calimimages &&
                            apidata.calimimages.map((image, index) => {
                              console.log('Current', image.file);

                              return (
                                <img
                                  key={index}
                                  src={image.file}
                                  alt={`Image ${index}`}
                                  className="side_barlogo"
                                  style={myimage}
                                />
                              );
                            })}
                        </div>
                      </>


                    )}


                 
                    <div class="mb-3">
                      <p>Picture Uploaded by driver</p>
                     
                      {apidata?.calimimages &&
                            apidata.calimimages.map((separatedArray, index) => (
                          <img
                            src={separatedArray.file}
                            alt="..."
                            class="side_barlogo"
                            style={myimage}
                          />
                        ))}
                    </div> 

                     <div>
                      <p>Picture Uploaded by agent</p>
                   

                      {apidata?.calimimages &&
                            apidata.calimimages.map((separatedArray, index) => (
                          <img
                            src={separatedArray.file}
                            alt="..."
                            class="side_barlogo"
                            style={myimage}
                          />
                        ))}
                    </div>

                    {apidata.status === "Completed" && (
                      <div class="text-center mt-2">
                        <button
                          class="btn btn-primary mr-2"
                          onClick={approveclaim}
                          // data-id={dataid}
                          id="approvebtnnew"
                        >
                          Approve
                        </button>
                        <button
                          class="btn btn-danger"
                          id="disapprovebtnnew"
                          // data-id={dataid}
                          onClick={disapproveclaim}
                        >
                          Disapprove
                        </button>
                      </div>
                    )}

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
