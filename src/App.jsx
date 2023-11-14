import { Nav } from "./components/navBar/Nav";
import { FirstContent } from "./components/firstContent/FirstContent";
import { SecondContent } from "./components/secondContent/secondContent";
import { useState } from "react";
import { Overlay } from "./components/overlay/Overlay";
import "./App.css";

function App() {
  const [overlayActive, setOverlayActive] = useState(false);
  return (
    <>
      <Overlay overlayActive={overlayActive} />
      <Nav overlayActive={overlayActive} setOverlayActive={setOverlayActive} />
      <FirstContent />
      <SecondContent />
    </>
  );
}

export default App;
