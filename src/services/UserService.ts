import { useState } from "react";

const useUser = () => {
	const getUser = () => {
		const tokenString = sessionStorage.getItem("jwt-note-token");
		if (!tokenString) return;
		const userToken = JSON.parse(tokenString);
		return {
			name: userToken.name,
			userName: userToken.username,
		};
	};

	const [user] = useState(getUser());

	return {
		user,
	};
};

export default useUser();
