import React from "react";
import styled from "styled-components";
import {
  w500ImagePath,
  placeholderImagePath,
} from "../assets/data/tmdbImageConstants";

const Movie = ({ movie }) => {
  return (
    <Wrapper className="movie__card">
      <img
        src={
          movie?.backdrop_path
            ? w500ImagePath + movie?.backdrop_path
            : placeholderImagePath
        }
        alt="logo"
      />
    </Wrapper>
  );
};

export default Movie;

const Wrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  height: 120px;
  width: 210px;
  background: var(--color-primary);
  border-radius: 5px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
