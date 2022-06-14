import React from "react";

type Props = {
  id: string;
  src: string;
  onPlay: () => void;
  onPause: () => void;
  onEnded: () => void;
};

export const AudioPlayer = (props: Props) => {
  return (
    <audio
      id={props.id}
      controls
      onPlay={props.onPlay}
      onPause={props.onPause}
      onEnded={props.onEnded}
      style={{ width: "100%" }}
    >
      <source src={props.src} type={"audio/mp4"} />
      Your browser does not support the audio element.
    </audio>
  );
};
