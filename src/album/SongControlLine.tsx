import React from "react";
import "./SongControlLine.css";

type Props = {
  order: number;
  title: string;
  duration: string;
};
export const SongControlLine = (props: Props) => {
  return (
    <div className={"song-control-line"}>
      <div className={"order"}>{props.order}</div>
      <div className={"song-info"}>
        <div className={"song-title"}>{props.title}</div>
        <div className={"song-description"}>{props.duration}</div>
      </div>
    </div>
  );
};
