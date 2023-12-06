import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  Spinner,

} from "react-bootstrap";
import $ from "jquery";
import { storeurl } from "components/App/storeurl";
function Driverdetail(props) {
  const [drivername, setdrivername] = useState("");
  const [driveremail, setdriveremail] = useState("");
  const [driverfrontlicense, setdriverfrontlicense] = useState([]);
  const [driverbacklicense, setdriverbacklicense] = useState([]);
  const [driverregistrationdocument, setregistrationdocument] = useState([]);
  const [driveridcardfront, setdriveridcardfront] = useState([]);
  const [driveridcardback, setdriveridcardback] = useState([]);
  const [vehicalinfo, setvehicalinfo] = useState([]);
  const [drivermodel_year, setmodel_year] = useState([]);
  const [plate_no, setplate_no] = useState([]);
  const [apidata, setapidata] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state


  const [privilages, setPrivilages] = useState([]);
  const params = window.location.search.substring(1);
  var pair = params.split("=");
  var id = pair[1];
  console.log("paramvalue", id);
  async function callapi(event) {
    console.log("hellpakistan");
    $.ajax({
      url: `${storeurl}admin_singledriverdetail`,
      type: "POST",
      data: { id: id },
      dataType: "json",
      beforeSend: function () {
        setLoading(true); // Set loading to true before making the request
      },
      success: function (html) {
        console.log("driverdetail", html);
        if (html.status === true) {
          setapidata(html.data);
          if (html.data.length > 0) {
            var newdatamy = html.data;
            var privilagesArray = [];
            var backlicenseArray = [];
            var registrationdocumentArray = [];
            var driveridcardfrontArray = [];
            var driveridcardbackArray = [];
            var vehicalinfoArray = [];
            var drivermodel_yearArray = [];
            var plate_noArray = [];

            newdatamy.forEach(function (checkbox) {
              privilagesArray.push(checkbox.driving_license_front);
              backlicenseArray.push(checkbox.driving_license_back);
              registrationdocumentArray.push(checkbox.registration_document);
              driveridcardfrontArray.push(checkbox.id_card_front);
              driveridcardbackArray.push(checkbox.id_card_back);
              vehicalinfoArray.push(checkbox.vehicle_info);
              drivermodel_yearArray.push(checkbox.model_year);
              plate_noArray.push(checkbox.plate_no);
              setdrivername(checkbox.name);
              setdriveremail(checkbox.email);
            });
            setdriverfrontlicense(privilagesArray);
            setdriverbacklicense(backlicenseArray);
            setregistrationdocument(registrationdocumentArray);
            setdriveridcardfront(driveridcardfrontArray);
            setdriveridcardback(driveridcardbackArray);
            setvehicalinfo(vehicalinfoArray);
            setmodel_year(drivermodel_yearArray);
            setplate_no(plate_noArray);
          }
        } else {
          // alert("Record not exists");
        }
      },
      complete: function () {
        setLoading(false); // Set loading to false after the request is complete
      },
    });
  }


  useEffect(() => {
    const authToken = localStorage.getItem("userid");
    props.history.push("/admin/driverdetail/?id=" + id);
    if (!authToken) {
      props.history.push("/login");
    }

    callapi();
  }, [id]);


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Driver detail</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                {loading && (
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
                )}
                {!loading && (

                  <form class="addprpromoform">


                    <div class="form-group">
                      <label class="driver_imagelabel">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        readOnly
                        value={apidata?.name}
                        id="driver_name"
                      />
                    </div>

                    <div class="form-group">
                      <label class="driver_imagelabel">Email</label>
                      <input
                        type="text"
                        class="form-control"
                        readOnly
                        value={apidata?.email}
                        id="driver_name"
                      />
                    </div>

                    <div class="form-group">
                      <label class="driver_imagelabel">Vehical Info</label>
                      <input
                        type="text"
                        class="form-control mb-2"
                        readOnly
                        value={apidata?.vehicle_info}
                        id="driver_name"
                      />
                    </div>

                    <div class="form-group">
                      <label class="driver_imagelabel">Model</label>
                      <input
                        type="text"
                        class="form-control mb-2"
                        readOnly
                        value={apidata?.model_year}
                        id="driver_name"
                      />
                    </div>

                    <div class="form-group">
                      <label class="driver_imagelabel">Plate No</label>
                      <input
                        type="text"
                        class="form-control mb-2"
                        readOnly
                        value={apidata?.plate_no}
                        id="driver_name"
                      />
                    </div>

                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label class="driver_imagelabel">
                            Front Image of License
                          </label>

                          <div class="col-sm-12">
                            <a href={apidata?.driving_license_front} target="_blank">
                              <img src={apidata?.driving_license_front} class="driver_licenceimg"></img>
                            </a>
                          </div>
                          {apidata?.driving_license_front == "" && <p>No Image Found</p>}
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="form-group">
                          <label class="driver_imagelabel">
                            Back Image of License
                          </label>
                          <div class="col-sm-12">
                            <a href={apidata?.driving_license_back} target="_blank">
                              <img src={apidata?.driving_license_back} class="driver_licenceimg"></img>
                            </a>
                          </div>
                          {apidata?.driving_license_back == "" && <p>No Image Found</p>}
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label class="driver_imagelabel">
                            Front Image of Id Card
                          </label>
                          <div class="col-sm-12">
                            <a href={apidata?.id_card_front} target="_blank">
                              <img src={apidata?.id_card_front} class="driver_licenceimg"></img>
                            </a>
                          </div>
                          {apidata?.id_card_front == "" && <p>No Image Found</p>}
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="form-group">
                          <label class="driver_imagelabel">
                            Back Image of Id Card
                          </label>
                          <div class="col-sm-12">
                            <a href={apidata?.id_card_back} target="_blank">
                              <img src={apidata?.id_card_back} class="driver_licenceimg"></img>
                            </a>
                          </div>
                          {apidata?.id_card_back == "" && <p>No Image Found</p>}
                        </div>
                      </div>
                    </div>

                  </form>
                )}

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Driverdetail;
