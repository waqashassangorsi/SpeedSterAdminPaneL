import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
function Role(props) {
  const history = useHistory();
  const [userrole, setuserrole] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleClick() {
    history.push("/admin/addrole");
  }

  $(document).on("click", ".eye_fontnew", function () {
    var id = $(this).attr("data-id");

    history.push({
      pathname: "/admin/editrole/",
      userid: { id: id },
    });
  });

  useEffect(() => {
    async function totaluser() {
      try {
        const response = await fetch(`${storeurl}admin_getallrole`, {
          method: "GET",
        });
        const data = await response.json();
        if (data.status == true) {
          setuserrole(data.data);
        }
      } catch (error) {
        console.log(error);
      }finally {
        setLoading(false); // Set loading to false after fetching data
      }
    }
    totaluser();

    if (userrole.length > 0) {
      $("#newexample4").DataTable();
    }
  }, [userrole]);
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
                class="btn btn-primary promocodeaddcsv_btn mr-1"
              >
                Export to CSV
              </button>
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
                <Table className="table-hover table-striped" id="newexample4">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Role Name</th>
                    </tr>
                  </thead>
                  <tbody id="displaydata3">
                    {userrole.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
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

export default Role;
