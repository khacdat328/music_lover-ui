export default function SliderItem(item) {
	return (
		<div>
			<img
				src={"http://localhost:4000/" + item.playlistImg}
				alt={item.playlistName}
			/>
		</div>
	);
}
