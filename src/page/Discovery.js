import { useEffect, useState } from "react";
import ListContainer from "~/components/List/ListContainer";
import SliderContainer from "~/components/SwiperSlider/SliderContainer";
import { get } from "../utils/httpRequest";
// NOTE: test data
const title = "Collection";
function Discovery() {
	const [bannerData, setBannerData] = useState([]);
	const [newSongList, setNewSongList] = useState([]);
	async function FetchData() {
		const songs = await get("/songs/category/new-music");
		setNewSongList(songs);
		const playlist = await get("/playlists", {
			params: { userId: "61bf9959d2b2d206fd981469" },
		});
		setBannerData(playlist);
	}
	useEffect(() => {
		FetchData();
	}, [bannerData.length, newSongList.length]);
	return (
		<div className="px-14">
			<SliderContainer data={bannerData} />
			<ListContainer props={{ listOfItems: newSongList, title }} />
		</div>
	);
}
export default Discovery;
