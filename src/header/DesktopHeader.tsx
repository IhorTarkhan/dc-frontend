import React from "react";
import "./DesktopHeader.css";
import logo from "../img/sprite-site-logo.png";

type Props = {
  name: string;
  description: string;
  links: { title: string; href: string }[];
};

export const DesktopHeader = (props: Props) => {
  return (
    <header className={"desktop-header"}>
      <a className={"desktop-logo-link"} href={"/"}>
        <img src={logo} className={"desktop-logo"} alt={"Logo"} />
        <div>
          <div className={"desktop-name"}>{props.name}</div>
          <div className={"desktop-description"}>{props.description}</div>
        </div>
      </a>
      <nav>
        <ul className={"desktop-menu-list"}>
          {props.links.map((link, index) => (
            <li key={`menu-list-${index}`}>
              <a className={"desktop-menu-item"} href={link.href}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
