import React from "react";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <div className={"about-us"}>
      <h2 className={"title"}>Darwin's Cat is...</h2>
      <p className={"text"}>
        Darwin's Cat is Sci-Fi-Rock <b>Music Band</b>( "nerd", "geek", etc..)
      </p>
      <p className={"text"}>
        Darwin's Cat plays songs based on tales about Civilisation of Cats, who
        lived on Earth about 115,000 years ago and later populated Outer Space
      </p>
      <p className={"text"}>
        We know the tales that cats told about their civilization and about
        their kind, and we are happy to retell them in our songs. Verbal terms
        of the tales were adapted to be understandable for Humans.
      </p>
      <a className={"read-more"} href={"#about.html"}>
        Read more
      </a>
    </div>
  );
};
