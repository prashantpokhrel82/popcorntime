import React from "react";
import { useGetMoviesByGenreQuery } from "../redux/services/tmdbApi";
import styled from "styled-components";
import Categories from "./Categories";
import Loading from "./Loading";
import Error from "./Error";

const CategoryList = ({ genre }) => {
  const { data, isLoading, isError } = useGetMoviesByGenreQuery(genre.id);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return (
    <Wrapper>
      <p className="category__title">{genre.name}</p>
      <Categories movieList={data?.results} />
    </Wrapper>
  );
};

export default CategoryList;

const Wrapper = styled.div`
  margin-top: 3rem;

  p {
    color: var(--color-white);
    position: relative;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
