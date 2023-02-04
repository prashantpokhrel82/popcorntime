import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingMovies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setTrendingMovies: (state, { payload }) => {
      state.trendingMovies = payload;
    },
  },
});

export default movieSlice.reducer;
export const { setTrendingMovies } = movieSlice.actions;
