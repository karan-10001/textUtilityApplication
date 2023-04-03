import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(" ");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#36454f";
      showAlert(" : Dark mode has been enabled.", "success");

      setInterval(() => {
        document.title = "Developed by karan";
      }, 1000);

      setInterval(() => {
        document.title = "bookmark it";
      }, 1500);

      setInterval(() => {
        document.title = "Rotext";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" : Light mode has been enabled.", "success");

      setInterval(() => {
        document.title = "Developed by karan";
      }, 1000);

      setInterval(() => {
        document.title = "bookmark it";
      }, 1500);

      setInterval(() => {
        document.title = "Rotext";
      }, 2000);
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Rotext"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            >
              
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
