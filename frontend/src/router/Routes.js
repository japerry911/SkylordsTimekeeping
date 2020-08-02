import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/SignIn/SignIn";
import ScrollToTop from "./ScrollToTop";

export default () => (
  <Fragment>
    <ScrollToTop />

    <Route exact path="/" component={Home} />

    <Route exact path="/about" component={About} />

    <Route exact path="/contact" component={Contact} />

    <Route exact path="/sign-in" component={SignIn} />
  </Fragment>
);
