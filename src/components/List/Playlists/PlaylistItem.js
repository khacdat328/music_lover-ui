import { faCirclePlay, faHeart } from "@fortawesome/free-regular-svg-icons"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Image from "~/components/Image"
import { baseURL } from "~/utils/httpRequest"
const PlaylistItem = ({ item }) => {
	return (
		<div className="w-1/5 px-3.5">
			<div className="flex flex-col overflow-hidden">
				<div className="group relative shrink-0 rounded-[4px] overflow-hidden">
					<figure className="h-auto bg-white group-hover:scale-125 duration-700 ">
						<Image src={`${baseURL}/${item.playlistImg}`} alt="" />
					</figure>
					<div className="absolute top-0 left-0 w-full h-full invisible group-hover:visible bg-[#00000080]" />
					<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center invisible group-hover:visible bg-[#00000080]">
						<div className="flex flex-row justify-evenly items-center w-full">
							<button className="w-full h-full">
								<FontAwesomeIcon
									icon={faHeart}
									className="text-white w-[30px] h-auto"
								/>
							</button>
							<button className="w-full h-full">
								<FontAwesomeIcon
									icon={faCirclePlay}
									className="text-white w-[45px] h-auto "
								/>
							</button>
							<button className="w-full h-full">
								<FontAwesomeIcon
									icon={faEllipsis}
									className="text-white w-[30px] h-auto"
								/>
							</button>
						</div>
					</div>
				</div>

				<div className="mt-3">
					<div>
						<h3 className="text-sm text-secondary mx-1 line-clamp-2">
							{item.playlistName}
						</h3>
					</div>
				</div>
			</div>
		</div>
	)
}
export default PlaylistItem
