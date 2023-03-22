import * as request from "~/utils/httpRequest";

export const Artists = async (ID) => {
	try {
		const res = await request.get("/artists", {
			params: { artistId: ID },
		});
		return res;
	} catch (e) {
		return e;
	}
};
