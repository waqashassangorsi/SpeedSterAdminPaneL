import React, { useEffect, useState, useRef } from "react";

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
function Edituser() {
	const [username, setusername] = useState("");
	const [useremail, setuseremail] = useState("");
	const [usermobileno, setusermobileno] = useState("");
	const [userrole, setuserrole] = useState("");
	const [userid, setuserid] = useState("");
	//const [userrole, setuserrole] = useState("");
	const [userpass, setuserpass] = useState("");
	const params = window.location.search.substring(1);
	var pair = params.split("=");
	var id = pair[1];
	const [useroles, setuseroles] = useState([]);
	useEffect(() => {
		async function totaluser() {
			try {
				const response = await fetch(
					"http://speedster.book2say.com/Authentication/admin_getallrole",
					{
						method: "GET",
					}
				);
				const data = await response.json();
				if (data.status == true) {
					setuseroles(data.data);
					// settotaldrivers(data.total_driver);
					// settotalusers(data.total_user);
					// settotalrides(data.total_rides);
				}
			} catch (error) {
				console.log(error);
			}
		}
		totaluser();

		$.ajax({
			url: "http://speedster.book2say.com/Authentication/admin_getuserdetail",
			type: "POST",
			data: { id: id },
			dataType: "json",
			success: function (html) {
				if (html.status == true) {
					setusername(html.data.name);
					setuseremail(html.data.email);
					setusermobileno(html.data.phone_no);
					setuserrole(html.data.user_role);
					setuserid(html.data.u_id);
				} else {
					alert("Record not exists");
				}
			},
		});
	}, []);
	function handleChange(event) {
		setusername(event.target.value);
	}

	function changepassword(event) {
		setuserpass(event.target.value);
	}

	function changemobileno(event) {
		setusermobileno(event.target.value);
	}

	function changeuseremail(event) {
		setuseremail(event.target.value);
	}

	function changerole(event) {
		setuserrole(event.target.value);
	}
	//  const handleChange = (event) => {
	//      console.log('event.target',event.target.value);
	//     setusername(event.target.value);
	//   };
	return (
		<>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="strpied-tabled-with-hover">
							<Card.Header>
								<Card.Title as="h4">Add User</Card.Title>
							</Card.Header>
							<Card.Body className="table-full-width table-responsive px-0">
								<form class="add_useform">
									<div class="row">
										<div class="col">
											<label>Select Role</label>
											<select
												class="form-control select_role"
												onChange={changerole}
											>
												{useroles &&
													useroles.map((useroles, index) => (
														<option
															key={index}
															value={useroles.Id}
															selected={userrole === useroles.Id}
														>
															{useroles.name}
														</option>
													))}
											</select>
										</div>
										<div class="col">
											<label>Name</label>
											<input
												type="text"
												class="form-control first_name"
												placeholder="Name"
												value={username}
												onChange={handleChange}
											/>
										</div>
									</div>

									<div class="row mobielno_col">
										<div class="col">
											<label>Password</label>
											<input
												type="text"
												class="form-control password"
												placeholder="Password"
												value={userpass}
												onChange={changepassword}
											/>
										</div>
										<div class="col">
											<label></label>
											<input
												type="text"
												class="form-control mobile_no"
												placeholder="Mobile Number"
												value={usermobileno}
												onChange={changemobileno}
											/>
										</div>
										<div class="col">
											<label>Email</label>
											<input
												type="email"
												class="form-control email"
												placeholder="Email"
												value={useremail}
												onChange={changeuseremail}
											/>
										</div>
									</div>

									<div class="row mt-5">
										<div class="col-sm-12 add_userbtn">
											<button class="btn btn-primary adduser_cancel">
												Cancel
											</button>
											<button
												type="button"
												class="btn btn-success"
												data-id={userid}
												id="edit_userform"
											>
												Submit
											</button>
										</div>
									</div>
								</form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Edituser;
