import { useEffect, useState } from "react"
import * as getSongs from "~/ApiService/Songs"
import * as getPlayList from "~/ApiService/PLayList"
import Section from "~/components/Section"
import ListContainer from "~/components/List/ListContainer"
import SliderContainer from "~/components/SwiperSlider/SliderContainer"
import NewRelease from "~/components/Section/Section Content"

// NOTE: test data
const title = "Collection"
function Discovery() {
	const [playlist, setPlayList] = useState([])
	const [newSongList, setNewSongList] = useState([])

	const FetchData = async () => {
		await getSongs
			.NewRelease()
			.then((data) => setNewSongList(data))
			.catch((e) => console.log(e))

		await getPlayList
			.PlayList("61bf9959d2b2d206fd981469")
			.then((res) => setPlayList(res))
			.catch((e) => console.log(e))
	}
	useEffect(() => {
		FetchData()
	}, [])
	// const BannerData = playlist.filter((item, index) => index < 6)
	return (
		<div className="">
			<Section title={"Mới phát hành"} seeAll={false}>
				<NewRelease data={newSongList} />
			</Section>

			<Section title={"Chill"} seeAll={false}>
				<NewRelease data={newSongList} />
			</Section>

			<Section title={"Mới phát hành"} seeAll={false}>
				<NewRelease data={newSongList} />
			</Section>
		</div>
	)
}
export default Discovery
