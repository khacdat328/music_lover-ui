import * as request from "~/utils/httpRequest";

export const NewRelease = async (limit) => {
	try {
		const res = await request.get("/songs/category/new-music", {
			params: { limit },
		});
		return res;
	} catch (e) {
		return e;
	}
};
