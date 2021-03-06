import React from "react";

type Props = {
  onClick?: () => void;
};

export const BurgerMenuIcon = (props: Props) => {
  return (
    <div onClick={props.onClick} style={{ cursor: "pointer" }}>
      <i className={"fa fa-bars fa-2x"} />
    </div>
  );
};
