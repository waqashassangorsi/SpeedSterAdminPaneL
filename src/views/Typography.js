import React, { useEffect, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
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
import $ from "jquery";
import "assets/js/custom.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { storeurl } from "components/App/storeurl";

function Typography(props) {

  const [endusers, setendusers] = useState([]);
  const history = useHistory();

  $(document).on("click", ".newdetail", function () {
    var customername = $(this).attr("data-customername");
    var dp = $(this).attr("data-dp");
    var email = $(this).attr("data-email");
    var phoneno = $(this).attr("data-phoneno");

    history.push({
      pathname: "/admin/typographydetail",
      customername: { name: customername },
      dp: { user_dp: dp },
      email: { user_email: email },
      phoneno: { user_phoneno: phoneno },
    });
  });

  useEffect(() => {
    async function totaluser() {
      try {
        const response = await fetch(`${storeurl}admin_showalluser`, {
          method: "GET",
        });
        const data = await response.json();
        if (data.status == true) {
          console.log("endusers===>",data)

          setendusers(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    totaluser();
    if (endusers.length > 0) {
      let table2 = $("#myTable").DataTable();
    }
  }, [endusers]);

  console.log("endusers===>",endusers)



  useEffect(() => {
    const authToken = localStorage.getItem("userid");
    props.history.push("/admin/typography");
    if (!authToken) {
      props.history.push("/login");
    }
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <div class="col-sm-12 csv_btn">
              <button type="button" class="btn btn-primary addcsv_btn">
                Export to CSV
              </button>
            </div>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All EndUser</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" id="myTable">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Mobile Number</th>
                      <th className="border-0">Date of joining</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody id="displaydata2">
                    {endusers.map((item, index) => (
                      <tr>
                        <td className="border-0">{index + 1}</td>
                        <td className="border-0">{item.name}</td>
                        <td className="border-0">{item.email}</td>
                        <td className="border-0">{item.phone_no}</td>
                        <td className="border-0">{item.joining_date}</td>
                        <td className="border-0">
                          <i
                            class="fa fa-eye eye_fontawesome eye_fontnew newdetail tick_icon"
                            data-customername={item.name}
                            data-dp={item.dp}
                            data-email={item.email}
                            data-phoneno={item.phone_no}
                          ></i>

                          {item.user_privilidge === "0" ? (
                            <span class="tick_span">
                              <i
                                class="fa fa-check mynewtick"
                                data-id={item.u_id}
                              ></i>
                            </span>
                          ) : (
                            <span class="tick_span_red">
                              <i
                                class="fa fa-check mynewtick"
                                data-id={item.u_id}
                              ></i>
                            </span>
                          )}
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

export default Typography;
