import React from "react";
import "./CrossIcon.css";

type Props = {
  onClick?: () => void;
};

export const CrossIcon = (props: Props) => {
  return (
    <div className={"cross"} onClick={props.onClick}>
      <span className={"main-line"}>
        <span className={"additional-lines"}>Close menu</span>
      </span>
    </div>
  );
};
