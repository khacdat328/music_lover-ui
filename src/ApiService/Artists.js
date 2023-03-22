import * as request from "~/utils/httpRequest";

export const Artists = async (ID) => {
	try {
		const res = await request.get("/artists");
		return res;
	} catch (e) {
		return e;
	}
};
