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
} from "react-bootstrap";
import { storeurl } from "components/App/storeurl";
import $ from "jquery";
function Adduser() {
  const [useroles, setuseroles] = useState([]);
  useEffect(() => {
    async function totaluser() {
      try {
        const response = await fetch(`${storeurl}admin_getallrole`, {
          method: "GET",
        });
        const data = await response.json();
        if (data.status == true) {
          setuseroles(data.data);
          // settotaldrivers(data.total_driver);
          // settotalusers(data.total_user);
          // settotalrides(data.total_rides);
        }
      } catch (error) {
        console.log(error);
      }
    }
    totaluser();
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Add User</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <form class="add_useform">
                  <div class="row">
                    <div class="col">
                      <label>Select Role</label>
                      <select class="form-control select_role">
                        {useroles &&
                          useroles.map((useroles, index) => (
                            <option key={index} value={useroles.Id}>
                              {useroles.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div class="col">
                      <label>Name</label>
                      <input
                        type="text"
                        class="form-control first_name"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div class="row mobielno_col">
                    <div class="col">
                      <label>Password</label>
                      <input
                        type="password"
                        class="form-control password"
                        placeholder="Password"
                      />
                    </div>
                    <div class="col">
                      <label></label>
                      <input
                        type="text"
                        class="form-control mobile_no"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div class="col">
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control email"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div class="row mt-5">
                    <div class="col-sm-12 add_userbtn">
                      <button class="btn btn-primary adduser_cancel">
                        Cancel
                      </button>
                      <button
                        type="button"
                        class="btn btn-success"
                        id="submit_form"
                      >
                        Submit
                      </button>
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

export default Adduser;
