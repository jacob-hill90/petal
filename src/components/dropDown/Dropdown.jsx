import { DropdownIcon } from "./DropdownIcon";
import { useState } from "react";

export const Dropdown = ({ overlayActive, setOverlayActive }) => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <>
      <DropdownIcon
        menuClick={menuClick}
        setMenuClick={setMenuClick}
        overlayActive={overlayActive}
        setOverlayActive={setOverlayActive}
      />
    </>
  );
};
