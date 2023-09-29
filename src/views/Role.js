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
function Role() {
  const history = useHistory();
  const [userrole, setuserrole] = useState([]);
  function handleClick() {
    history.push("/admin/addrole");
  }

  $(document).on("click", ".eye_fontnew", function () {
    var id = $(this).attr("data-id");
    //alert(id);
    //history.push("/admin/editrole/" + id);
    history.push({
      pathname: "/admin/editrole/",
      // search: '?the=search',
      userid: { id: id },
    });
  });

  useEffect(() => {
    async function totaluser() {
      //let table10 = $("#newexample8").DataTable();
      try {
        const response = await fetch(
          "http://speedster.book2say.com/Authentication/admin_getallrole",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (data.status == true) {
          setuserrole(data.data);
          //var userdetail = data.data;
          //var j = 1;
          //for (var i = 0; i < userdetail.length; i++) {
          //	var detail_new =
          //		'<i class="fa fa-pencil eye_fontawesome eye_fontnew tick_icon" data-id="' +
          //		userdetail[i].Id +
          //		'"></i>';
          //	detail_new +=
          //		'<i class="fa fa-eye eye_fontawesome eye_fontnew"></i>';
          //	table10.row.add([j, userdetail[i].name, detail_new]);
          //	j++;
          //}
          //$('#displaydata2').prepend(content_html);
        }
      } catch (error) {
        console.log(error);
      }
      //table10.draw();
    }
    totaluser();
    //$("#newexample8").DataTable();
    // $(document).ready(function () {
    // 	totaluser();
    // 	$("#newexample8").DataTable();
    // });

    if (userrole.length > 0) {
      $("#newexample8").DataTable();
    }
  }, [userrole]);

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
                Add Role
              </button>
            </div>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Role</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" id="newexample8">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Role Name</th>
                      {/* <th className="border-0">Action</th> */}
                    </tr>
                  </thead>
                  <tbody id="displaydata3">
                    {userrole.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        {/* <td>
                          <i
                            class="fa fa-pencil eye_fontawesome eye_fontnew tick_icon"
                            data-id={item.Id}
                          ></i>
                        </td> */}
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

export default Role;
