import React, { useState, useEffect } from "react";
import "./App.css";

import About from "./components/About.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Loading from "./components/Loading/loading.js";
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const color = "blue";

  useEffect(() => {
    // Simulate a delay of 2 seconds before hiding the loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <>
          <NavBar color={color} />
          <Header color={color} />
          <About color={color} />
          <Experience color={color} />
          <Projects color={color} />
          <Contact color={color} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
