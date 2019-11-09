import React from "react";
import NavBar from "./navbar/navbar";
import SplashContainer from "./splash/splash_container";
import LogoDetailBar from "./navbar/logo_bar";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { AuthRoute } from "../util/route_util";
import { Route } from "react-router";

const App = () => (
  <div className="app-container">
    <div className="back-ground">
      <Route exact={true} path="/" component={NavBar} />
      <Route exact={true} path="/" component={SplashContainer} />
    </div>
    <div className="back-ground-session">
      <Route exact={true} path="/login" component={LogoDetailBar}/>
      <Route exact={true} path="/signup" component={LogoDetailBar}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  </div>
);

export default App;