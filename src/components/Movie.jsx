import React from "react";
import styled from "styled-components";
import {
  w500ImagePath,
  placeholderImagePath,
} from "../assets/data/tmdbImageConstants";
import Genre from "./Genre";
import {
  BsFillPlayFill,
  BsHeartFill,
  BsChevronDown,
  BsFillStarFill,
} from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

const Movie = ({ movie }) => {
  console.log(movie);

  return (
    <Wrapper>
      <div className="movie-card">
        <div className="movie-card-image">
          <img
            src={
              movie?.backdrop_path
                ? w500ImagePath + movie?.backdrop_path
                : placeholderImagePath
            }
            alt={movie?.title}
          />
        </div>
        <div className="movie-card-content">
          <p className="title">{movie?.title}</p>
          <div className="top">
            <div className="left">
              <button className="action-btn play-action-btn">
                <BsFillPlayFill />
              </button>
              <button className="action-btn">
                <BsHeartFill />
              </button>
              <button className="action-btn">
                <AiFillLike />
              </button>
            </div>
            <div className="right">
              <button className="action-btn">
                <BsChevronDown />
              </button>
            </div>
          </div>
          <div className="mid">
            <span className="votes">{movie?.vote_count} votes</span>
            {movie?.adult && <span className="adult">Adult</span>}
            <span className="language">{movie?.original_language}</span>
            <span className="time">{movie?.release_date}</span>
            <span className="vote">
              <BsFillStarFill />
              <span>{movie?.vote_average}</span>
            </span>
          </div>
          <div className="bottom">
            {movie?.genre_ids?.map((id) => (
              <Genre key={id} genreId={id} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Movie;

const Wrapper = styled.div`
  .movie-card {
    position: relative;
    color: var(--color-white);
    transition: var(--transition-300);
    transition-delay: 0s;
  }

  .movie-card-image {
    height: 120px;
    width: 250px;
    border-radius: 5px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  .movie-card-content {
    position: absolute;

    background: #222;
    padding: 2rem 1rem;
    border-radius: 0 0 5px 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    opacity: 0;
    visibility: hidden;
  }

  .movie-card:hover {
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.3) translateY(-5rem);
    z-index: 100;
    transition-delay: 1s;

    img {
      border-radius: 5px 5px 0 0;
    }

    .movie-card-content {
      box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.5);
      opacity: 1;
      visibility: visible;
      transition-delay: 1s;
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
  }

  .top .action-btn {
    all: unset;
    border: 2px solid #aaa;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.1s ease-in-out;

    :hover {
      border-color: white;
    }
  }

  .top .action-btn.play-action-btn {
    border-color: white;
    background: #222;
    color: black;

    :hover {
      border-color: var(--color-black);
      background: var(--color-black);
    }
  }

  .top .left {
    display: flex;
    gap: 1rem;
  }

  .mid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
  }
  .votes {
    color: #20d430;
  }

  .adult {
    border: 1px solid #aaa;
    padding: 2px 5px;
  }
  .language {
    text-transform: uppercase;
  }

  .vote {
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid #aaa;
    border-radius: 5px;
    padding: 2px 5px;
    display: flex;
    align-items: center;

    svg {
      font-size: 0.8rem;
      margin-right: 1rem;
    }
  }
  .bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    p {
      font-size: 0.8rem;
    }
  }
`;
