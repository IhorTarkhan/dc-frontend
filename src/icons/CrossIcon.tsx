import React from "react";
import "./CrossIcon.css";

type Props = {
  onClick: () => void;
};

export const CrossIcon = (props: Props) => {
  return (
    <div className={"is-cross"}>
      <div className={"cross"} onClick={props.onClick}>
        <span className={"cross-main-line"}>
          <span className={"cross-additional-lines"}>Show menu</span>
        </span>
      </div>
    </div>
  );
};
