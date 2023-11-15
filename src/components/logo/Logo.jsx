import LogoPetal from "../../assets/petal.png";
import "./style.css";

export const Logo = ({ logoHeight }) => {
  return (
    <div className="logo-wrapper">
      <a href="/">
        <img
          src={LogoPetal}
          className="logo"
          style={{ height: `${logoHeight}rem` }}
        ></img>
      </a>
    </div>
  );
};
