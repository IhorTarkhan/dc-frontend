import React from "react";
import { Header } from "./header/Header";
import { Line1 } from "./divider/Line1";
import { Line2 } from "./divider/Line2";
import { Footer } from "./footer/Footer";
import { NewAlbum } from "./new-album/NewAlbum";
import { AboutUs } from "./about-us/AboutUs";
import { Videos } from "./videos/Videos";

export const App = () => {
  return (
    <>
      {/*<Spinner />*/}
      <Header />
      <NewAlbum />
      <Line1 />
      <AboutUs />
      <Line2 />
      album
      <Line2 />
      <Videos />
      <Line2 />
      images
      <Line1 />
      <Footer />
    </>
  );
};
