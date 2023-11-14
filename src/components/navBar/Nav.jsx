import { Logo } from "../logo/Logo";
import { Dropdown } from "../dropDown/Dropdown";
import "./style.css";

export const Nav = ({ overlayActive, setOverlayActive }) => {
  return (
    <div className="navBarWrapper">
      <Logo />
      <Dropdown
        overlayActive={overlayActive}
        setOverlayActive={setOverlayActive}
      />
    </div>
  );
};
