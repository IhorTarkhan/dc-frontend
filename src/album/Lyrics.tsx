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

  const localeObject = props.songs[props.selectedSongIndex].locale;
  const localeList = Object.keys(localeObject);
  type Locale = typeof localeList[number];
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <div
      className={"song-lyric-wrapper"}
      style={{ height: `${props.songs.length * lineHeight}px` }}
    >
      <div className={"locale-wrapper"}>
        {localeList.map((l, index) => (
          <button
            key={index}
            className={locale === l ? "selected" : ""}
            onClick={() => setLocale(l)}
          >
            {l}
          </button>
        ))}
      </div>
      {/* @ts-ignore */}
      {localeObject[locale]}
    </div>
  );
};
