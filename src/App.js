import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./components/Body";
import Home from "./screens/Home";
import TandC from "./screens/TandC";
// const Hero = React.lazy(() => require("./components/Hero"));

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Body>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/termsandcondition"} component={TandC} />
            {/* <Route path={"*"} component={NotFound} /> */}
          </Switch>
        </Body>
        <Footer />
      </Router>
    </>
  );
}

export default App;

const NotFound = () => {
  return <div>Page not found</div>;
};
