import {
	faDotCircle,
	faEllipsis,
	faPlay,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Tippy from "@tippyjs/react/headless"
import tippy from "tippy.js"
import Image from "~/components/Image"
import Popper from "~/components/Popper"
import { baseURL } from "~/utils/httpRequest"
import SongMenu from "./SongMenu"
import { memo, useContext, useEffect, useRef } from "react"

import { MainProvider } from "~/Layout/MainLayout"
import { hideAll } from "tippy.js"

function SongItem({ data }) {
	const { divRef, context } = useContext(MainProvider)
	const tooltip = useRef(null)

	const renderOption = ({ props }) => {
		return (
			<Popper>
				<SongMenu data={data} />
			</Popper>
		)
	}

	const getDate = () => {
		var date = new Date(data.create_at)
		return date.toLocaleString("en-GB").split(",")[0]
	}
	const releaseDate = getDate()
	const hideTooltip = () => {
		if (tooltip.current._tippy.popperInstance) tooltip.current._tippy.hide()
	}
	useEffect(() => {
		const parentdiv = divRef.current
		parentdiv.addEventListener("scroll", hideTooltip)
		return () => parentdiv.removeEventListener("scroll", hideTooltip)
	}, [])

	console.log("rednder")
	return (
		<div className="group w-1/3 px-3.5">
			<div className="group flex items-center p-2.5 rounded-[4px] group-hover:bg-alpha  foo:bg-alpha">
				<div className="flex flex-auto mr-2.5 overflow-hidden">
					<div className="relative shrink-0 rounded-[4px] overflow-hidden mr-2.5">
						<figure className="w-[60px] h-auto bg-white">
							<Image
								className="w-[60px]"
								src={`${baseURL}/${data.songImg}`}
								alt=""
							/>
						</figure>
						<div className="absolute top-0 left-0 w-full h-full invisible group-hover:visible bg-[#00000080]"></div>
						<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center invisible group-hover:visible bg-[#00000080]">
							<button className="w-full h-full">
								<FontAwesomeIcon icon={faPlay} className="text-white" />
							</button>
						</div>
					</div>
					<div className="flex flex-col flex-grow	 overflow-hidden">
						<div className="flex leading-[1.3]">
							<span className="text-[14px] font-medium text-primary overflow-hidden whitespace-nowrap text-ellipsis">
								{data.songName}
							</span>
						</div>
						<h3 className="text-[12px] text-secondary mt-[3px]">
							<a href="#">{data.artistName}</a>
						</h3>
						<div className="text-[12px] text-secondary mt-[3px]">
							<span>{releaseDate}</span>
						</div>
					</div>
				</div>

				<div className="">
					<Tippy
						trigger="click"
						render={renderOption}
						interactive
						placement="right"
						onCreate={(instance) => (tooltip.current = instance)}
						offset={[0, -15]}>
						<button
							ref={tooltip}
							className="hidden group-hover:block py-[7px] px-2.5 rounded-full hover:bg-alpha">
							<span className=" px-0.5 text-primary">
								<FontAwesomeIcon icon={faEllipsis} />
							</span>
						</button>
					</Tippy>
				</div>
			</div>
		</div>
	)
}

export default memo(SongItem)
