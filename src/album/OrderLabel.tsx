import React from "react";
import "./OrderLabel.css";
import { PlayIcon } from "../icons/PlayIcon";
import { PauseIcon } from "../icons/PauseIcon";

type Props = {
  order: number;
  isPlaying: boolean;
  handlePlay: () => void;
  handlePause: () => void;
};

export const OrderLabel = (props: Props) => {
  if (props.isPlaying) {
    return (
      <div className={"order-wrapper"} onClick={props.handlePause}>
        <div className={"general"}>
          <PauseIcon />
        </div>
      </div>
    );
  }
  return (
    <div className={"order-wrapper"} onClick={props.handlePlay}>
      <div className={"general order"}>{props.order}</div>
      <div className={"general icon"}>
        <PlayIcon />
      </div>
    </div>
  );
};
