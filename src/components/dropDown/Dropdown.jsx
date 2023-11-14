import { DropdownIcon } from "./DropdownIcon";
import { useState } from "react";

export const Dropdown = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <>
      <DropdownIcon menuClick={menuClick} setMenuClick={setMenuClick} />
    </>
  );
};
