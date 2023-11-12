// Imports
import React, { useState } from "react";
import "./App.css";
// component Imports
// import AboutUs from "./components/AboutUs";
import ImpAlert from "./components/ImpAlert";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
function App() {
  // states
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  // fuctions
  const toggleMode = () => {
    if (mode === "light") {
      // console.log("whtie = dark mode = " + mode);
      setMode("dark");
      document.body.style.background = "black";
      showAlert("dark Mode enabled", "success");
    } else {
      // console.log("dark = white mode = " + mode);
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <ImpAlert alert={alert} />
      <TextForm heading="Enter text to analyze below" mode={mode} />
      {/* <AboutUs/> */}
    </>
  );
}

export default App;
