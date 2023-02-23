import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingMovies: [],
  movieGenres: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setTrendingMovies: (state, { payload }) => {
      state.trendingMovies = payload;
    },
    setMovieGenres: (state, { payload }) => {
      state.movieGenres = payload;
    },
  },
});

export const getMovieGenreByGenreId = (store, id) =>
  store.movie.movieGenres.find((genre) => genre.id === id);

export default movieSlice.reducer;
export const { setTrendingMovies, setMovieGenres } = movieSlice.actions;
