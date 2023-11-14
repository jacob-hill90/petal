import { DropdownIcon } from "./DropdownIcon";
import { useState } from "react";

const Dropdown = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <>
      <DropdownIcon menuClick={menuClick} setMenuClick={setMenuClick} />
    </>
  );
};

export default Dropdown;
