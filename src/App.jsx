import { useState } from "react";
import { Nav } from "./components/navBar/Nav";
import { FirstContent } from "./components/firstContent/FirstContent";
import { SecondContent } from "./components/secondContent/secondContent";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <FirstContent />
      <SecondContent />
    </>
  );
}

export default App;
