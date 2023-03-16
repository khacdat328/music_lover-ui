import axios from "axios";

const request = axios.create({ baseURL: "http://localhost:4000" });
export const get = async (url, option = {}) => {
	try {
		const data = await request.get(url, option);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};

export default request;
