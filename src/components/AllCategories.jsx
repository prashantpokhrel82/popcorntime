import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setMovieGenres } from "../redux/features/movie/movieSlice";
import {
  useGetMoviesAllGenresQuery,
  useGetMoviesByGenreQuery,
} from "../redux/services/tmdbApi";
import Error from "./Error";
import Loading from "./Loading";
import CategoryList from "./CategoryList";

const AllCategories = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetMoviesAllGenresQuery();
  useEffect(() => {
    dispatch(setMovieGenres(data?.genres));
  }, [data]);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Wrapper>
      {data?.genres &&
        data?.genres.map((genre) => {
          return <CategoryList key={genre.id} genre={genre} />;
        })}
    </Wrapper>
  );
};

export default AllCategories;

const Wrapper = styled.div`
  margin-top: -8rem;
  padding: 0 4rem;
  z-index: 100;
`;
