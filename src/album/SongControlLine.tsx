import React from "react";
import "./SongControlLine.css";
import { ControlButton } from "./ControlButton";

type Props = {
  order: number;
  title: string;
  duration: string;
  isSelected: boolean;
  isPlaying: boolean;
  onClick: () => void;
};

export const SongControlLine = (props: Props) => {
  return (
    <div
      className={`song-control-line ${props.isSelected ? "selected" : ""}`}
      onClick={props.onClick}
    >
      <ControlButton
        order={props.order}
        isSelected={props.isSelected}
        isPlaying={props.isPlaying}
        iconClassName={"icon"}
        numberClassName={"number"}
      />
      <div className={"song-info"}>
        <div className={"song-title"}>{props.title}</div>
        <div className={"song-description"}>{props.duration}</div>
      </div>
    </div>
  );
};
