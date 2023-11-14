import clsx from "clsx";
import "./style.css";

export const Overlay = ({ overlayActive }) => {
  return (
    <div
      className={clsx("overlay-container", {
        ["overlay-container-clicked"]: overlayActive,
      })}
    >
      This is the overlay container
    </div>
  );
};
