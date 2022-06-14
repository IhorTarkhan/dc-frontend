import React from "react";
import "./SongControlLine.css";
import { OrderLabel } from "./OrderLabel";

type Props = {
  order: number;
  title: string;
  duration: string;
  isCurrent: boolean;
  isPlaying: boolean;
  handlePlay: () => void;
  handlePause: () => void;
};

export const SongControlLine = (props: Props) => {
  return (
    <div className={`song-control-line ${props.isCurrent ? "selected" : ""}`}>
      <OrderLabel
        order={props.order}
        isPlaying={props.isCurrent && props.isPlaying}
        handlePlay={props.handlePlay}
        handlePause={props.handlePause}
      />
      <div className={"song-info"}>
        <div className={"song-title"}>{props.title}</div>
        <div className={"song-description"}>{props.duration}</div>
      </div>
    </div>
  );
};
