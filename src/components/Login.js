import { useState } from "react";
import loginService from "../services/login";
import noteService from "../services/notes";

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
		<form onSubmit={handleLogin}>
			<div>
				username
				<input
					type="text"
					value={username}
					name="Username"
					onChange={({ target }) => setUsername(target.value)}
				/>
			</div>
			<div>
				password
				<input
					type="password"
					value={password}
					name="Password"
					onChange={({ target }) => setPassword(target.value)}
				/>
			</div>
			<button type="submit">login</button>
		</form>
	);
};

export default Login;
