import React from "react";
import bandCamp from "../img/music-services/bandcamp.svg";
import soundcloud from "../img/music-services/soundcloud.svg";
import spotify from "../img/music-services/sprite-spotify.svg";
import itunes from "../img/music-services/sprite-itunes.svg";
import youtube from "../img/music-services/sprite-youtube.svg";
import { Social } from "./Social";

export const MusicServices = () => {
  const services = [
    {
      alt: "Spotify",
      href: "https://open.spotify.com/album/7LG5dwS4n9SQ4dCCGYmYEv",
      src: spotify,
    },
    {
      alt: "Apple Music",
      href: "https://music.apple.com/ua/album/darwins-cat-ep/1515753475",
      src: itunes,
    },
    {
      alt: "YouTube Music",
      href: "https://music.youtube.com/playlist?list=OLAK5uy_k-MI3n6Xz9Cilu1fb_nKtQDE3o95Gx8YA",
      src: youtube,
    },
    {
      alt: "BandCamp",
      href: "https://darwinscat.bandcamp.com/releases",
      src: bandCamp,
    },
    {
      alt: "SoundCloud",
      href: "https://soundcloud.com/darwinscat/albums",
      src: soundcloud,
    },
  ];

  return <Social list={services} />;
};
