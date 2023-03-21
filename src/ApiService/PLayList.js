import * as request from "~/utils/httpRequest";

export const PlayList = async (ID) => {
	try {
		const res = await request.get("/playlists", {
			params: { userId: ID },
		});
		return res;
	} catch (e) {
		return e;
	}
};
