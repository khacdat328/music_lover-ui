import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons"
import {
	MdPlaylistAddCircle,
	MdAddCircleOutline,
	MdOutlineFileDownload,
	MdOutlineLyrics,
	MdBlock,
} from "react-icons/md"
import { BsArrow90DegLeft } from "react-icons/bs"
import { TbShare3, TbLink } from "react-icons/tb"
import Tippy from "@tippyjs/react/headless"
import { baseURL } from "~/utils/httpRequest"
import Image from "~/components/Image"
import Popper from "~/components/Popper/Popper"
import SongDetail from "./SongDetail"

function SongMenu({ data }) {
	const listMenus = [
		{
			icon: (
				<FontAwesomeIcon icon={faHeart} className="mr-[15px] text-[16px]" />
			),
			title: "Thêm vào thư viện",
		},
		{
			icon: <MdPlaylistAddCircle className="mr-[15px] text-[16px]" />,
			title: "Thêm vào danh sách phát",
		},
		{
			icon: <BsArrow90DegLeft className="mr-[15px] text-[16px]" />,
			title: "Phát tiếp theo",
		},
		{
			icon: <MdAddCircleOutline className="mr-[15px] text-[16px]" />,
			title: "Thêm vào playlist",
		},
		{
			icon: (
				<FontAwesomeIcon
					icon={faComment}
					flip="horizontal"
					className="mr-[15px] text-[16px]"
				/>
			),
			title: "Bình luận",
		},
		{
			icon: <TbLink className="mr-[15px] text-[16px]" />,
			title: "Sao chép link",
		},
		{
			icon: <TbShare3 className="mr-[15px] text-[16px]" />,
			title: "Chia sẻ",
		},
	]

	const renderSongDetail = () => {
		return (
			<Popper>
				<SongDetail data={data} />
			</Popper>
		)
	}
	return (
		<div className="song-menu w-[280px]">
			<div className="relative">
				<Tippy interactive render={renderSongDetail}  placement='right-start' offset={[-10,-12]} appendTo={document.getElementById("portal")}>
					<div className="flex items-center pt-[15px] px-[15px]">
						<Image
							src={`${baseURL}/${data.songImg}`}
							className="square-40 rounded-[4px] mr-2.5 bg-white"
						/>
						<div className="flex-1 overflow-hidden">
							<a
								href="#"
								className="text-sm text-primary hover:text-link-hover font-medium leading-tight">
								<span className="block w-full overflow-hidden text-ellipsis whitespace-nowrap">
									{data.songName}
								</span>
							</a>
							<div className="flex justify-start text-[12px] leading-[15px] text-[#a0a0a0]">
								<h3 className="mt-0.5">
									<a
										href="#"
										className="text-secondary hover:text-link-hover hover:underline">
										{data.artistName}
									</a>
								</h3>
							</div>
						</div>
					</div>
				</Tippy>
			</div>

			<div>
				<div className="mt-[15px] mb-2.5 px-[15px]">
					<div className="flex justify-between rounded-lg bg-alpha text-white">
						<button className="flex flex-col items-center flex-1 max-w-[80px] py-2 rounded-lg leading-[14px] hover:bg-alpha">
							<MdOutlineFileDownload className="mb-1" />
							<span className="text-[10px]">Tải xuống</span>
						</button>
						<button className="flex flex-col items-center flex-1 max-w-[80px] py-2 rounded-lg leading-[14px] hover:bg-alpha">
							<MdOutlineLyrics className="mb-1" />
							<span className="text-[10px]">Lời bài hát</span>
						</button>
						<button className="flex flex-col items-center flex-1 max-w-[80px] py-2 rounded-lg leading-[14px] hover:bg-alpha">
							<MdBlock className="mb-1" />
							<span className="text-[10px]">Chặn</span>
						</button>
					</div>
				</div>
			</div>

			<div>
				<ul>
					{listMenus.map((menu, index) => (
						<li key={index} className="hover:bg-alpha">
							<span>
								<button className="w-full flex items-center py-2.5 pl-3.5 pr-5 text-[14px] leading-[17px] text-[var(--text-secondary)]">
									{menu.icon}
									<span>{menu.title}</span>
								</button>
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default SongMenu
