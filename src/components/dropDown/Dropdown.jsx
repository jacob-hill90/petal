import { DropdownIcon } from "./DropdownIcon";
import { useState, useEffect } from "react";

export const Dropdown = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <>
      <DropdownIcon menuClick={menuClick} setMenuClick={setMenuClick} />
    </>
  );
};
