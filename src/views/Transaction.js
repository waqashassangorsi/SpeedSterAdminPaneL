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
import $ from "jquery";
import "assets/js/custom.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import { storeurl } from "components/App/storeurl";
function Transaction(props) {
  const [transactionrecord, settransactionrecord] = useState([]);
  const history = useHistory();
  function handleClick() {
    history.push("/admin/claimdetail");
  }

  $(document).on("click", ".mynewtick23", function () {
    //  var id=$(this).attr('data-id');

    var customername = $(this).attr("data-customername");
    var drivername = $(this).attr("data-drivername");
    var customerphone = $(this).attr("data-customerphone");
    var driverphone = $(this).attr("data-driverphone");
    var tripcost = $(this).attr("data-price");
    var claimfrom = $(this).attr("data-claimfrom");
    var claimto = $(this).attr("data-claimto");
    var dataimages = $(this).attr("data-images");
    var dataid = $(this).attr("data-id");
    var datastatus = $(this).attr("data-status");
    var datasubject = $(this).attr("data-subject");
    var datamessage = $(this).attr("data-message");

    history.push({
      pathname: "/admin/claimdetail",
      customername: { customer_name: customername },
      drivername: { driver_name: drivername },
      customerphone: { customer_phone: customerphone },
      driverphone: { driver_phone: driverphone },
      tripcost: { trip_cost: tripcost },
      claimfrom: { claim_from: claimfrom },
      claimto: { claim_to: claimto },
      dataimages: { data_images: dataimages },
      dataid: { data_id: dataid },
      datastatus: { data_status: datastatus },
      datasubject: { data_subject: datasubject },
      datamessage: { data_message: datamessage },
    });
  });

  useEffect(() => {
    async function totaluser() {
      //let table5 = $("#newexample5").DataTable();
      try {
        const response = await fetch(`${storeurl}showtransaction`, {
          method: "GET",
        });
        const data = await response.json();
        if (data.status == true) {
          var userdetail = data.data;
          settransactionrecord(userdetail);
        }
      } catch (error) {
        console.log(error);
      }
    }

    totaluser();
    if (transactionrecord.length > 0) {
      let table3 = $("#newexample4").DataTable();
    }
  }, [transactionrecord]);
  useEffect(() => {
    const authToken = localStorage.getItem("userid");
    props.history.push("/admin/transaction");
    if (!authToken) {
      props.history.push("/login");
    }
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <div class="col-sm-12 promocode_btn">
              <button type="button" class="btn btn-primary promocodeaddcsv_btn">
                Export to CSV
              </button>
            </div>
            {/* <div class="col-sm-12 promocode_btn">
							<button type="button" class="btn btn-primary addpromocode_btn">
								Add User
							</button>
						</div> */}
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Transaction</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" id="newexample4">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Camount</th>
                      <th className="border-0">Damount</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactionrecord.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>${item.camount}</td>
                        <td>${item.damount}</td>
                        <td>{item.transaction_status}</td>
                        <td>{item.transaction_date}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Transaction;
