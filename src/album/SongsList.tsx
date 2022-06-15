import React from "react";
import { SongControlLine } from "./SongControlLine";
import { SongDetails } from "../consts";

type Props = {
  songs: SongDetails[];
  isPlaying: boolean;
  selectedIndex: number;
  onClick: (index: number) => void;
};

export const SongsList = (props: Props) => {
  return (
    <>
      {props.songs.map((song, index) => (
        <SongControlLine
          key={"song-line-" + index}
          order={index + 1}
          title={song.name}
          duration={song.time}
          isSelected={index === props.selectedIndex}
          isPlaying={props.isPlaying}
          onClick={() => props.onClick(index)}
        />
      ))}
    </>
  );
};
