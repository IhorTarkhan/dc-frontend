import React from "react";
import { Line1 } from "./divider/Line1";
import { Line2 } from "./divider/Line2";
import { Header } from "./header/Header";

export const App = () => {
  return (
    <>
      {/*<Spinner />*/}
      <Header />
      <Line1 />
      <Line2 />
    </>
  );
};
