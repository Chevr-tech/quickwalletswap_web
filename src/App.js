import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Download from "./components/Download";
import User from "./components/User";
import Body from "./components/Body";
import Market from "./components/Market";
// const Hero = React.lazy(() => require("./components/Hero"));

function App() {
  return (
    <>
      <Navbar />
      <Body>
        <Hero />
        <Services />
        <Download />
        <User />
        <Market />
      </Body>

      <Footer />
    </>
  );
}

export default App;
