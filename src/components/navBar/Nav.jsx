import { useState, useEffect } from "react";
import { Logo } from "../logo/Logo";
import { Dropdown } from "../dropDown/Dropdown";
import "./style.css";

export const Nav = () => {
  return (
    <div className="navBarWrapper">
      <Logo />
      <Dropdown />
    </div>
  );
};
