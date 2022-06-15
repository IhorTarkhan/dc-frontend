import React from "react";
import "./Album.css";
import { SocialNetworks } from "../social/SocialNetworks";
import { MusicServices } from "../social/MusicServices";
import logo from "../img/darwins-cat.png";
import { MusicPlayer } from "./MusicPlayer";

export const Album = () => {
  return (
    <div className={"album"}>
      <div className={"wrapper"}>
        <img className={"image"} src={logo} alt={"Album"} />
      </div>
      <div className={"wrapper"}>
        <MusicServices />
        <h2 className={"title"}>2020-1</h2>
        <MusicPlayer />
        <div className={"social-networks"}>
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
};
