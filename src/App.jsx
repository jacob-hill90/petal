import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { Nav } from "./components/NavBar/Nav";
import { useState } from "react";
import { Overlay } from "./components/Overlay/Overlay";
import { Buttons } from "./components/Buttons/Buttons";
import { Forms } from "./components/Forms/Forms";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
import "./App.css";

function App() {
  const [overlayActive, setOverlayActive] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Overlay overlayActive={overlayActive} />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.BUTTONS} element={<Buttons />} />
          <Route path={ROUTES.FORMS} element={<Forms />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
