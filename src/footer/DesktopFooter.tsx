import React from "react";
import "./DesktopFooter.css";
import { SocialNetworks } from "../social/SocialNetworks";
import { MusicServices } from "../social/MusicServices";

type Props = {
  name: string;
  description: string;
};

export const DesktopFooter = (props: Props) => {
  return (
    <footer className={"desktop-footer"}>
      <div className={"element-wrapper left-element-wrapper"}>
        <div className={"desktop-name"}>{props.name}</div>
        <div className={"desktop-description"}>{props.description}</div>
      </div>
      <div className={"element-wrapper center-element-wrapper"}>
        <SocialNetworks />
      </div>
      <div className={"element-wrapper right-element-wrapper"}>
        <MusicServices />
      </div>
    </footer>
  );
};
