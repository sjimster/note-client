import React from "react";
import { useState } from "react";
import loginService from "../services/login";
import noteService from "../services/notes";
import { Form, Button } from "react-bootstrap";

const Login = ({ setUser }) => {
	const [username, setUsername] = useState("testUser");
	const [password, setPassword] = useState("verrySecret123!");

	const handleLogin = async (event) => {
		event.preventDefault();

		try {
			const user = await loginService({
				username,
				password,
			});
			window.localStorage.setItem(
				"loggedNoteappUser",
				JSON.stringify(user)
			);
			setUser(user);
			noteService.setToken(user.token);
			setUsername("");
			setPassword("");
		} catch (exception) {
			console.warn("Wrong credentials");
		}
	};

	return (
		<div>
			<h2>login</h2>
			<Form onSubmit={handleLogin}>
				<Form.Group>
					<Form.Label>username:</Form.Label>
					<Form.Control type="text" name="username" />
					<Form.Label>password:</Form.Label>
					<Form.Control type="password" />
					<Button variant="primary" type="submit">
						login
					</Button>
				</Form.Group>
			</Form>
		</div>
	);
};

export default Login;
