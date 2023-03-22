import { baseURL } from "~/utils/httpRequest";

function ListItem(song) {
	console.log(song);
	return (
		<div key={song.songName} className="group relative p-4">
			<div className="relative h-auto w-full rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
				<img
					src={`${baseURL}/${song.songImg}`}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<p className="mt-6 text-base font-semibold text-gray-900">
				{song.songName}
			</p>

			<h3 className="text-sm text-gray-500">
				<a href={"#"}>
					<span className="absolute inset-0" />
					{song.artistName}
				</a>
			</h3>
		</div>
	);
}
export default ListItem;
