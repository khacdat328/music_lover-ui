import { MdLabel } from "react-icons/md"

function SongDetail({ data }) {
	const detailLists = [
		{ labels: "Nghệ sĩ", content: data.artistName },
		{ labels: "Album", content: data.Album },
		{ labels: "Sáng tác", content: data.creator },
		{ labels: "Thể loại", content: data.category },
	]
	return (
		<div className="w-[230px] py-2.5 bg-primaryBg">
			<div className="p-[15px]">
				{detailLists.map((detailItem, index) => (
					<div key={index}>
						<h3 className="text-secondary text-xs leading-[18px] uppercase">
							{detailItem.labels}
						</h3>
						<div className="text-sm leading-[21px]">
							{detailItem.content ? (
								<a
									href="#"
									className="text-primary hover:text-link-hover">
									{detailItem.content}
								</a>
							) : (
								<span className="text-primary">Unknow</span>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default SongDetail
