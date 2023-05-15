import React, { useState } from "react";
import ChartistGraph from "react-chartist";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { useSelector } from "react-redux";
import App from "../components/App/App";
// react-bootstrap components
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
	Form,
	OverlayTrigger,
	Tooltip,
} from "react-bootstrap";
import $ from "jquery";

// const initialState = {
//   count: 0
// };

const store = createStore(() => ({
	birds: [
		{
			name: "robin1",
			views: 1,
		},
	],
}));

function Dashboard(props) {
	const [totaldrivers, settotaldrivers] = useState("");
	const [totaluser, settotalusers] = useState("");
	const [totalrides, settotalrides] = useState("");

	console.log("getlocalstorage", localStorage.getItem("userid"));
	//console.log('store',store);
	async function totalrecord(event) {
		try {
			const response = await fetch(
				"http://speedster.book2say.com/Authentication/admin_totaldriver",
				{
					method: "GET",
				}
			);
			const data = await response.json();
			if (data.status == true) {
				settotaldrivers(data.total_driver);
				settotalusers(data.total_user);
				settotalrides(data.total_rides);
			}
		} catch (error) {
			console.log(error);
		}
	}
	totalrecord();
	$(document).on("click", "#logout", function () {
		localStorage.clear();
		props.history.push("/login/login");
	});

	// console.log('birds',birds);
	//const birds = useSelector(state => state.birds);
	return (
		<>
			<Container fluid>
				{/* <Provider store={store}>
              <App />
          </Provider> */}
				<Row>
					<Col lg="3" sm="6">
						<Card className="card-stats">
							<Card.Body>
								<Row>
									<Col xs="5">
										<div className="icon-big text-center icon-warning">
											<i className="nc-icon nc-chart text-warning"></i>
										</div>
									</Col>
									{/* <ul>
                        {birds.map(bird => (
                          <li key={bird.name}>
                            <h3>{bird.name}</h3>
                            <div>
                              Views: {bird.views}
                            </div>
                          </li>
                        ))}
                      </ul> */}

									<Col xs="7">
										<div className="numbers">
											<p className="card-category">Total Drivers</p>
											<Card.Title as="h4" id="totaldriver">
												{totaldrivers}
											</Card.Title>
										</div>
									</Col>
								</Row>
							</Card.Body>
							<Card.Footer>
								{/* <hr></hr> */}
								{/* <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div> */}
							</Card.Footer>
						</Card>
					</Col>
					<Col lg="3" sm="6">
						<Card className="card-stats">
							<Card.Body>
								<Row>
									<Col xs="5">
										<div className="icon-big text-center icon-warning">
											<i className="nc-icon nc-light-3 text-success"></i>
										</div>
									</Col>
									<Col xs="7">
										<div className="numbers">
											<p className="card-category">Total Users</p>
											<Card.Title as="h4" id="totaluser">
												{totaluser}
											</Card.Title>
										</div>
									</Col>
								</Row>
							</Card.Body>
							<Card.Footer>
								{/* <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div> */}
							</Card.Footer>
						</Card>
					</Col>
					<Col lg="3" sm="6">
						<Card className="card-stats">
							<Card.Body>
								<Row>
									<Col xs="5">
										<div className="icon-big text-center icon-warning">
											<i className="nc-icon nc-vector text-danger"></i>
										</div>
									</Col>
									<Col xs="7">
										<div className="numbers">
											<p className="card-category">Rides</p>
											<Card.Title as="h4" id="totalrides">
												{totalrides}
											</Card.Title>
										</div>
									</Col>
								</Row>
							</Card.Body>
							<Card.Footer>
								{/* <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div> */}
							</Card.Footer>
						</Card>
					</Col>
					{/* <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Followers</p>
                      <Card.Title as="h4">+45K</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col> */}
				</Row>
			</Container>
		</>
	);
}

export default Dashboard;
