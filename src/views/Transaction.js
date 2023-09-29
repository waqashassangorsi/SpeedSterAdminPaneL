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
function Transaction() {
  const [claimrecord, setclaimrecord] = useState([]);
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
        const response = await fetch(
          "http://speedster.book2say.com/Authentication/adminclaim",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (data.status == true) {
          var userdetail = data.data;
          setclaimrecord(userdetail);
          // var content_html = "";
          // var j = 1;
          // for (var i = 0; i < userdetail.length; i++) {
          // 	var detail_new = "";

          // 	detail_new +=
          // 		'<span class="tick_span"><i class="fa fa-check mynewtick23" data-id=' +
          // 		userdetail[i].claim_id +
          // 		' aria-hidden="true"></i></span>';
          // 	//content_html+='<tr><td>'+j+'</td><td>'+userdetail[i].name+'</td><td>'+userdetail[i].email+'</td><td>'+status+'</td><td>'+userdetail[i].joining_date+'</td></tr>';
          // 	table5.row.add([
          // 		j,
          // 		userdetail[i].name,
          // 		userdetail[i].email,
          // 		userdetail[i].price,
          // 		userdetail[i].status,
          // 		detail_new,
          // 	]);
          // 	j++;
          // }
          // $("#displaydata2").prepend(content_html);
        }
      } catch (error) {
        console.log(error);
      }
      //table5.draw();
    }

    // $(document).ready(function () {
    // 	totaluser();
    // 	$("#newexample5").DataTable();
    // });
    totaluser();
    if (claimrecord.length > 0) {
      let table3 = $("#newexample5").DataTable();
      //table3.draw();
    }
  }, [claimrecord]);

  //console.log("users", userblock);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
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
                <Table className="table-hover table-striped" id="newexample5">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Amount</th>
                      <th className="border-0">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                      <td>1</td>
                      <td>20</td>
                      <td>20-07-2023</td>
                    </tr> */}
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