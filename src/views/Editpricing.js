import React, { useEffect, useState, useRef } from "react";
//import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
// react-bootstrap components
import { storeurl } from "components/App/storeurl";
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
import "assets/js/custom.js";
import $ from "jquery";
function Editpricing() {
  const [packageprice, setpackageprice] = useState("");
  const history = useHistory();
  const mypackageid = history.location.packageid.id;
  const [packageid, setpackageid] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Declare the id variable here
    const id = mypackageid;

    $.ajax({
      url: `${storeurl}admin_singleshowpackages`,
      type: "POST",
      data: { mypackageid: id },
      dataType: "json",
      success: function (html) {
        if (html.status === true) {
          setpackageprice(html.data.amount_till);
          setpackageid(id);
        }
      },
      complete: function () {
        setLoading(false);
      },
    });
  }, [mypackageid]); // Make sure to include mypackageid in the dependency array

  function editprice(event) {
    setpackageprice(event.target.value);
  }



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
                {loading && (
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
                )}
                {!loading && (

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


                  </form>
                )}

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Editpricing;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Badge,
//   Button,
//   Card,
//   Navbar,
//   Nav,
//   Container,
//   Row,
//   Col,
// } from "react-bootstrap";
// import $ from "jquery";
// import { storeurl } from "components/App/storeurl";

// function Editpricing() {
//   const [packageprice, setpackageprice] = useState("");
//   const [packageid, setpackageid] = useState("");
//   const [loading, setLoading] = useState(true);

//   const { id } = useParams();
//   useEffect(() => {
//     $.ajax({
//       url: `${storeurl}admin_singleshowpackages`,
//       type: "POST",
//       data: { mypackageid: id },
//       dataType: "json",
//       success: function (html) {
//         console.log("checkdata",html)
//         if (html.status === true) {
//           setpackageprice(html.data.amount_till);
//           setpackageid(id);
//         }
//       },
//       complete: function () {
//         setLoading(false);
//       },
//     });
//   }, [id]);
  

//   function editprice(event) {
//     setpackageprice(event.target.value);
//   }

//   return (
//     <>
//       <Container fluid>
//         <Row>
//           <Col md="12">
//             <Card className="strpied-tabled-with-hover">
//               <Card.Header>
//                 <Card.Title as="h4">Package Pricing</Card.Title>
//               </Card.Header>
//               <Card.Body className="table-full-width table-responsive px-0">
//                 {loading && (
//                   <div className="text-center">
//                     <i className="fa fa-spinner fa-spin"></i>
//                   </div>
//                 )}

//                 {!loading && (
//                   <form className="add_useform">
//                     <div className="form-group">
//                       <label>Price</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Price"
//                         value={packageprice}
//                         onChange={editprice}
//                         id="packageprice"
//                       />
//                     </div>

//                     <button
//                       type="button"
//                       className="btn btn-primary edit_price"
//                       data-id={packageid}
//                     >
//                       Submit
//                     </button>
//                   </form>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Editpricing;
