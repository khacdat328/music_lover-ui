function ListItem(song) {
	return (
<<<<<<< HEAD
		<div className="px-4">
			<div key={song.songName} className="group relative w-max">
				<div className="relative h-auto w-full rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
					<img
						src={"http://localhost:4000/" + song.songImg}
						className="rounded h-full w-full object-cover object-center "
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
=======
		<div key={song.songName} className="group relative p-4">
			<div className="relative h-auto w-full rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
				<img
					src={"http://localhost:4000/" + song.songImg}
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
>>>>>>> ced85be (add http request util & re-format list)
		</div>
	);
}
export default ListItem;
