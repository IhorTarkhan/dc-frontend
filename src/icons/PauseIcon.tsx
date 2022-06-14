import React from "react";

type Props = {
  onClick?: () => void;
};

export const PauseIcon = (props: Props) => {
  return (
    <div onClick={props.onClick} style={{ cursor: "pointer" }}>
      <i className={"fa fa-pause fa-1x"} />
    </div>
  );
};
