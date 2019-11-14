import React from "react";
import SplashContainer from "./splash/splash_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import PhotosIndexContainer from "./photos/photos_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact={true} path="/" component={SplashContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/photos" component={PhotosIndexContainer} />
    </Switch>
  </div>
);

export default App;