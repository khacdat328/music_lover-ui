import { useEffect, useState } from "react";
import * as getSongs from "~/ApiService/Songs";
import * as getPlayList from "~/ApiService/PLayList";
import * as getArtists from "~/ApiService/Artists";
import Section from "~/components/Section";
// import ListContainer from "~/components/List/Songs/ListContainer";
import ListContainer from "~/components/List/Artists/ListContainer";

import SliderContainer from "~/components/SwiperSlider/SliderContainer";
import NewRelease from "~/components/Section/Section Content";

// NOTE: test data
const title = "Collection";
function Discovery() {
	const [playlist, setPlayList] = useState([]);
	const [newSongList, setNewSongList] = useState([]);
	const [artistList, setArtistList] = useState([]);

	const FetchData = () => {
		getSongs
			.NewRelease(12)
			.then((data) => setNewSongList(data))
			.catch((e) => console.log(e));

		getPlayList
			.PlayList("61bf9959d2b2d206fd981469")
			.then((res) => setPlayList(res))
			.catch((e) => console.log(e));
		getArtists
			.Artists()
			.then((res) => setArtistList(res))
			.catch((e) => console.log(e));
	};
	useEffect(() => {
		FetchData();
	}, []);
	// const BannerData = playlist.filter((item, index) => index < 6)
	return (
		<div className="px-[30px] lg:px-14">
			<SliderContainer data={playlist} />
			<Section title={"Mới phát hành"} seeAll={false}>
				<NewRelease data={newSongList} />
			</Section>
			<ListContainer data={artistList} />
		</div>
	);
}
export default Discovery;
