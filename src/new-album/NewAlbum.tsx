import React from "react";
import "./NewAlbum.css";
import { SocialNetworks } from "../social/SocialNetworks";
import { MusicServices } from "../social/MusicServices";
import logo from "../img/darwins-cat.png";

export const NewAlbum = () => {
  return (
    <div className={"new-album"}>
      <div className={"wrapper"}>
        <img className={"image"} src={logo} alt={"New Album"} />
      </div>
      <div className={"wrapper"}>
        <MusicServices />
        <h2 className={"title"}>2020 Album</h2>
        <p className={"text"}>
          Our first album contains stories about who is Darwin's Cat, how Cat's
          Civilisation borns, a story about Cat's evolution process, long story
          about what Darwin's Cat saw when he returned to the cat's civilisation
          mother planet, and how Cats got Wings. And, of course, what usually
          cyber cats do and how they interact with Humans. Verbal terms of the
          tales are adapted to be understandable for Humans.
        </p>
        <a className={"read-more"} href={"#music.html"}>
          Listen music
        </a>
        <div className={"social-networks"}>
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
};
