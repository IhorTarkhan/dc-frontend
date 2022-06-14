import React from "react";
import { Header } from "./header/Header";
import { Line1 } from "./divider/Line1";
import { Line2 } from "./divider/Line2";
import { Footer } from "./footer/Footer";
import { NewAlbum } from "./new-album/NewAlbum";
import { AboutUs } from "./about-us/AboutUs";
import { Videos } from "./videos/Videos";
import { Blog } from "./blog/Blog";
import { Album } from "./album/Album";

export const App = () => {
  return (
    <>
      {/*<Spinner />*/}
      <Header />
      <NewAlbum />
      <Line1 />
      <AboutUs />
      <Line2 />
      <Album />
      <Line2 />
      {/*<Videos />*/}
      <Line2 />
      <Blog />
      <Line1 />
      <Footer />
    </>
  );
};
