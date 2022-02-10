import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import loginService from "../../services/LoginService";
import useToken from "../../services/TokenService";
const Login = () => {
	const [username] = useState("testUser");
	const [password] = useState("verrySecret123!");
	const { setToken } = useToken();

	const handleLogin = (event: any) => {
		event.preventDefault();

		loginService
			.userLogin({ username: username, password: password })
			.then((resp) => {
				if (resp) {
					setToken(resp);
				}
			});
	};

	return (
		<div>
			<h2>login</h2>
			<Form onSubmit={handleLogin}>
				<Form.Group>
					<Form.Label>username:</Form.Label>
					<Form.Control
						defaultValue={username}
						type="text"
						name="username"
					/>
					<Form.Label>password:</Form.Label>
					<Form.Control defaultValue={password} type="password" />
					<Button variant="primary" type="submit">
						login
					</Button>
				</Form.Group>
			</Form>
		</div>
	);
};

export default Login;
