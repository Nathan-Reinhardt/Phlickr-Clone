import React from "react";
import NavBar from "./navbar/navbar";
import Splash from "./splash/splash";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { AuthRoute } from "../util/route_util";
import { Route } from "react-router";

const App = () => (
  <div className="app-container">
    <div className="back-ground">
      <Route exact={true} path="/" component={NavBar} />
      <Route exact={true} path="/" component={Splash} />
    </div>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;