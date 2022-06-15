import React from "react";
import "./MusicPlayerSwitch.css";

type Props = {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  items: { title: string }[];
};

export const MusicPlayerSwitch = (props: Props) => {
  return (
    <div className={"music-player-switch"}>
      <div className={"buttons"}>
        {props.items.map((element, index) => (
          <div
            key={"music-player-element-" + index}
            className={"element"}
            style={{ width: `${100 / props.items.length}%` }}
            onClick={() => props.setSelectedIndex(index)}
          >
            {element.title}
          </div>
        ))}
      </div>
      <div
        className={"line"}
        style={{
          width: `${100 / props.items.length}%`,
          marginLeft: `${(100 / props.items.length) * props.selectedIndex}%`,
        }}
      />
    </div>
  );
};
