import React, { useEffect, useState } from "react";
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
  Spinner
} from "react-bootstrap";
import $ from "jquery";
import "assets/js/custom.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { storeurl } from "components/App/storeurl";

function Enduserdetail(props) {
  const history = useHistory();

  const [apidata, setapidata] = useState([]);
  const [loading, setLoading] = useState(true);

  const customername = history?.location?.customername?.name;
  const dp = history?.location?.dp?.user_dp;
  const email = history?.location?.email?.user_email;
  const phoneno = history?.location?.phoneno?.user_phoneno;

  const params = window.location.search.substring(1);
  var pair = params.split("=");
  var id = pair[1];

  console.log("ourfirstid", id)

  async function callapi(event) {

    try {

      const formData = new FormData();
      formData.append("u_id", id);
      const response = await fetch(`${storeurl}admin_singleuserdetail`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.status == true) {
        setapidata(data.data);
      }
      console.log("logindata123", data);

      console.log(data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false when the data is fetched
    }
  }

  useEffect(() => {
    const authToken = localStorage.getItem("userid");
    props.history.push("/admin/typographydetail/?id=" + id);
    if (!authToken) {
      props.history.push("/login");
    }

    callapi();
  }, [id]);

  console.log("customername", customername);
  const styles = {
    border: "2px solid #f5f5f5",
    borderRadius: "16px",
  };

  const headingcolor = {
    backgroundColor: "#f5f5f5",
    padding: "3px",
    paddingLeft: "5px",
    paddingTop: "10px",
  };

  const imagedata = {
    height: "121px",
  };

  console.log("apidata", apidata)
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">EndUser Detail</Card.Title>
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
                <Row>
                  <Col md="6" className="p-4">
                    <div style={styles}>
                      <div className="mb-3" style={headingcolor}>
                        <h5>Customer Profile</h5>
                      </div>

                      <div className="text-center">
                        <img
                          style={imagedata}
                          src={apidata?.dp}
                          alt="..."
                          class="side_barlogo"
                        />
                        <h5 className="mt-1">{customername}</h5>
                      </div>
                    </div>
                  </Col>

                  <Col md="6" className="p-4">
                    <div style={styles}>
                      <div className="mb-3" style={headingcolor}>
                        <h5>Customer Details</h5>
                      </div>

                      <div className="text-center">
                        <table class="table table-borderless">
                          <tbody>
                            {/* <tr>
															<td>Code :</td>
															<td>U02286</td>
														</tr> */}

                            <tr>
                              <td>Email :</td>
                              <td>{apidata?.email}</td>
                            </tr>

                            <tr>
                              <td>Mobile :</td>
                              <td>{apidata?.phone_no}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Col>
                </Row>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Enduserdetail;
