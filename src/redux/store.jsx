import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./features/movie/movieSlice";
import userSlice from "./features/user/userSlice";
import { tmbdApi } from "./services/tmdbApi";

const store = configureStore({
  reducer: {
    [tmbdApi.reducerPath]: tmbdApi.reducer,
    user: userSlice,
    movie: movieSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmbdApi.middleware),
});

export default store;
