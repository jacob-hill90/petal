import LogoPetal from "../../assets/petal.png";
import "./style.css";

export const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img
        src={LogoPetal}
        className="logo"
        onClick={() => window.location.reload()}
      ></img>
    </div>
  );
};
