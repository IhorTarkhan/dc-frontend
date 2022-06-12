import React from "react";
import facebook from "../img/social-networks/sprite-facebook.svg";
import twitter from "../img/social-networks/sprite-twitter.svg";
import youtube from "../img/social-networks/sprite-youtube.svg";
import instagram from "../img/social-networks/instagram.svg";
import { Social } from "./Social";

export const SocialNetworks = () => {
  const networks = [
    {
      alt: "Facebook",
      href: "https://www.facebook.com/DarwinsCat",
      src: facebook,
    },
    {
      alt: "Twitter",
      href: "https://twitter.com/DarwinsCatBand",
      src: twitter,
    },
    {
      alt: "YouTube",
      href: "https://www.youtube.com/channel/UC8N7DecGLYGuDL1odJMivdA",
      src: youtube,
    },
    {
      alt: "Instagram",
      href: "https://www.instagram.com/darwinscatband/",
      src: instagram,
    },
  ];

  return <Social list={networks} />;
};
