export default function SliderItem({ data }) {
	const { item } = data;
	return (
		<div className="">
			<a href="#">
				<img
					src={"http://localhost:4000/" + item.playlistImg}
					alt={item.playlistName}
					className="h-full w-full object-cover object-center rounded-lg max-h-[240px]"
				/>
			</a>
		</div>
	);
}
