import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as getPlayList from "~/ApiService/PLayList"
const initState = {
	status: "idle",
	chillAlbums: [],
}

const albumSlice = createSlice({
	name: "albums",
	initialState: initState,
	// reducers: {
	// 	setAlbums: (state, action) => {
	// 		state.Albums = action.payload
	// 	},
	// },
	extraReducers: (builder) => {
		builder
			.addCase(getChillAlbums.pending, (state, action) => {
				state.status = "Loading"
			})
			.addCase(getChillAlbums.fulfilled, (state, action) => {
				state.chillAlbums = action.payload
				state.status = "idle"
			})
	},
})

export default albumSlice

export const getChillAlbums = createAsyncThunk("albums/getChillAlbums", async () => {
	const resAlbums = await getPlayList.PlayList("61bf9959d2b2d206fd981469")
	return resAlbums
})
