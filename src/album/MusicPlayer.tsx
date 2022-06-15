import React, { useState } from "react";
import { AudioPlayer } from "./AudioPlayer";
import { SONGS_LIST } from "../consts";
import { MusicPlayerSwitch } from "./MusicPlayerSwitch";
import { SongsList } from "./SongsList";

export const MusicPlayer = () => {
  const AUDIO_PLAYER_ID = "audio-player";
  const [songs] = useState(SONGS_LIST);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedSongIndex, setSelectedSongIndex] = useState<number>(0);
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const getPlayer = () => {
    return document.getElementById(AUDIO_PLAYER_ID)!;
  };

  const onClickSongWithIndex = (index: number) => {
    if (index !== selectedSongIndex) {
      playFromStart(index);
    }
    if (index === selectedSongIndex && isPlaying) {
      pause();
    }
    if (index === selectedSongIndex && !isPlaying) {
      play();
    }
  };

  const play = () => {
    // @ts-ignore
    getPlayer().play();
    setIsPlaying(true);
  };

  const playFromStart = (songIndex: number) => {
    setSelectedSongIndex(songIndex);
    setIsPlaying(true);
    const player = getPlayer();
    const source = player.children[0];
    source.setAttribute("src", songs[songIndex].file);
    // @ts-ignore
    player.currentTime = 0;
    // @ts-ignore
    player.load();
    // @ts-ignore
    player.play();
  };

  const pause = () => {
    // @ts-ignore
    getPlayer().pause();
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleEnded = () => {
    playFromStart((selectedSongIndex + 1) % songs.length);
  };

  const tabs = [
    {
      header: { title: "Songs" },
      component: (
        <SongsList
          songs={songs}
          isPlaying={isPlaying}
          selectedIndex={selectedSongIndex}
          onClick={onClickSongWithIndex}
        />
      ),
    },
    {
      header: { title: "Lyrics" },
      component: (
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
          {songs[selectedSongIndex].locale.en}
        </div>
      ),
    },
  ];

  return (
    <>
      <h2>{songs[selectedSongIndex].name}</h2>
      <AudioPlayer
        id={AUDIO_PLAYER_ID}
        src={songs[selectedSongIndex].file}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
      />
      <MusicPlayerSwitch
        selectedIndex={selectedTabIndex}
        setSelectedIndex={setSelectedTabIndex}
        items={tabs.map((tab) => tab.header)}
      />
      {tabs.map((tab) => tab.component)[selectedTabIndex]}
    </>
  );
};
