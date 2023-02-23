import React from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useRef } from "react";

const Categories = ({ movieList }) => {
  const movieListRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      movieListRef.current.scrollLeft =
        movieListRef.current.scrollLeft - movieListRef.current.clientWidth;
    } else if (direction === "right") {
      movieListRef.current.scrollLeft =
        movieListRef.current.scrollLeft + movieListRef.current.clientWidth;
    }
  };

  return (
    <Wrapper>
      <button
        className="scroll__icon scroll__icon-left"
        onClick={() => scroll("left")}
      >
        <BsChevronCompactLeft />
      </button>
      <div className="movie__list" ref={movieListRef}>
        {movieList.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
      <button
        className="scroll__icon scroll__icon-right"
        onClick={() => scroll("right")}
      >
        <BsChevronCompactRight />
      </button>
    </Wrapper>
  );
};

export default Categories;

const Wrapper = styled.div`
  position: relative;

  .movie__list {
    display: flex;
    gap: 5px;
    /* overflow-x: scroll; */
    scroll-behavior: smooth;
    margin-top: 0.5rem;

    /* ::-webkit-scrollbar {
      display: none;
    } */
  }

  svg {
    color: var(--color-white);
    font-size: 4rem;
    transition: var(--transition-300);

    :hover {
      transform: scale(1.2);
    }
  }

  .scroll__icon {
    all: unset;
    height: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    opacity: 0;
    cursor: pointer;
    /* overflow: hidden; */
    transition: var(--transition-300);
  }

  .scroll__icon-left {
    background: rgb(99, 99, 99);
    background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    left: 0;
  }
  .scroll__icon-right {
    background: rgb(0, 0, 0);
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    right: 0;
  }

  :hover .scroll__icon {
    display: block;
    opacity: 1;
  }
`;
