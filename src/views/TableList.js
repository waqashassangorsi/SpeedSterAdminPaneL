import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  Modal,
  Spinner,

} from "react-bootstrap";
import { storeurl } from "components/App/storeurl";
import $ from "jquery";
import "assets/js/custom.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
function TableList(props) {

  const history = useHistory();
  // $(document).on("click", ".driver_detail", function () {
  //   var id = $(this).attr("data-id");
    
  // });

  const gonextscreen = (id) => {
    history.push("/admin/driverdetail/?id="+id);
  };

  const [alldrivers, setalldrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function totaluser(event) {
      try {
        const response = await fetch(`${storeurl}admin_showalldriver`, {
          method: "GET",
        });
        const data = await response.json();
        if (data.status == true) {
          setalldrivers(data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    }
    totaluser();

    if (alldrivers.length > 0) {
      let table = $("#myTable").DataTable();
    }
  }, [alldrivers]);
  useEffect(() => {
    const authToken = localStorage.getItem("userid");
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
              <button type="button" class="btn btn-primary tablelistaddcsv_btn">
                Export to CSV
              </button>
            </div>
            <Card className="strpied-tabled-with-hover">
              <Card.Body className="table-full-width table-responsive px-0">
                {loading ? (
                  // Show loader when loading is true
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100vh',
                    }}
                  >
                    <Spinner animation="border"
                      role="status"
                      variant="danger" />
                  </div>
                ) : (
                  <Table className="table-hover table-striped" id="myTable">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Email</th>
                        <th className="border-0">Phone No</th>
                        <th className="border-0">Date of joining</th>
                        <th className="border-0">Action</th>
                      </tr>
                    </thead>
                    <tbody id="displaydata">
                      {alldrivers.map((item, index) => (
                        <tr>
                          <td className="border-0">{index + 1}</td>
                          <td className="border-0">{item.name}</td>
                          <td className="border-0">{item.email}</td>
                          <td className="border-0">{item.phone_no}</td>
                          <td className="border-0">{item.joining_date}</td>
                          <td className="border-0">
                            <i onClick={() => gonextscreen(item.u_id)}
                              class="fa fa-eye driver_detail"
                              data-id={item.u_id}
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
                )}

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
