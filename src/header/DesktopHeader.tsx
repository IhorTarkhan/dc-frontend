import React from "react";
import "./DesktopHeader.css";
import logo from "../img/sprite-site-logo.png";

type Props = {
  links: { title: string; href: string }[];
};

export const DesktopHeader = (props: Props) => {
  return (
    <header className={"header"}>
      <a className={"logo-link"} href={"/"}>
        <img src={logo} className={"logo"} alt={"Logo"} />
        <div>
          <div className={"name"}>Darwin`s Cat</div>
          <div className={"description"}>Sci-Fi Rock Band</div>
        </div>
      </a>
      <ul className={"menu-list"}>
        {props.links.map((link, index) => (
          <li key={`menu-list-${index}`}>
            <a className={"menu-item"} href={link.href}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
