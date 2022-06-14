import React, { useEffect, useState } from "react";
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
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onRootClick = () => {
    if (width >= 768) {
      return undefined;
    } else {
      if (props.isCurrent && props.isPlaying) {
        return props.handlePause;
      } else {
        return props.handlePlay;
      }
    }
  };

  return (
    <div
      className={`song-control-line ${props.isCurrent ? "selected" : ""}`}
      onClick={onRootClick()}
    >
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
