import React, { useState } from "react";
import "./MobileHeader.css";
import { BurgerMenuIcon } from "../icons/BurgerMenuIcon";
import { CrossIcon } from "../icons/CrossIcon";

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
          <div className={"mobile-header-title"}>
            <a className={"logo-link"} href={"/"}>
              <div>
                <div className={"desktop-name"}>{props.name}</div>
                <div className={"desktop-description"}>{props.description}</div>
              </div>
            </a>
            {isOpen ? (
              <CrossIcon onClick={() => setIsOpen((prev) => !prev)} />
            ) : (
              <BurgerMenuIcon onClick={() => setIsOpen((prev) => !prev)} />
            )}
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
            <div className={"mobile-header-info-open-social"}>
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
