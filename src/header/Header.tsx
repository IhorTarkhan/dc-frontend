import React, { useEffect, useState } from "react";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  const name = "Darwin`s Cat";
  const description = "Sci-Fi Rock Band";
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

  if (width < 768) {
    return <MobileHeader name={name} description={description} links={links} />;
  }
  return <DesktopHeader name={name} description={description} links={links} />;
};
