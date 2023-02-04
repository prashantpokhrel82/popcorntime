import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setTrendingMovies } from "../redux/features/movie/movieSlice";
import { useGetMoviesTrendingQuery } from "../redux/services/tmdbApi";
import { ImPlay3 } from "react-icons/im";
import { AiOutlineInfoCircle } from "react-icons/ai";

import {
  originalImagePath,
  placeholderImagePath,
} from "../assets/data/tmdbImageConstants";

const Hero = () => {
  const dispatch = useDispatch();
  const { data, isFetching, isError } = useGetMoviesTrendingQuery();
  if (isFetching) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  console.log(data);
  //   dispatch(setTrendingMovies(data));

  const getRandomTrendingMovie = () => {
    return data.results[Math.floor(Math.random() * data.results.length)];
  };
  const trendingMovie = getRandomTrendingMovie();

  return (
    <Wrapper>
      <div className="hero-wrapper">
        <div className="hero__content">
          <div className="hero__background">
            <img
              src={
                trendingMovie?.backdrop_path
                  ? originalImagePath + trendingMovie?.backdrop_path
                  : placeholderImagePath
              }
              alt={trendingMovie?.original_title}
            />
          </div>
          <div className="hero__fader"></div>
          <div className="hero__left">
            <div className="hero__title-content">
              <h1 className="hero__title">{trendingMovie?.title}</h1>
              <p className="hero__overview">{trendingMovie?.overview}</p>
            </div>
            <div className="hero__actions">
              <button className="btn btn-play">
                <ImPlay3 />
                <span>Play</span>
              </button>
              <button className="btn btn-info">
                <AiOutlineInfoCircle />
                <span>More info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
const Wrapper = styled.div`
  z-index: 1;
  .hero-wrapper {
    height: 56.25vw;
    max-height: 100vh;
  }

  .hero__content {
    position: relative;
    height: 100%;
  }

  .hero__background {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .hero__background::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  }

  .hero__background img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero__fader {
    position: absolute;
    height: 14.7vw;
    width: 100%;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 8%, 0) 0,
      hsla(0, 0%, 8%, 0.15) 15%,
      hsla(0, 0%, 8%, 0.35) 29%,
      hsla(0, 0%, 8%, 0.58) 44%,
      #141414 68%,
      #141414
    );
  }

  .hero__left {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    max-width: 800px;
    padding-left: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  .hero__title-content {
    margin-top: -5rem;
    color: var(--color-white);
  }

  .hero__title {
    font-size: 4rem;
  }

  .hero__overview {
  }

  .hero__actions {
    display: flex;
    gap: 1rem;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: var(--transition);

    svg {
      font-size: 2rem;
    }
  }

  .btn-play {
    background: var(--color-white);
    color: var(--color-black);

    :hover {
      background: rgba(255, 255, 255, 0.8);
    }
  }

  .btn-info {
    background: rgba(109, 109, 110, 0.7);
    color: var(--color-white);

    :hover {
      background: rgba(109, 109, 110, 0.5);
    }
  }
`;
