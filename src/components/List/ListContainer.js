import ListItem from "./ListItem";
function ListContainer({ props }) {
	const { listOfItems, title } = props;
	return (
		<div className="relative mt-[48px]">
			<h2 className="text-2xl capitalize font-bold text-gray-900">{title}</h2>
			<div className="flex flex-row -mx-auto justify-center">
				{listOfItems.map((song) => ListItem(song))}
			</div>
		</div>
	);
}

export default ListContainer;
