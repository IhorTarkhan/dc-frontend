import React from "react";
import "./MobileFooter.css";

type Props = {
  name: string;
  description: string;
};

export const MobileFooter = (props: Props) => {
  return (
    <footer className={"mobile-footer"}>
      <div>
        <div className={"name"}>{props.name}</div>
        <div className={"description"}>{props.description}</div>
      </div>
    </footer>
  );
};
