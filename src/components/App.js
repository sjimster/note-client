import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Notes from "./Notes";
import Users from "./Users";
import Home from "./Home";
import Login from "./Login";
import NoteDetail from "./NoteDetail";
import { Navbar, Nav } from "react-bootstrap";

const App = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#" as="span">
							<Link to="/">home</Link>
						</Nav.Link>
						<Nav.Link href="#" as="span">
							<Link to="/notes">notes</Link>
						</Nav.Link>
						<Nav.Link href="#" as="span">
							<Link to="/users">users</Link>
						</Nav.Link>
						<Nav.Link href="#" as="span">
							<Link to="/login">login</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className="container">
				<Routes>
					<Route path="/notes" exact element={<Notes />} />
					<Route path="/notes/:id" element={<NoteDetail />}></Route>
					<Route path="/users" exact element={<Users />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/" exact element={<Home />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
