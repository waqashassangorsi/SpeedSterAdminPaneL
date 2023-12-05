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
function Pricing(props) {
  const history = useHistory();
  $(document).on("click", ".editeye_pencile", function () {
    var id = $(this).attr("data-id");

    history.push({
      pathname: "/admin/editprice/",
      packageid: { id: id },
    });
  });
  const [showpricing, setshowpricing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function totaluser() {
      try {
        const response = await fetch(`${storeurl}admin_showpackages`, {
          method: "GET",
        });
        const data = await response.json();
        if (data.status == true) {
          setshowpricing(data.data);
        }
      } catch (error) {
        console.log(error);
      }finally {
        setLoading(false); // Set loading to false after fetching data
      }
    }
    totaluser();
    if (showpricing.length > 0) {
      let table4 = $("#newexample9").DataTable();
    }
  }, [showpricing]);

  const edit_pencil = {
    marginLeft: "10px",
  };
  useEffect(() => {
    const authToken = localStorage.getItem("userid");
    props.history.push("/admin/pricing");
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
              <button type="button" class="btn btn-primary settingaddcsv_btn">
                Export to CSV
              </button>
            </div>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Package Pricing</Card.Title>
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
                          <span class="eye_font" style={edit_pencil}>
                            <i
                              class="fa fa-pencil pencile_fontawesome editeye_pencile"
                              aria-hidden="true"
                              data-id={element.package_id}
                            ></i>
                          </span>
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

export default Pricing;
