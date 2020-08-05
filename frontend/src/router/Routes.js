import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/SignIn/SignIn";
import ScrollToTop from "./ScrollToTop";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import ProtectedRoute from "./ProtectedRoute";
import Welcome from "../pages/Welcome/Welcome";
import NotFound from "../pages/NotFound/NotFound";
import Clocking from "../pages/Clocking/Clocking";
import History from "../pages/History/History";
import Upload from "../pages/Upload/Upload";

export default () => (
  <Fragment>
    <ScrollToTop />
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/about" component={About} />

      <Route exact path="/contact" component={Contact} />

      <Route exact path="/sign-in" component={SignIn} />

      <Route exact path="/register-user" component={CreateAccount} />

      <Route exact path="/welcome/:userId" component={Welcome} />

      <ProtectedRoute exact path="/clocking/:userId" component={Clocking} />

      <ProtectedRoute exact path="/history/:userId" component={History} />

      <ProtectedRoute exact path="/upload/:userId" component={Upload} />

      <Route component={NotFound} />
    </Switch>
  </Fragment>
);
