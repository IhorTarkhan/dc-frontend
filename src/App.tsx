import React from "react";
import { Header } from "./header/Header";
import { Line1 } from "./divider/Line1";
import { Line2 } from "./divider/Line2";
import { Footer } from "./footer/Footer";

export const App = () => {
  return (
    <>
      {/*<Spinner />*/}
      <Header />
      <Line1 />
      <Line2 />
      <Footer />
    </>
  );
};
