import clsx from "clsx";
import "./style.css";

export const DropdownIcon = ({
  menuClick,
  setMenuClick,
  overlayActive,
  setOverlayActive,
}) => {
  const handleMenuClick = () => {
    setMenuClick(!menuClick);
    setOverlayActive(!overlayActive);
  };
  return (
    <>
      <div
        className={clsx("dropdown-container", {
          ["dropdown-container-clicked"]: menuClick,
        })}
        onClick={handleMenuClick}
      >
        <div
          className={clsx("menu-bar one", {
            ["one-clicked"]: menuClick,
          })}
        ></div>
        <div
          className={clsx("menu-bar two", {
            ["two-clicked"]: menuClick,
          })}
        ></div>
        <div
          className={clsx("menu-bar three", {
            ["three-clicked"]: menuClick,
          })}
        ></div>
      </div>
    </>
  );
};
