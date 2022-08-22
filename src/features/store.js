import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movies/mvoieSlice'

export const store = configureStore({
    reducer: {
        movies: movieReducer,
    },
});