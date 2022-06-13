import React, { useEffect, useState } from "react";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";

export const Footer = () => {
  const name = "Darwin`s Cat";
  const description = "Sci-Fi Rock Band";

  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width < 768) {
    return <MobileFooter name={name} description={description} />;
  }
  return <DesktopFooter name={name} description={description} />;
};
