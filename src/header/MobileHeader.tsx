import React from "react";
import "./MobileHeader.css";
import logo from "../img/sprite-site-logo.png";

type Props = {
  className: string;
  links: { title: string; href: string }[];
};

export const MobileHeader = (props: Props) => {
  return (
    <div className={props.className}>
      <header className="site-header no-js__site-header ">
        <nav className="navigation">
          <a className="navigation__logo-link" href="/" aria-label="Main">
            <img
              src={logo}
              width="65"
              height="65"
              alt="Logo"
              className="navigation__logo-image"
            />
            <div className="navigation__logo-wrapper">
              <span className="navigation__logo-name">Darwin`s Cat</span>
              <span className="navigation__logo-desc">Sci-Fi Rock Band</span>
            </div>
          </a>
          <button
            className="navigation__toggle-menu"
            type="button"
            aria-label="Show menu"
          >
            <span className="navigation__toggle-line">
              <span className="visually-hidden">Show menu</span>
            </span>
          </button>
          <ul className="site-menu__list">
            <li className="site-menu__item">
              <a className="site-menu__link" href="#news">
                News
              </a>
            </li>
            <li className="site-menu__item">
              <a className="site-menu__link" href="music.html">
                Music
              </a>
            </li>
            <li className="site-menu__item">
              <a className="site-menu__link" href="video.html">
                Video
              </a>
            </li>
            <li className="site-menu__item">
              <a className="site-menu__link" href="about.html">
                About
              </a>
            </li>
          </ul>
          {/*<div>social_networks_wo_likes</div>*/}
          {/*<include src="source/sections/blocks/social_networks_wo_likes.html"></include>*/}
          {/*<div>music_services</div>*/}
          {/*<include src="source/sections/blocks/music_services.html"></include>*/}
        </nav>
      </header>
    </div>
  );
};
