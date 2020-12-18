import React from "react";

import Navbar from "./Components/Reuseable/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Blog from "./Components/Blog";
import Donate from "./Components/Donate";
import Contact from "./Components/Contact";
import Cause from "./Components/Cause";
//import Contact from "./Components/Contact";
//import Pricing from "./Components/Pricing";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/blog" component={Blog} />
        <Route path="/cause" component={Cause} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/donate" component={Donate} />
      </Switch>
    </Router>
  );
}

export default App;
