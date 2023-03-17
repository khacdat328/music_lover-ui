import * as request from "~/utils/httpRequest"

export const NewRelease = async () => {
	try {
		const res = await request.get("/songs/category/new-music")
		return res
	} catch (e) {
		return e
	}
}
