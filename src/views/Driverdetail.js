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

  const [privilages, setPrivilages] = useState([]);
  const params = window.location.search.substring(1);
  var pair = params.split("=");
  var id = pair[1];
  console.log("paramvalue",id);


  $.ajax({
    url: `${storeurl}admin_singledriverdetail`,
    type: "POST",
    data: { id: id },
    dataType: "json",
    success: function (html) {
      console.log("driverdetail", html);
      if (html.status == true) {
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
      //console.log("asdasd234234", privilages);
    },
  });
  useEffect(() => {
    const authToken = localStorage.getItem("userid");
    props.history.push("/admin/driverdetail/?id="+id);
    if (!authToken) {
      props.history.push("/login");
    }
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
                <form class="addprpromoform">
                  <div class="form-group">
                    <label class="driver_imagelabel">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      readOnly
                      value={drivername}
                      id="driver_name"
                    />
                  </div>

                  <div class="form-group">
                    <label class="driver_imagelabel">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      readOnly
                      value={driveremail}
                      id="driver_name"
                    />
                  </div>

                  {vehicalinfo.length > 0 && (
                    <div class="form-group">
                      <label class="driver_imagelabel">Vehical Info</label>
                      {vehicalinfo.map((value, index) => (
                        <input
                          type="text"
                          class="form-control mb-2"
                          readOnly
                          value={value}
                          id="driver_name"
                        />
                      ))}
                    </div>
                  )}

                  {drivermodel_year.length > 0 && (
                    <div class="form-group">
                      <label class="driver_imagelabel">Model</label>
                      {drivermodel_year.map((value, index) => (
                        <input
                          type="text"
                          class="form-control mb-2"
                          readOnly
                          value={value}
                          id="driver_name"
                        />
                      ))}
                    </div>
                  )}

                  {plate_no.length > 0 && (
                    <div class="form-group">
                      <label class="driver_imagelabel">Plate No</label>
                      {plate_no.map((value, index) => (
                        <input
                          type="text"
                          class="form-control mb-2"
                          readOnly
                          value={value}
                          id="driver_name"
                        />
                      ))}
                    </div>
                  )}

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="driver_imagelabel">
                          Front Image of License
                        </label>

                        {driverfrontlicense.length > 0 && (
                          <div class="col-sm-12">
                            {driverfrontlicense.map((url, index) => (
                              <a href={url} target="_blank">
                                <img src={url} class="driver_licenceimg"></img>
                              </a>
                            ))}
                          </div>
                        )}
                        {driverfrontlicense == "" && <p>No Image Found</p>}
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="driver_imagelabel">
                          Back Image of License
                        </label>
                        {driverbacklicense.length > 0 && (
                          <div class="col-sm-12">
                            {driverbacklicense.map((url, index) => (
                              <a href={url} target="_blank">
                                <img src={url} class="driver_licenceimg"></img>
                              </a>
                            ))}
                          </div>
                        )}
                        {driverbacklicense == "" && <p>No Image Found</p>}
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="driver_imagelabel">
                          Front Image of Id Card
                        </label>
                        {driveridcardfront.length > 0 && (
                          <div class="col-sm-12">
                            {driveridcardfront.map((url, index) => (
                              <a href={url} target="_blank">
                                <img src={url} class="driver_licenceimg"></img>
                              </a>
                            ))}
                          </div>
                        )}
                        {driveridcardfront == "" && <p>No Image Found</p>}
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="driver_imagelabel">
                          Back Image of Id Card
                        </label>
                        {driveridcardback.length > 0 && (
                          <div class="col-sm-12">
                            {driveridcardback.map((url, index) => (
                              <a href={url} target="_blank">
                                <img src={url} class="driver_licenceimg"></img>
                              </a>
                            ))}
                          </div>
                        )}
                        {driveridcardback == "" && <p>No Image Found</p>}
                      </div>
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

export default Driverdetail;
