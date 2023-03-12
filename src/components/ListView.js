import { useEffect } from "react";

function ListView({ props }) {
	const { songs, title } = props;
	return (
		<div className="bg-gray-100 p-6">
			<h2 className="text-2xl font-bold text-gray-900">{title}</h2>
			<div className="flex flex-row justify-between overflow-x-auto">
				{songs.map((song) => (
					<div key={song.songName} className="group relative p-4">
						<div className="relative h-80 w-full rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
							<img
								src={"http://localhost:4000/" + song.songImg}
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<h3 className="mt-6 text-sm text-gray-500">
							<a href={"#"}>
								<span className="absolute inset-0" />
								{song.artistName}
							</a>
						</h3>
						<p className="text-base font-semibold text-gray-900">
							{song.songName}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default ListView;
