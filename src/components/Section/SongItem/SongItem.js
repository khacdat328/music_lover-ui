import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { baseURL } from "~/utils/httpRequest";

function SongItem({ data }) {
	const getDate = () => {
		var date = new Date(data.create_at);
		return date.toLocaleString("en-GB").split(",")[0];
	};
	const releaseDate = getDate();
	return (
		<div className="group flex-auto w-1/3 px-3.5">
			<div className="p-2.5 rounded-[4px] group-hover:bg-alpha">
				<div className="flex mr-2.5 ">
					<div className="relative rounded-[4px] overflow-hidden mr-2.5">
						<figure>
							<img
								className="w-[60px] h-auto"
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
					<div className="flex flex-col flex-grow">
						<div className="flex leading-[1.3]">
							<span className="text-[14px] font-medium text-primary">
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
				{/* Button */}
				<div></div>
			</div>
		</div>
	);
}

export default SongItem;
