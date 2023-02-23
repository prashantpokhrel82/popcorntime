import React from "react";
import { useSelector } from "react-redux";
import { getMovieGenreByGenreId } from "../redux/features/movie/movieSlice";

const Genre = ({ genreId }) => {
  const movieGenre = useSelector((store) =>
    getMovieGenreByGenreId(store, genreId)
  );

  return <p>{movieGenre.name}</p>;
};

export default Genre;
