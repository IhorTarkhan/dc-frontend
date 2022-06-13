import React from "react";
import "./NewAlbum.css";
import { SocialNetworks } from "../social/SocialNetworks";
import { MusicServices } from "../social/MusicServices";
import logo from "../img/darwins-cat.png";

export const NewAlbum = () => {
  return (
    <div className="new-album">
      <div className="new-album__wrapper">
        <img
          className="new-album__image image"
          loading="lazy"
          src={logo}
          alt="New Album"
        />
      </div>
      <div className="new-album__wrapper">
        <MusicServices />
        <h2 className="new-album__title title">2020 Album</h2>
        <p className="new-album__text text">
          Our first album contains stories about who is Darwin's Cat, how Cat's
          Civilisation borns, a story about Cat's evolution process, long story
          about what Darwin's Cat saw when he returned to the cat's civilisation
          mother planet, and how Cats got Wings. And, of course, what usually
          cyber cats do and how they interact with Humans. Verbal terms of the
          tales are adapted to be understandable for Humans.
        </p>
        <a className="new-album__button button" href="#music.html">
          Read more
        </a>

        <SocialNetworks />
      </div>
    </div>
  );
};
