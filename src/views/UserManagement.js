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
  Spinner
} from "react-bootstrap";
import $ from "jquery";
import "assets/js/custom.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import { storeurl } from "components/App/storeurl";
function UserManagement(props) {
  const [users, setusers] = useState([]);
  //const [allusers, setallusers] = useState([]);
  //const [userblock, setuserblock] = useState("");
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  function handleClick() {
    history.push("/admin/adduser");
  }

  $(document).on("click", ".edit_newuser", function () {
    var id = $(this).attr("data-id");
    history.push("/admin/edituser/?id=" + id);
  });

  useEffect(() => {
    async function totaluser() {
      //let table5 = $("#newexample5").DataTable();
      try {
        const response = await fetch(`${storeurl}admin_getalluser`, {
          method: "GET",
        });
        const data = await response.json();

        //console.log("apiresponse", data);
        if (data.status == true) {
          setusers(data.data);


        }
      } catch (error) {
        console.log(error);
      }finally {
        setLoading(false); // Set loading to false after fetching data
      }
    }

    totaluser();
    if (users.length > 0) {
      $("#myTable").DataTable();
    }


  }, [users]);
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
            <div class="col-sm-12 promocode_btn">
              <button
                type="button"
                class="btn btn-primary tablelistaddcsv_btn mr-1"
              >
                Export to CSV
              </button>

              <button
                type="button"
                class="btn btn-primary addpromocode_btn"
                onClick={handleClick}
              >
                Add User
              </button>
            </div>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">User Management</Card.Title>
              </Card.Header>
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
                      <th className="border-0">Mobile Number</th>
                      <th className="border-0">Role Name</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody id="displaydata33">
                    {users.map((item, index) => (
                      <tr>
                        <td className="border-0">{index + 1}</td>
                        <td className="border-0">{item.name}</td>
                        <td className="border-0">{item.email}</td>
                        <td className="border-0">{item.phone_no}</td>
                        <td className="border-0">
                          {item.user_status === "0"
                            ? "User"
                            : item.user_status === "1"
                              ? "Admin"
                              : item.user_status === "2"
                                ? "Employee"
                                : "Driver"}
                        </td>

                        <td className="border-0">
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

export default UserManagement;
