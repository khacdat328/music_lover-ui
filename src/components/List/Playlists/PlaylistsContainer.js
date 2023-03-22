import PlaylistItem from "./PlaylistItem";

const PlaylistsContainer = ({ data }) => {
	return (
		<div className="flex w-full flex-wrap">
			{data.map((item, index) => (
				<PlaylistItem key={index} item={item} />
			))}
		</div>
	);
};

export default PlaylistsContainer;
