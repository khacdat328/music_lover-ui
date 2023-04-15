import PlaylistItem from "./PlaylistItem";

const PlaylistsContainer = ({ data }) => {
	return (
		<div className="flex w-auto flex-wrap -mx-3.5">
			{data.map((item, index) => (
				<PlaylistItem key={index} item={item} />
			))}
		</div>
	);
};

export default PlaylistsContainer;
