import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";

import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  const [navDark, setNavDark] = useState(false);
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavDark(window.scrollY > 50);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const AvatarMenu = () => {
    return (
      <div
        className={showAvatarMenu ? "avatar__menu show" : "avatar__menu"}
        onMouseLeave={() => setShowAvatarMenu(false)}
      >
        <a>Signout of Popcorn Time</a>
      </div>
    );
  };

  return (
    <Wrapper className="container">
      <div className={navDark ? "nav-wrapper dark" : "nav-wrapper"}>
        <div className="nav__content">
          <div className="nav__left">
            <div className="nav__logo">
              <img src={logo} alt="logo" />
            </div>
            <nav className="nav__menu">
              <ul className="nav__menu-items">
                <li className="nav__menu-item active">Home</li>
                <li className="nav__menu-item">TvShows</li>
                <li className="nav__menu-item">Movies</li>
                <li className="nav__menu-item">New & Popular</li>
                <li className="nav__menu-item">My List</li>
                <li className="nav__menu-item">Browse by Languages</li>
              </ul>
            </nav>
          </div>
          <div className="nav__right">
            <div className="search__wrapper">
              <div className="search__container"></div>
              <div className="search__icon">
                <AiOutlineSearch />
              </div>
            </div>
            <div
              className="avatar__container"
              onMouseEnter={() => setShowAvatarMenu(true)}
            >
              <div className="avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <div className="drop__avatar">
                <AiFillCaretDown />
              </div>
              {showAvatarMenu && <AvatarMenu />}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  .nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 4rem;
    background: transparent;
    transition: background 0.3s ease;
  }

  .nav-wrapper.dark {
    background: var(--color-black);
  }

  .nav__content {
    display: flex;
    justify-content: space-between;
  }

  .nav__left {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav__logo {
    width: 4rem;
  }

  .nav__logo img {
    width: 100%;
    aspect-ratio: 1/1;
  }

  .nav__menu {
  }

  .nav__menu-items {
    display: flex;
    gap: 1rem;
  }

  .nav__menu-item {
    font-size: 14px;
    color: var(--color-white);
    opacity: 1;
    cursor: pointer;
    transition: var(--transition-300);

    :hover {
      opacity: 0.7;
    }
  }

  .nav__menu-item.active {
    font-weight: 600;
  }

  .nav__right {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: var(--color-white);
  }

  .search__wrapper {
  }

  .search__container {
  }

  .search__icon {
    margin-top: 5px;
    font-size: 1.5rem;
  }

  .avatar__container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    .drop__avatar svg {
      font-size: 14px;
      transition: var(--transition-300);
    }

    :hover .drop__avatar svg {
      transform: rotate(180deg);
    }
  }

  .avatar {
    height: 2rem;
    width: 2rem;
    border-radius: 5px;
  }

  .avatar img {
    width: 100%;
    border-radius: 5px;
  }

  .avatar__menu {
    position: absolute;
    bottom: -5rem;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    padding: 1rem;
    display: none;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    a {
      color: var(--color-white);
      text-align: center;
      border-bottom: 1px solid transparent;
      transition: var(--transition-300);

      :hover {
        border-bottom: 1px solid var(--color-white);
      }
    }
  }
`;
