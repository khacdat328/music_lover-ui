import SongListItem from "./SongListItem";
function ListContainer({ data }) {
	const { listOfItems, title } = data;
	return (
		<div className="relative mt-[48px]">
			<h2 className="text-2xl capitalize font-bold text-gray-900">{title}</h2>
			<div className="flex flex-row -mx-auto justify-center">
				{listOfItems.map((song) => SongListItem(song))}
			</div>
		</div>
	);
}

export default ListContainer;
