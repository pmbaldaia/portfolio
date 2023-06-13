import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Experience from "../src/components/Experience";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Loading from "../src/components/Loading/loading";
import NavBar from "../src/components/NavBar";
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
