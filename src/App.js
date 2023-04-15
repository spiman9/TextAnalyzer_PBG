import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Footer from "./components/Footer";
import { useState } from "react";
import Alert from "./components/Alert";

// react router dom

function App() {
  const [alert, setalert] = useState(null);
  function prepareAlert(msg, type) {
    setalert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  const [mode, setmode] = useState("dark");
  function toggle() {
    if (mode === "white") {
      setmode("dark");
      prepareAlert("Light Mode Done", "success");
      document.body.style.background = "white";
      document.body.style.color = "black";

      setInterval(() => {
        document.title = `TextUtils - ${mode} Mode`;
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils for better experience";
      }, 1500);
    } else {
      document.body.style.background = "black";
      document.body.style.color = "white";
      setmode("white");
      prepareAlert("Dark Mode Done", "primary");
      document.title = "TextUtils - Dark Mode";
    }
  }

  return (
    <>
      <div>
        <Navbar
          title="TextAnalyzer_PBG"
          firstLink="AboutUs"
          secondLink="Contact"
          link="/home"
          mode={mode}
          toggle={toggle}
        />
        <Alert alert={alert} />
          <div className="container">
              <TextForm
                heading="Enter the text to analze below"
                showAlert={prepareAlert}
              />
            </div>
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
