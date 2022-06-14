import React, { useEffect, useState } from "react";
import { AudioPlayer } from "./AudioPlayer";
import "./MusicPlayer.css";
import { SongControlLine } from "./SongControlLine";

const SONGS_LIST = [
  {
    name: "Eleven Light Years",
    file: "https://dc.lafox.net/audio/1-ElevenLightYears.m4a",
    time: "8:08",
  },
  {
    name: "Darwin's Cat",
    file: "https://dc.lafox.net/audio/2-DarwinsCat.m4a",
    time: "2:09",
  },
  {
    name: "Cat's Evolution",
    file: "https://dc.lafox.net/audio/3-CatsEvolution.m4a",
    time: "3:30",
  },
  {
    name: "Cat's Winged Bike",
    file: "https://dc.lafox.net/audio/4-CatsWingedBike.m4a",
    time: "4:21",
  },
  {
    name: "How Cat's Civilization Borns",
    file: "https://dc.lafox.net/audio/5-HowCatsCivilizationBorns.m4a",
    time: "3:43",
  },
  {
    name: "Cats Hard Day",
    file: "https://dc.lafox.net/audio/6-CatsHardDay.m4a",
    time: "5:23",
  },
];

export const MusicPlayer = () => {
  const AUDIO_PLAYER_ID = "audio-player";
  const [songs] = useState(SONGS_LIST);
  const [currentPlay, setCurrentPlay] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

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

  useEffect(() => {
    console.log("currentPlay = " + currentPlay);
  }, [currentPlay]);

  return (
    <>
      <AudioPlayer
        id={AUDIO_PLAYER_ID}
        src={songs[currentPlay].file}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={onEnded}
      />
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
    </>
  );
};
