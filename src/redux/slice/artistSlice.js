import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as getArtists from "~/ApiService/Artists"
const initState = {
	status: "idle",
	artistsList: [],
}

const artistSlice = createSlice({
	name: "artists",
	initialState: initState,
	// reducers: {
	// 	setReleaseSongs: (state, action) => {
	// 		state.newRelease = action.payload
	// 	},
	// },
	extraReducers: (builder) => {
		builder
			.addCase(getArtist.pending, (state, action) => {
				state.status = "Loading"
			})
			.addCase(getArtist.fulfilled, (state, action) => {
				state.artistsList = action.payload
				state.status = "idle"
			})
	},
})

export default artistSlice

export const getArtist = createAsyncThunk(
	"artist/getArtist",
	async () => {
		const res = await getArtists.Artists()
		return res
	}
)
