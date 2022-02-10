import { useState } from "react";

const useToken = () => {
	const getToken = () => {
		const tokenString = sessionStorage.getItem("jwt-note-token");
		if (!tokenString) return;
		const userToken = JSON.parse(tokenString);
		return userToken.token;
	};

	const [token, setToken] = useState(getToken());

	const saveToken = (userToken: any) => {
		sessionStorage.setItem("jwt-note-token", JSON.stringify(userToken));
		setToken(userToken.token);
	};

	return {
		setToken: saveToken,
		token,
	};
};

export default useToken;
