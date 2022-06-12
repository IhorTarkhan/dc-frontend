import React, { useEffect, useState } from "react";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  const links = [
    { title: "News", href: "#news" },
    { title: "Music", href: "#music" },
    { title: "Video", href: "#video" },
    { title: "About", href: "#about" },
  ];

  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 768) {
    return <MobileHeader links={links} className={"mobile-header"} />;
  } else {
    return <DesktopHeader links={links} />;
  }
};
