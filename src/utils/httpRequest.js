import axios from "axios";

export const baseURL = "http://musiclovers.ap-1.evennode.com";
const request = axios.create({ baseURL });
export const get = async (url, option = {}) => {
	try {
		const data = await request.get(url, option);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};

export default request;
