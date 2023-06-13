import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading/loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const color = "blue";

  useEffect(() => {
    // Simulate a delay of 2 seconds before hiding the loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 20);
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
