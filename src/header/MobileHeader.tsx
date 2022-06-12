import React, { useState } from "react";
import "./MobileHeader.css";

type Props = {
  name: string;
  description: string;
  links: { title: string; href: string }[];
};

export const MobileHeader = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header
        className={
          isOpen ? "mobile-header-wrapper-close" : "mobile-header-wrapper-open"
        }
      >
        <div className={"mobile-header"}>
          {/* site-header--open */}
          <div className={"mobile-header-title"}>
            <a className={"logo-link"} href={"/"}>
              <div>
                <div className={"desktop-name"}>{props.name}</div>
                <div className={"desktop-description"}>{props.description}</div>
              </div>
            </a>
            <button
              className="navigation__toggle-menu"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="navigation__toggle-line">
                <span className="visually-hidden">Show menu</span>
              </span>
            </button>
          </div>
          <div
            className={
              isOpen ? "mobile-header-info-open" : "mobile-header-info-close"
            }
          >
            <nav>
              <ul className={"menu-list"}>
                {props.links.map((link, index) => (
                  <li key={`menu-list-${index}`}>
                    <a className={"menu-item"} href={link.href}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <div>social_networks_wo_likes</div>
              {/*<include src="source/sections/blocks/social_networks_wo_likes.html"></include>*/}
              <div>music_services</div>
              {/*<include src="source/sections/blocks/music_services.html"></include>*/}
            </div>
          </div>
        </div>
      </header>
      <div style={{ height: "60px" }} />
    </>
  );
};
