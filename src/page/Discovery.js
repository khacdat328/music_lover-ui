import { useEffect, useState } from "react";
import * as getSongs from "~/ApiService/Songs";
import * as getPlayList from "~/ApiService/PLayList";
import * as getArtists from "~/ApiService/Artists";
import Section from "~/components/Section";
// import ListContainer from "~/components/List/Songs/ListContainer";
import ArtistsContainer from "~/components/List/Artists";

import SliderContainer from "~/components/SwiperSlider/SliderContainer";
import NewRelease from "~/components/Section/Section Content";
import PlaylistsContainer from "~/components/List/Playlists/PlaylistsContainer";

// NOTE: test data
function Discovery() {
	const [playlist, setPlayList] = useState([]);
	const [newSongList, setNewSongList] = useState([]);
	const [artistList, setArtistList] = useState([]);

	const FetchData = async () => {
		await getSongs
			.NewRelease(12)
			.then((data) => setNewSongList(data))
			.catch((e) => console.log(e));

		await getPlayList
			.PlayList("61bf9959d2b2d206fd981469")
			.then((res) => setPlayList(res))
			.catch((e) => console.log(e));
		await getArtists
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
			<Section title={"Chill"} seeAll={false}>
				<PlaylistsContainer data={playlist.slice(0, 5)} />
			</Section>
			<ArtistsContainer data={artistList} />
		</div>
	);
}
export default Discovery;
