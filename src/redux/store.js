import { configureStore } from "@reduxjs/toolkit"
import songSlice from "./slice/songSlice"
import albumSlice from "./slice/albumSlice"
import artistSlice from "./slice/artistSlice"
export const store = configureStore({
	reducer: {
		songs: songSlice.reducer,
		albums: albumSlice.reducer,
		artists: artistSlice.reducer,
	},
})
