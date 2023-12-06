import React, { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { storeurl } from "components/App/storeurl";

function Deliveryrequestdetail(props) {
  const history = useHistory();
  const { state } = history.location;
  console.log("state", state);
  const [apidata, setapidata] = useState([]);

  // Check if state exists before accessing its properties

  async function callapi(id) {
    try {
      const formData = new FormData();
      formData.append("trip_id", id);
      const response = await fetch(`${storeurl}admin_get_trip_details`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("apidata==>",data)

      if (data.status == true) {
        setapidata(data.data);
      }
      console.log("logindata123", data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    const params = window.location.search.substring(1);
    var pair = params.split("=");
    var id = pair[1];
  
    console.log("ourfirstid", id);


    const authToken = localStorage.getItem("userid");
    if(id==undefined){

    }else{
      if (!authToken) {
        props.history.push("/login");
      }
  
      callapi(id);
    }

  }, []);

  console.log("apidata==>",apidata)
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card className="strpied-tabled-with-hover">
            <Card.Body className="table-full-width table-responsive px-0">
              <Row>
                <Col md="6" className="p-4">
                  <div className="mb-3">
                    <h6>CUSTOMER DETAILS</h6>
                  </div>

                  <p>Name : {apidata?.customer?.name}</p>
                  <p>Mobile : {apidata?.customer?.phone_no}</p>
                </Col>

                <Col md="6" className="p-4">
                  <div className="mb-3">
                    <h6>DRIVER DETAILS</h6>
                  </div>

                

                    <>
                      <p>Name : {apidata?.driver?.name}</p>
                      <p>Email : {apidata?.driver?.email}</p>
                      <p>Mobile : {apidata?.driver?.phone_no}</p>
                    </>
                </Col>

                <Col md="12" className="p-4">
                  <div className="mb-3">
                    <h6>DELIVERY INFORMATION</h6>
                  </div>

                  <table className="table table-borderless">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td>Tracking No :</td>
                        <td>{apidata?.tracking_no}</td>
                      </tr>

                      <tr>
                        <td>Delivery Status :</td>
                        <td>{apidata?.status}</td>
                      </tr>

                      <tr>
                        <td>Pickup Location :</td>
                        <td>{apidata?.pickup_location} </td>
                      </tr>

                      {/* <tr>
                        <td>Delivery Location :</td>
                        <td>{apidata?.tracking_no}</td>
                      </tr> */}

                      <tr>
                        <td>Pickup Date & Time :</td>
                        <td>{apidata?.delivery_Date}</td>
                      </tr>

                      <tr>
                        <td>Estimated Value Of Package :</td>
                        <td>${apidata?.price}</td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Deliveryrequestdetail;
