import LogoPetal from "../../assets/petal.png";
import "./style.css";

export const Logo = ({ logoHeight }) => {
  let link = window.location.origin;

  return (
    <div className="logo-wrapper">
      <img
        src={LogoPetal}
        className="logo"
        style={{ height: `${logoHeight}rem` }}
        onClick={() => (window.location = link)}
      ></img>
    </div>
  );
};
