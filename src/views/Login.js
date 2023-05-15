import React from "react";
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
} from "react-bootstrap";

function Login() {
  return (
    <>
    
       <Container>
        <Row>
          <Col md="12">
              <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" />
                  </div>
                  <button type="submit" class="btn btn-primary login_submitbtn">Submit</button>
                </form> 
              
           
          </Col>
      
        </Row>
      </Container>
    </>
  );
}

export default Login;
