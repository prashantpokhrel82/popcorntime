import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const tmdbApiToken = process.env.REACT_APP_TMDB_API_TOKEN;
const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;
const apiQuery = `?api_key=${tmdbApiKey}`;

// console.log(apiQuery);

export const tmbdApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3/`,
    prepareHeaders: (headers) => {
      // headers.set("Authorization", `Bearer ${tmdbApiToken}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovieByMovieId: builder.query({
      query: (id) => `movie/${id}`, //76341
    }),
    getMoviesTrending: builder.query({
      query: () => `/movie/now_playing${apiQuery}`,
    }),
    getMoviesAllGenres: builder.query({
      query: () => `/genre/movie/list${apiQuery}`,
    }),
    getMoviesByGenre: builder.query({
      query: (genreId) => `/discover/movie${apiQuery}&with_genres=${genreId}`,
    }),
  }),
});

export const {
  useGetMovieByMovieIdQuery,
  useGetMoviesTrendingQuery,
  useGetMoviesAllGenresQuery,
  useGetMoviesByGenreQuery,
} = tmbdApi;
