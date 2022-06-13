import React from "react";
import "./BurgerMenuIcon.css";

type Props = {
  onClick?: () => void;
};

export const BurgerMenuIcon = (props: Props) => {
  return (
    <div className={"burger"} onClick={props.onClick}>
      <span className={"main-line"}>
        <span className={"additional-lines"}>Show menu</span>
      </span>
    </div>
  );
};
