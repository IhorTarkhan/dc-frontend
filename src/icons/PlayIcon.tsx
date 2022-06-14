import React from "react";

type Props = {
  onClick?: () => void;
};

export const PlayIcon = (props: Props) => {
  return (
    <div onClick={props.onClick} style={{ cursor: "pointer" }}>
      <i className={"fa fa-play fa-2x"} />
    </div>
  );
};
