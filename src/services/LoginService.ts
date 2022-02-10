import axios from "axios";

const baseUrl = "/api/login";

const userLogin = async (credentials: any) => {
	const response = await axios.post(baseUrl, credentials);
	return response.data;
};

const loginService = {
	userLogin,
};

export default loginService;
