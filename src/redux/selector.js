import { createSelector } from "@reduxjs/toolkit"

export const newReleaseSongsSelector = (state) => state.songs.newRelease
export const albumsSelector = (state) => state.albums.chillAlbums
export const ArtistListSelector = (state) => state.artists.artistsList

export const homepageData = createSelector(
	newReleaseSongsSelector,
	albumsSelector,
	ArtistListSelector,
	(newReleaseSongs, chillAlbums, artistList) => {
		return {
			song: newReleaseSongs,
			album: chillAlbums,
			artist: artistList,
		}
	}
)
