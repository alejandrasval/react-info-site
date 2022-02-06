import { useState } from "react";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }
  return (
    <div className="container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer />
    </div>
  );
}

export default App;
