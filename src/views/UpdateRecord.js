import React, { useEffect,useState } from "react";
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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
function AddPromocode(props) {
  const amount = useSelector((state) => state.amount1);
  const dispatch = useDispatch();
  const [userid, setuserid] = useState();
  const [email, setemail] = useState();
  

  const { loginData } = bindActionCreators(actionCreators, dispatch);
  console.log("loginData", amount.email);
  const handleEmailChange = (event) => {
    const newAmount = { ...amount, email: event.target.value };
    loginData(newAmount);
  };
  useEffect(() => {
    const authToken = localStorage.getItem("userid");
    const email1 = localStorage.getItem("email");
    if (!authToken) {
      props.history.push("/login");
    }
    setuserid(authToken);
    setemail(email1);

  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Update Record</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <form class="addprpromoform">
                  <input type="hidden" value={userid} id="new_userid" />
                  <div class="form-group">
                    <label for="exampleInputEmail1">Enter Email</label>
                    <input
                      type="text"
                      class="form-control"
                      id="new_useremail"
                      value={email}
                      onChange={handleEmailChange}
                      readOnly
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Enter Password</label>
                    <input type="text" class="form-control" id="new_userpass" />
                  </div>
                  <button type="button" class="btn btn-primary update_record">
                    Submit
                  </button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddPromocode;
