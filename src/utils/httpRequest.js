import axios from "axios";

const request = axios.create({ baseURL: "http://musiclovers.ap-1.evennode.com" });
export const get = async (url, option = {}) => {
	try {
		const data = await request.get(url, option);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};

export default request;
