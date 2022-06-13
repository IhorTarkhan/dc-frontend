import React, { useEffect, useState } from "react";
import "./Videos.css";

type VideoInfo = {
  youtubeId: string;
};

export const Videos = () => {
  const [videos, setVideos] = useState<VideoInfo[]>([]);
  const [nextPage, setNextPage] = useState<number>(1);

  const getVideos = (page: number) => {
    fetch("https://dc.lafox.net/api/videos?count=4&page=" + page)
      .then((r) => r.json())
      .then((r) => setVideos((prev) => prev.concat(r.videos)));
  };

  const loadNewVideos = () => {
    getVideos(nextPage);
    setNextPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    getVideos(0);
  }, []);

  return (
    <div className={"videos"}>
      <h2 className={"title"}>Our videos</h2>
      <div className={"video-wrapper"}>
        {videos.map((video, index) => (
          <div key={"video-" + index} className={"video-item"}>
            <iframe
              width={"100%"}
              height={"100%"}
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={"YouTube video player"}
              allow={
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              }
              allowFullScreen
            />
          </div>
        ))}
      </div>
      <div className={"read-more-wrapper"}>
        <button className={"read-more"} onClick={loadNewVideos}>
          Show more
        </button>
      </div>
    </div>
  );
};
