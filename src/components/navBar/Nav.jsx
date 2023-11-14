import { useEffect, useState } from "react";
import { Logo } from "../Logo/Logo";
import "./style.css";
import Dropdown from "../dropDown/Dropdown";

export const Nav = () => {
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
      <Dropdown />
      <div className="nav-link-container">
        <a className="nav-link" href="/about">
          About
        </a>
        <a className="nav-link" href="/blog">
          Blog
        </a>
        <a className="nav-link" href="/forms">
          Forms
        </a>
      </div>
    </div>
  );
};
