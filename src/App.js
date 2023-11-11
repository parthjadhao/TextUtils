import "./App.css";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      // console.log("whtie = dark mode = " + mode);
      document.body.style.background = "black"
      setMode("dark");
    } else {
      // console.log("dark = white mode = " + mode);
      setMode("light");
      document.body.style.background = "white"
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter text to analyze below" mode={mode} />
      {/* <AboutUs/> */}
    </>
  );
}

export default App;
