import React from "react";
import NavBar from "./navbar/navbar";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { AuthRoute } from "../util/route_util";
import { Route } from "react-router";

const App = () => (
  <div className="app-container">
    <Route exact={true} path="/" component={NavBar} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;