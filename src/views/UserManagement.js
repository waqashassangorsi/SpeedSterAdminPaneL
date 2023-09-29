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
function UserManagement() {
  const [users, setusers] = useState([]);
  //const [allusers, setallusers] = useState([]);
  //const [userblock, setuserblock] = useState("");

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
        const response = await fetch(
          "http://speedster.book2say.com/Authentication/admin_getalluser",
          {
            method: "GET",
          }
        );
        const data = await response.json();

        //console.log("apiresponse", data);
        if (data.status == true) {
          setusers(data.data);

          // var userdetail = data.data;
          // var j = 1;
          // for (var i = 0; i < userdetail.length; i++) {
          // 	if (userdetail[j].user_status == 0) {
          // 		var userstatus = "User";
          // 	} else if (userdetail[j].user_status == 1) {
          // 		var userstatus = "Admin";
          // 	} else if (userdetail[j].user_status == 2) {
          // 		var userstatus = "Employee";
          // 	} else if (userdetail[j].user_status == 3) {
          // 		var userstatus = "Driver";
          // 	}
          // 	var action =
          // 		'<span class="eye_font"><i class="fa fa-pencil pencile_fontawesome edit_newuser" data-id=' +
          // 		userdetail[j].u_id +
          // 		' aria-hidden="true"></i></span>';
          // 	if (userdetail[j].user_privilidge == 1) {
          // 		action +=
          // 			'<span class="tick_span_red"><i class="fa fa-check mynewtick" data-id=' +
          // 			userdetail[j].u_id +
          // 			' aria-hidden="true"></i></span>';
          // 	} else if (userdetail[j].user_privilidge == 0) {
          // 		action +=
          // 			'<span class="tick_span"><i class="fa fa-check mynewtick" data-id=' +
          // 			userdetail[j].u_id +
          // 			' aria-hidden="true"></i></span>';
          // 	}
          // 	//content_html+='<tr><td>'+j+'</td><td>'+userdetail[i].name+'</td><td>'+userdetail[i].email+'</td><td>'+status+'</td><td>'+userdetail[i].joining_date+'</td></tr>';
          // 	table5.row.add([
          // 		j,
          // 		userdetail[j].name,
          // 		userdetail[j].email,
          // 		userdetail[j].phone_no,
          // 		userstatus,
          // 		action,
          // 	]);
          // 	// table2.row.add([j,userdetail[i].name,userdetail[i].email,status,userdetail[i].joining_date]);
          // 	j++;
          // }
          //$('#displaydata2').prepend(content_html);
        }
      } catch (error) {
        console.log(error);
      }
      //table5.draw();
    }

    totaluser();
    if (users.length > 0) {
      $("#newexample5").DataTable();
    }

    // $(document).ready(function () {
    // 	totaluser();
    // 	$("#newexample5").DataTable();
    // });
  }, [users]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <div class="col-sm-12 promocode_btn">
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
                <Table className="table-hover table-striped" id="newexample5">
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserManagement;
