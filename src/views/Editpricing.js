import React, { useEffect, useState, useRef } from "react";
//import { useParams } from "react-router-dom";
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
import "assets/js/custom.js";
import $ from "jquery";
function Editpricing() {
  //const [userprivilage, setuserprivilage] = useState([]);
  const [packageprice, setpackageprice] = useState("");
  //const { id } = useParams();
  const history = useHistory();
  const mypackageid = history.location.packageid.id;
  const [packageid, setpackageid] = useState("");
  //console.log(userid);
  useEffect(() => {
    $.ajax({
      url: "http://speedster.book2say.com/Authentication/admin_singleshowpackages",
      type: "POST",
      data: { mypackageid: mypackageid },
      dataType: "json",
      success: function (html) {
        if (html.status == true) {
          setpackageprice(html.data.amount_till);
          setpackageid(mypackageid);
          // setusername(html.data.name);
          // setuseremail(html.data.email);
          // setusermobileno(html.data.phone_no);
          // setuserrole(html.data.user_status);
          // setuserid(html.data.u_id);
        }
        // else {
        // 	alert("Record not exists");
        // }
      },
    });
    // async function totaluser() {
    // 	//let table10 = $("#newexample8").DataTable();
    // 	try {
    // 		const response = await fetch(
    // 			"http://speedster.book2say.com/Authentication/admin_getsingleroleprivilages",
    // 			{
    // 				method: "POST",
    // 				body: JSON.stringify({ roleid: userid }),
    // 				headers: {
    // 					"Content-Type": "application/json",
    // 				},
    // 			}
    // 		);
    // 		const data = await response.json();
    // 		if (data.status == true) {
    // 			var userdetail = data.data;

    // 			var j = 1;
    // 			for (var i = 0; i < userdetail.length; i++) {
    // 				//var detail_new ='<i class="fa fa-pencil eye_fontawesome eye_fontnew tick_icon"></i>';
    // 				//	detail_new +='<i class="fa fa-eye eye_fontawesome eye_fontnew"></i>';
    // 				//table10.row.add([j, userdetail[i].name, detail_new]);
    // 				j++;
    // 			}
    // 			//$('#displaydata2').prepend(content_html);
    // 		}
    // 	} catch (error) {
    // 		console.log(error);
    // 	}
    // 	//table10.draw();
    // }

    // $(document).ready(function () {
    // 	// $.ajax({
    // 	// 	url: "http://speedster.book2say.com/Authentication/admin_getsingleroleprivilages",
    // 	// 	type: "POST",
    // 	// 	data: { id: id },
    // 	// 	dataType: "json",
    // 	// 	success: function (html) {
    // 	// 		if (html.status == true) {
    // 	// 			alert(html.message);
    // 	// 		} else {
    // 	// 			alert("Status not Changed");
    // 	// 		}
    // 	// 	},
    // 	// });

    // 	totaluser();
    // 	//$("#newexample8").DataTable();
    // });
  }, []);

  function editprice(event) {
    setpackageprice(event.target.value);
  }
  //   console.log("userprivilage", userprivilage);
  //   const [showdashboardchild, setshowdashboardchild] = useState(false);
  //   const [showdashboardchildtwo, setshowdashboardchildtwo] = useState(false);
  //   const [showdashboardchildthree, setshowdashboardchildthree] = useState(false);
  //   const [showdashboardchildfour, setshowdashboardchildfour] = useState(false);
  //   const [showdashboardchildfive, setshowdashboardchildfive] = useState(false);
  //   const [showdashboardchildsix, setshowdashboardchildsix] = useState(false);
  //   const [showdashboardchildseven, setshowdashboardchildseven] = useState(false);
  //   const [showdashboardchildeight, setshowdashboardchildeight] = useState(false);

  //   const handleClick = () => {
  //     setshowdashboardchild(!showdashboardchild);
  //   };

  //   const handleClicktwo = () => {
  //     setshowdashboardchildtwo(!showdashboardchildtwo);
  //   };
  //   const handleClickthree = () => {
  //     setshowdashboardchildthree(!showdashboardchildthree);
  //   };
  //   const handleClickfour = () => {
  //     setshowdashboardchildfour(!showdashboardchildfour);
  //   };
  //   const handleClickfive = () => {
  //     setshowdashboardchildfive(!showdashboardchildfive);
  //   };
  //   const handleClicksix = () => {
  //     setshowdashboardchildsix(!showdashboardchildsix);
  //   };

  //   const handleClickseven = () => {
  //     setshowdashboardchildseven(!showdashboardchildseven);
  //   };
  //   const handleClickeight = () => {
  //     setshowdashboardchildeight(!showdashboardchildeight);
  //   };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Package Pricing</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <form class="add_useform">
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Price"
                      value={packageprice}
                      onChange={editprice}
                      id="packageprice"
                    />
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary edit_price"
                    data-id={packageid}
                  >
                    Submit
                  </button>

                  {/* <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">Name</th>
                        <th className="border-0">Select Access</th>
                      </tr>
                    </thead>
                    <tbody id="displaydata3">
                      {userprivilage &&
                        userprivilage.map((userprivilage, index) => (
                          <tr key={index}>
                            <td class="dashboard_td table_hover">
                              <div onClick={handleClick}>
                                <span>
                                  <i
                                    id="arrow_dashboard"
                                    class="fa fa-arrow-circle-right right_arrow"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    id="arrow_dashboard"
                                    class="fa fa-arrow-circle-down down_arrow"
                                    aria-hidden="true"
                                  ></i>
                                </span>{" "}
                                <span>{userprivilage.privilages}</span>
                              </div>
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                id="dashboard"
                                checked
                              ></input>
                            </td>
                          </tr>
                        ))}

                     
                    </tbody>
                  </Table> */}
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Editpricing;
