import React, { useState, useEffect } from "react";
import "./App.css";

import Loading from "./components/Loading/loading.js";
import Navbar from "./components/NavBar.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const color = "blue";

  useEffect(() => {
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
          <Navbar color={color} />
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
