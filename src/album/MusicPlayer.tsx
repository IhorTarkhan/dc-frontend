import React, { useEffect, useState } from "react";
import { AudioPlayer } from "./AudioPlayer";
import "./MusicPlayer.css";
import { SongControlLine } from "./SongControlLine";
import { SONGS_LIST } from "../consts";

export const MusicPlayer = () => {
  const AUDIO_PLAYER_ID = "audio-player";
  const [songs] = useState(SONGS_LIST);
  const [currentPlay, setCurrentPlay] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [select, setSelect] = useState<"songs" | "lyrics">("songs");
  const [locale, setLocale] = useState<"en" | "uk" | "ru">("en");

  const getPlayer = () => {
    return document.getElementById(AUDIO_PLAYER_ID)!;
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const play = (index: number) => {
    setIsPlaying(true);
    if (index === currentPlay) {
      // @ts-ignore
      getPlayer().play();
    } else {
      playFromStart(index);
    }
  };

  const pause = () => {
    // @ts-ignore
    getPlayer().pause();
    setIsPlaying(false);
  };

  const playFromStart = (index: number) => {
    setCurrentPlay(index);
    setIsPlaying(true);
    const player = getPlayer();
    const source = player.children[0];
    source.setAttribute("src", songs[index].file);
    // @ts-ignore
    player.currentTime = 0;
    // @ts-ignore
    player.load();
    // @ts-ignore
    player.play();
  };

  const onEnded = () => {
    playFromStart((currentPlay + 1) % songs.length);
  };

  const getLineMarginLeft = () => {
    if (select === "songs") {
      return "0%";
    }
    if (select === "lyrics") {
      return "50%";
    }
  };

  useEffect(() => {
    fetch("/txt/1_en.txt")
      .then((response) => response.text())
      .then((text) => console.log(text));
  }, [currentPlay]);

  return (
    <>
      <h2>{songs[currentPlay].name}</h2>
      <AudioPlayer
        id={AUDIO_PLAYER_ID}
        src={songs[currentPlay].file}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={onEnded}
      />
      <div className={"songs-lyrics-switch"}>
        <div className={"buttons"}>
          <div className={"element"} onClick={() => setSelect("songs")}>
            Songs
          </div>
          <div className={"element"} onClick={() => setSelect("lyrics")}>
            Lyrics
          </div>
        </div>
        <div className={"line"} style={{ marginLeft: getLineMarginLeft() }} />
      </div>
      {select === "songs" ? (
        <div className={"song-list"}>
          {songs.map((song, index) => (
            <SongControlLine
              key={"song-line-" + index}
              order={index + 1}
              title={song.name}
              duration={song.time}
              isCurrent={index === currentPlay}
              isPlaying={isPlaying}
              handlePlay={() => play(index)}
              handlePause={pause}
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            height: `${songs.length * 70 + 20}px`,
            padding: "10px 0",
            overflowY: "scroll",
            width: "100%",
            overflowWrap: "break-word",
            whiteSpace: "pre-line",
            backgroundColor: "rgba(0,0,0,.35)",
            fontWeight: 300,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {songs[currentPlay].locale[locale]}
        </div>
      )}
    </>
  );
};
