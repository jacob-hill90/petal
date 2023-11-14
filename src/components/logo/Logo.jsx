import LogoPetal from "../../assets/petal.png";
import "./style.css";

export const Logo = () => {
  return (
    <div className="logo-wrapper">
      <div className="logo-text">Petal</div>
      <img src={LogoPetal} className="logo"></img>
    </div>
  );
};
