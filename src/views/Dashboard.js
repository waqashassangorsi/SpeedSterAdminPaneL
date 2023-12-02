import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { storeurl } from "components/App/storeurl";
import App from "../components/App/App";
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import $ from "jquery";
const store = createStore(() => ({
  birds: [
    {
      name: "robin1",
      views: 1,
    },
  ],
}));

function Dashboard(props) {
  const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney, multiplyMoney, loginData } =
    bindActionCreators(actionCreators, dispatch);
  const [totaldrivers, settotaldrivers] = useState("");
  const [totaluser, settotalusers] = useState("");
  const [totalrides, settotalrides] = useState("");
  useEffect(() => {
    const authToken = localStorage.getItem("userid");
    props.history.push("/admin/Dashboard");
    if (!authToken) {
      props.history.push("/login");
    }
  }, []);
  async function totalrecord(event) {
    try {
      const response = await fetch(`${storeurl}admin_totaldriver`, {
        method: "GET",
      });
      const data = await response.json();
      console.log("checkdata", data);
      if (data.status == true) {
        settotaldrivers(data.total_driver);
        settotalusers(data.total_user);
        settotalrides(data.total_rides);
      }
    } catch (error) {
      console.log(error);
    }
  }
  totalrecord();
  $(document).on("click", "#logout", function () {
    localStorage.clear();
    props.history.push("/login/login");
  });

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>

                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Drivers</p>
                      <Card.Title as="h4" id="totaldriver">
                        {totaldrivers}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Users</p>
                      <Card.Title as="h4" id="totaluser">
                        {totaluser}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Rides</p>
                      <Card.Title as="h4" id="totalrides">
                        {totalrides}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
