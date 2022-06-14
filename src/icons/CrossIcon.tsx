import React from "react";

type Props = {
  onClick?: () => void;
};

export const CrossIcon = (props: Props) => {
  return (
    <div onClick={props.onClick} style={{ cursor: "pointer" }}>
      <i className={"fa fa-times fa-2x"} />
    </div>
  );
};
