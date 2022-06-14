import React from "react";

type Props = {
  id: string;
  src: string;
  onEnded: () => void;
};

export const AudioPlayer = (props: Props) => {
  return (
    <audio
      id={props.id}
      controls
      onEnded={props.onEnded}
      style={{ width: "100%" }}
    >
      <source src={props.src} type={"audio/mp4"} />
      Your browser does not support the audio element.
    </audio>
  );
};
