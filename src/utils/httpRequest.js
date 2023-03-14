import axios from "axios";

const request = axios.create({ baseURL: "http://localhost:4000" });
export const get = async (url, option = {}) => {
	await axios
		.get(url, option)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
};

export default request;
