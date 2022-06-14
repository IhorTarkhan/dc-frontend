import React from "react";
import "./Album.css";
import { SocialNetworks } from "../social/SocialNetworks";
import { MusicServices } from "../social/MusicServices";
import logo from "../img/darwins-cat.png";
import { AudioPlayer } from "./AudioPlayer";
import { MusicPlayer } from "./MusicPlayer";

export const Album = () => {
  const songs = [
    {
      name: "Eleven Light Years",
      file: "1-ElevenLightYears.m4a",
      time: "8:08",
    },
    { name: "Darwin's Cat", file: "2-DarwinsCat.m4a", time: "2:09" },
    { name: "Cat's Evolution", file: "3-CatsEvolution.m4a", time: "3:30" },
    { name: "Cat's Winged Bike", file: "4-CatsWingedBike.m4a", time: "4:21" },
    {
      name: "How Cat's Civilization Borns",
      file: "5-HowCatsCivilizationBorns.m4a",
      time: "3:43",
    },
    { name: "Cats Hard Day", file: "6-CatsHardDay.m4a", time: "5:23" },
  ];

  return (
    <div className={"album"}>
      <div className={"wrapper"}>
        <img className={"image"} src={logo} alt={"New Album"} />
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
