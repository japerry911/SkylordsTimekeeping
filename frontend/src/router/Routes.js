import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/SignIn/SignIn";
import ScrollToTop from "./ScrollToTop";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import ProtectedRoute from "./ProtectedRoute";
import Welcome from "../pages/Welcome/Welcome";
import NotFound from "../pages/NotFound/NotFound";

export default () => (
  <Fragment>
    <ScrollToTop />

    <Route exact path="/" component={Home} />

    <Route exact path="/about" component={About} />

    <Route exact path="/contact" component={Contact} />

    <Route exact path="/sign-in" component={SignIn} />

    <Route exact path="/register-user" component={CreateAccount} />

    <ProtectedRoute exact path="/welcome" component={Welcome} />

    <Route path="*" component={NotFound} />
  </Fragment>
);
