import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { Nav } from "./components/navBar/Nav";
import { FirstContent } from "./components/firstContent/FirstContent";
import { SecondContent } from "./components/secondContent/secondContent";
import { useState } from "react";
import { Overlay } from "./components/overlay/Overlay";
import { Buttons } from "./components/buttons/Buttons";
import { Forms } from "./components/forms/Forms";
import { Login } from "./components/login/Login";
import { Home } from "./components/homepage/Home";
import "./App.css";

function App() {
  const [overlayActive, setOverlayActive] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Overlay overlayActive={overlayActive} />
        <Nav
          overlayActive={overlayActive}
          setOverlayActive={setOverlayActive}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={ROUTES.BUTTONS} element={<Buttons />} />
          <Route path={ROUTES.FORMS} element={<Forms />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
