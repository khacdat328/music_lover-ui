import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as getSongs from "~/ApiService/Songs"
const initState = {
	status: "idle",
	newRelease: [],
}

const songSlice = createSlice({
	name: "songs",
	initialState: initState,
	reducers: {
		setReleaseSongs: (state, action) => {
			state.newRelease = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNewReleaseSongs.pending, (state, action) => {
				state.status = "Loading"
			})
			.addCase(getNewReleaseSongs.fulfilled, (state, action) => {
				state.newRelease = action.payload
				state.status = "idle"
			})
	},
})

export default songSlice

export const getNewReleaseSongs = createAsyncThunk(
	"songs/getNewReleaseSong",
	async () => {
		const newReleaseSongs = await getSongs.NewRelease(12)
		return newReleaseSongs
	}
)
