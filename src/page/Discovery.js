import { memo, useEffect, useState } from "react"
import * as getSongs from "~/ApiService/Songs"
import * as getPlayList from "~/ApiService/PLayList"
import * as getArtists from "~/ApiService/Artists"
import Section from "~/components/Section"
import ArtistsContainer from "~/components/List/Artists"
import SliderContainer from "~/components/SwiperSlider/SliderContainer"
import NewRelease from "~/components/Section/Section Content"
import PlaylistsContainer from "~/components/List/Playlists/PlaylistsContainer"

import { useSelector, useDispatch } from "react-redux"
import { homepageData } from "~/redux/selector"
import { getNewReleaseSongs } from "~/redux/slice/songSlice"
import { getArtist } from "~/redux/slice/artistSlice"
import { getChillAlbums } from "~/redux/slice/albumSlice"
// NOTE: test data
function Discovery() {
	const dispatch = useDispatch()
	const {song, album, artist} = useSelector(homepageData)
	console.log({song, album, artist})
	const [playlist, setPlayList] = useState([])
	const [newSongList, setNewSongList] = useState([])
	const [artistList, setArtistList] = useState([])

	const FetchData = () => {
		dispatch(getNewReleaseSongs())
		dispatch(getChillAlbums())
		dispatch(getArtist())
	}
	useEffect(() => {
		FetchData()
	}, [])
	// console.log("render")

	// const BannerData = playlist.filter((item, index) => index < 6)
	return (
		<div className="">
			<SliderContainer data={playlist} />

			<Section title={"Mới phát hành"} seeAll={false}>
				<NewRelease data={song} />
			</Section>

			<Section title={"Chill"} seeAll={false}>
				<PlaylistsContainer data={album.slice(0, 5)} />
			</Section>

			<Section title={"BXH Nhạc mới"} seeAll={false}>
				<PlaylistsContainer data={album.slice(0, 5)} />
			</Section>
			<ArtistsContainer data={artist} />
		</div>
	)
}
export default memo(Discovery)
