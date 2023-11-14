import { Logo } from "../logo/Logo";
import { Dropdown } from "../dropDown/Dropdown";
import { useEffect, useState } from "react";
import "./style.css";

export const Nav = ({ overlayActive, setOverlayActive }) => {
  const [navbarHeight, setNavbarHeight] = useState(92);
  const [logoHeight, setLogoHeight] = useState(4);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const newHeight = Math.max(50, 92 - window.scrollY * 0.5);
    setNavbarHeight(newHeight);
    const newLogoHeight = Math.max(3, 4 - window.scrollY * 0.01);
    setLogoHeight(newLogoHeight);
  };

  return (
    <div className="navBarWrapper" style={{ height: `${navbarHeight}px` }}>
      <Logo logoHeight={logoHeight} />
      <Dropdown
        overlayActive={overlayActive}
        setOverlayActive={setOverlayActive}
      />
    </div>
  );
};
