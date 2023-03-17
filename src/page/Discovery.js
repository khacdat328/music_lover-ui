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

	const FetchData = () => {
		getSongs
			.NewRelease()
			.then((data) => setNewSongList(data))
			.catch((e) => console.log(e))

		getPlayList
			.PlayList("61bf9959d2b2d206fd981469")
			.then((res) => setPlayList(res))
			.catch((e) => console.log(e))
	}
	useEffect(() => {
		FetchData()
	}, [])
	// const BannerData = playlist.filter((item, index) => index < 6)
	console.log( newSongList )
	return (
		<div className="px-[30px] lg:px-14">
			<Section title={"Mới phát hành"} seeAll={false}>
				<NewRelease data={newSongList} />
			</Section>
		</div>
	)
}
export default Discovery
