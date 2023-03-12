import ListItem from "./ListItem";
function ListContainer({ props }) {
	const { songs, title } = props;
	return (
<<<<<<< HEAD
		<div>
			<h2 className="text-2xl capitalize font-bold text-gray-900">{title}</h2>
			<div className="flex flex-row -mx-auto justify-center">
				{songs.map((song) => ListItem(song))}
			</div>
=======
		<div className="bg-gray-100 p-6">
			<h2 className="text-2xl font-bold text-gray-900 ml-6">{title}</h2>
			<div className="flex flex-row">{songs.map((song) => ListItem(song))}</div>
>>>>>>> ced85be (add http request util & re-format list)
		</div>
	);
}

export default ListContainer;
