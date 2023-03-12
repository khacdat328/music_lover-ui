import ListItem from "./ListItem";
function ListContainer({ props }) {
	const { songs, title } = props;
	return (
		<div className="bg-gray-100 p-6">
			<h2 className="text-2xl font-bold text-gray-900 ml-6">{title}</h2>
			<div className="flex flex-row">{songs.map((song) => ListItem(song))}</div>
		</div>
	);
}

export default ListContainer;
