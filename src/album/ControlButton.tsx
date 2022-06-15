import React from "react";
import "./ControlButton.css";
import { PlayIcon } from "../icons/PlayIcon";
import { PauseIcon } from "../icons/PauseIcon";

type Props = {
  order: number;
  isSelected: boolean;
  isPlaying: boolean;
  iconClassName: string;
  numberClassName: string;
};

export const ControlButton = (props: Props) => {
  if (props.isSelected && props.isPlaying) {
    return (
      <div className={"order-area"}>
        <PauseIcon />
      </div>
    );
  }

  if (props.isSelected && !props.isPlaying) {
    return (
      <div className={"order-area"}>
        <PlayIcon />
      </div>
    );
  }

  return (
    <div>
      <div className={`order-area ${props.numberClassName}`}>{props.order}</div>
      <div className={`order-area img ${props.iconClassName}`}>
        <PlayIcon />
      </div>
    </div>
  );
};
