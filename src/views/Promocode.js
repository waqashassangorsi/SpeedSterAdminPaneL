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
import { storeurl } from "components/App/storeurl";
function Promocode() {
  const history = useHistory();
  function handleClick() {
    history.push("/admin/addpromocode");
  }
  const [showpromocode, setshowpromocode] = useState([]);
  useEffect(() => {
    async function totaluser() {
      try {
        const response = await fetch(`${storeurl}admin_showpromocode`, {
          method: "GET",
        });
        const data = await response.json();
        if (data.status == true) {
          setshowpromocode(data.data);
          //var userdetail = data.data;
          //var j = 1;
          //for (var i = 0; i < userdetail.length; i++) {
          //table10.row.add([j, userdetail[i].name, detail_new]);
          //	table4.row.add([j, userdetail[i].banner]);
          //	j++;
          //}
          //$('#displaydata2').prepend(content_html);
        }
      } catch (error) {
        console.log(error);
      }
    }
    totaluser();
    if (showpromocode.length > 0) {
      let table4 = $("#newexample4").DataTable();
      //table4.draw();
    }
    //let table4 = $("#newexample4").DataTable();
    //table4.draw();
    // $(document).ready(function () {
    // 	totaluser();
    // 	$("#newexample4").DataTable();
    // });
    // $(document).ready(function () {
    // 	totaluser();
    // 	$("#myTable").DataTable();
    // });
  }, [showpromocode]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <div class="col-sm-12 promocode_btn">
              <button type="button" class="btn btn-primary promocodeaddcsv_btn">
                Export to CSV
              </button>
              <button
                type="button"
                class="btn btn-primary addpromocode_btn"
                onClick={handleClick}
              >
                Add Promocode
              </button>
            </div>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All Promocodes</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" id="newexample4">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Promocode</th>
                      <th className="border-0">Total Promocode</th>
                      <th className="border-0">Discount</th>
                    </tr>
                  </thead>
                  <tbody id="displaydata3">
                    {showpromocode.map((term, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{term.promocode}</td>
                        <td>{term.total_promocode}</td>
                        <td>{term.discount}</td>
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

export default Promocode;
