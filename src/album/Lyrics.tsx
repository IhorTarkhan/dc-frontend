import React, { useEffect, useState } from "react";
import "./Lyrics.css";
import { SongDetails } from "../consts";

type Props = {
  songs: SongDetails[];
  selectedSongIndex: number;
};

export const Lyrics = (props: Props) => {
  const getLineHeight = () => {
    if (window.innerWidth < 768) {
      return 50;
    } else {
      return 70;
    }
  };

  const [lineHeight, setLineHeight] = useState<number>(getLineHeight());

  useEffect(() => {
    const update = () => () => setLineHeight(getLineHeight());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className={"song-lyric"}
      style={{ height: `${props.songs.length * lineHeight}px` }}
    >
      {props.songs[props.selectedSongIndex].locale.en}
    </div>
  );
};
