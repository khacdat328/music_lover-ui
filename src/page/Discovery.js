<<<<<<< HEAD
<<<<<<< HEAD
import ListContainer from "~/components/List/ListContainer";
<<<<<<< HEAD
import SliderContainer from "~/components/SwiperSlider/SliderContainer";
=======

>>>>>>> ced85be (add http request util & re-format list)
// NOTE: test data
=======
import ListView from "~/components/ListView";
>>>>>>> dda975f (test listview)
=======
import ListContainer from "~/components/List/ListContainer";

// NOTE: test data
>>>>>>> 1c21876 (add http request util & re-format list)
const songs = [
	{
		_id: "61bf8bdbbc1f883d7e782975",
		songName: "Get Used To Me",
		artistName: "Justin Bieber",
		artistId: ["6162d9492fddb7174c15dc3f"],
		albumId: "61bf95e3bc1f883d7e78297c",
		genreId: "6162bbec9298eb65df91223c",
		likeCount: 40,
		songImg: "uploads/image00010.jpeg",
		songSrc: "uploads/audio00013.mp3",
		__v: 0,
		create_at: "2021-11-20T07:22:32.041Z",
	},
	{
		_id: "61bf8c48bc1f883d7e782976",
		songName: "Been You",
		artistName: "Justin Bieber",
		artistId: ["6162d9492fddb7174c15dc3f"],
		albumId: "61bf95e3bc1f883d7e78297c",
		genreId: "6162bbec9298eb65df91223c",
		likeCount: 102,
		songImg: "uploads/image00010.jpeg",
		songSrc: "uploads/audio00014.mp3",
		__v: 0,
		create_at: "2021-11-20T07:22:32.041Z",
	},
	{
		_id: "61bf9c89d2b2d206fd98146c",
		songName: "Lay It All On Me",
		artistName: "Ed Sheeran",
		artistId: ["6162d6f62fddb7174c15dc35"],
		albumId: "6162e25f2d1ed5ed801ed306",
		genreId: "6162bbec9298eb65df91223c",
		likeCount: 175,
		songImg: "uploads/image00002.jpeg",
		songSrc: "uploads/audio00017.mp3",
		__v: 0,
		create_at: "2021-11-20T07:22:32.041Z",
	},
	{
		_id: "61bfd8e6d2b2d206fd981470",
		songName: "Closer",
		artistName: "The Chainsmokers, Halsey",
		artistId: ["6162d7312fddb7174c15dc39"],
		albumId: "6162e12d2d1ed5ed801ed304",
		genreId: "6162bbec9298eb65df91223c",
		likeCount: 103,
		songImg: "uploads/image00001.jpeg",
		songSrc: "uploads/audio00021.mp3",
		__v: 0,
		create_at: "2020-11-20T07:22:32.041Z",
	},
	{
		_id: "61bfdb07d2b2d206fd981475",
		songName: "Maybe Idk",
		artistName: "Jon Bellion",
		artistId: ["6162d98c2fddb7174c15dc41"],
		albumId: "61bf911abc1f883d7e782977",
		genreId: "6162bbec9298eb65df91223c",
		likeCount: 123,
		songImg: "uploads/image00005.jpeg",
		songSrc: "uploads/audio00025.mp3",
		__v: 0,
		create_at: "2021-05-20T07:22:32.041Z",
	},
<<<<<<< HEAD
<<<<<<< HEAD
];
const title = "Collection";
const data = [
	{
		_id: "61bf9ac67c36d22a90215339",
		playlistName: "To The Moon",
		userId: "61bf9959d2b2d206fd981469",
		playlistImg: "uploads/image00012.jpeg",
		playlist_number: 2,
		numSongs: 0,
		songId: [],
	},
	{
		_id: "61c16b5ae5db5b804b796e74",
		playlistName: "Recently Played",
		userId: "61c16b59e5db5b804b796e71",
		playlist_number: 1,
		playlistImg: "uploads/default_playlist.jpeg",
		songId: [
			"61bf9b63d2b2d206fd98146a",
			"61bf9c35d2b2d206fd98146b",
			"61bf9c89d2b2d206fd98146c",
			"61bf9b63d2b2d206fd98146a",
			"61bf9b63d2b2d206fd98146a",
			"61bf9b63d2b2d206fd98146a",
			"61bf9b63d2b2d206fd98146a",
			"61bf9c89d2b2d206fd98146c",
			"61bf8c48bc1f883d7e782976",
			"61bf9c89d2b2d206fd98146c",
			"61bf8c48bc1f883d7e782976",
			"61bf9b63d2b2d206fd98146a",
			"61bf9b63d2b2d206fd98146a",
			"61bf9c89d2b2d206fd98146c",
		],
		numSongs: 14,
		__v: 14,
	},
	{
		_id: "61bf991e7c36d22a90215338",
		playlistName: "Rap Viet (Mua 2)",
		userId: "61bf9959d2b2d206fd981469",
		playlistImg: "uploads/image00011.jpeg",
		playlist_number: 2,
		numSongs: 0,
		songId: [],
	},
];
function Discovery() {
	return (
<<<<<<< HEAD
		<div className="px-14">
			<ListContainer props={{ songs, title }} />
			<SliderContainer data={data} />
=======
		<div>
			<ListContainer props={{ songs, title }} />
>>>>>>> ced85be (add http request util & re-format list)
		</div>
	);
=======
	{
		_id: "61bf9234bc1f883d7e782978",
		songName: "Don't Wanna Know",
		artistName: "Maroon 5, Kendrick Lamar",
		artistId: ["6162d9ba2fddb7174c15dc43"],
		albumId: "61bf9234bc1f883d7e782978",
		genreId: "6162bbec9298eb65df91223c",
		likeCount: 124,
		songImg: "uploads/image00006.jpeg",
		songSrc: "uploads/audio00026.mp3",
		__v: 0,
		create_at: "2021-08-20T07:22:32.041Z",
	},
	{
		_id: "61bf9234bc1f883d7e782978",
		songName: "Don't Wanna Know",
		artistName: "Maroon 5, Kendrick Lamar",
		artistId: ["6162d9ba2fddb7174c15dc43"],
		albumId: "61bf9234bc1f883d7e782978",
		genreId: "6162bbec9298eb65df91223c",
		likeCount: 124,
		songImg: "uploads/image00006.jpeg",
		songSrc: "uploads/audio00026.mp3",
		__v: 0,
		create_at: "2021-08-20T07:22:32.041Z",
	},
=======
>>>>>>> 1c21876 (add http request util & re-format list)
];
const title = "Collection";

function Discovery() {
<<<<<<< HEAD
	return <div>Discovery Page</div>;
<<<<<<< HEAD
>>>>>>> dda975f (test listview)
=======
=======
	return (
		<div className="px-14">
			<ListContainer props={{ songs, title }} />
		</div>
	);
>>>>>>> a3633f7 (add http request util & re-format list)
>>>>>>> 1c21876 (add http request util & re-format list)
}

export default Discovery;
