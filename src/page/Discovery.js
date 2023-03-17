import { useEffect, useState } from "react"
import * as getSongs from "~/ApiService/Songs"
import * as getPlayList from "~/ApiService/PLayList"
import ListContainer from "~/components/List/ListContainer"
import SliderContainer from "~/components/SwiperSlider/SliderContainer"
import { get } from "../utils/httpRequest"
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
	const BannerData = playlist.filter((item, index) => index < 6)
	return (
		<div className="px-14">
			<SliderContainer data={BannerData} />
			{/* <ListContainer props={{ listOfItems: newSongList, title }} /> */}
		</div>
	)
}
export default Discovery
