import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/navbar";
// import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      {/* <TextForm heading = "Enter text to analyze below"/> */}
      <AboutUs/>
    </>
  );
}

export default App;
