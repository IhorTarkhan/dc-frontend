import React from "react";
import "./Social.css";

type Pops = {
  list: { alt: string; href: string; src: string }[];
};

export const Social = (props: Pops) => {
  return (
    <ul className={"social"}>
      {props.list.map((n, index) => (
        <li key={`social-networks-${index}`} className={"item"}>
          <a className={"link"} href={n.href}>
            <img src={n.src} className={"icon"} alt={n.alt} />
          </a>
        </li>
      ))}
    </ul>
  );
};
