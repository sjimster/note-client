import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
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
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
