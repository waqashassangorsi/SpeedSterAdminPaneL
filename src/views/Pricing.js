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
  Row,
  Col,
  Table,
} from "react-bootstrap";
import $ from "jquery";
import "assets/js/custom.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
function Pricing() {
  const history = useHistory();
  $(document).on("click", ".editeye_pencile", function () {
    var id = $(this).attr("data-id");
    //alert(id);
    //history.push("/admin/editrole/" + id);
    history.push({
      pathname: "/admin/editprice/",
      // search: '?the=search',
      packageid: { id: id },
    });
  });
  //let table9 = $("#newexample9").DataTable();
  const [showpricing, setshowpricing] = useState([]);
  useEffect(() => {
    async function totaluser() {
      try {
        const response = await fetch(
          "http://speedster.book2say.com/Authentication/admin_showpackages",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (data.status == true) {
          setshowpricing(data.data);
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
    if (showpricing.length > 0) {
      let table4 = $("#newexample9").DataTable();
      //table4.draw();
    }
  }, [showpricing]);

  //   $(document).ready(function () {
  //     $("#newexample9").DataTable();
  //   });

  const edit_pencil = {
    marginLeft: "10px",
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <div class="col-sm-12 csv_btn">
              <button type="button" class="btn btn-primary settingaddcsv_btn">
                Export to CSV
              </button>
            </div>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Package Pricing</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" id="newexample9">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Item Name</th>
                      <th className="border-0">Price</th>
                      <th className="border-0">Weight</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody id="displaydata3">
                    {showpricing.map((element, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{element.name}</td>
                        <td>$ {element.amount_till}</td>
                        <td>{element.weight}</td>
                        <td>
                          {/* <span class="eye_font">
                            <i class="fa fa-eye eye_fontawesome"></i>
                          </span> */}

                          <span class="eye_font" style={edit_pencil}>
                            <i
                              class="fa fa-pencil pencile_fontawesome editeye_pencile"
                              aria-hidden="true"
                              data-id={element.package_id}
                            ></i>
                          </span>

                          {/* <span class="tick_span">
                          <i
                            class="fa fa-check mynewtick"
                            aria-hidden="true"
                          ></i>
                        </span> */}
                        </td>
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

export default Pricing;
