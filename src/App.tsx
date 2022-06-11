import React from "react";
import image from "./img/image.svg";
import "./App.css";

export const App = () => {
  return (
    <div className={"App"}>
      <header className={"App-header"}>
        <img src={image} className={"App-logo"} alt={"image"} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={"App-link"}
          href={"https://reactjs.org"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
