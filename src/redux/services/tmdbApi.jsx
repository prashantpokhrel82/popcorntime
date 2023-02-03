import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiToken = process.env.REACT_APP_TMDB_API_TOKEN;

export const tmbdApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3/`,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${tmdbApiToken}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovieByMovieId: builder.query({
      query: (id) => `movie/76341`,
    }),
  }),
});

export const { useGetMovieByMovieIdQuery } = tmbdApi;