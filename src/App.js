import "./App.css";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <TextForm heading = "Enter text to analyze below"/>
    </>
  );
}

export default App;
