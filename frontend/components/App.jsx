import React from "react";
import SplashContainer from "./splash/splash_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import PhotosIndexContainer from "./photos/photos_index_container";
import PhotoShowContainer from "./photos/photo_show_container";
import ProfileShowContainer from "./profile/profile_show_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact={true} path="/" component={SplashContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact={true} path="/photos" component={PhotosIndexContainer} />
      <ProtectedRoute path="/photos/:photoId" component={PhotoShowContainer} />
      <ProtectedRoute path="/people/:userId" component={ProfileShowContainer} />
    </Switch>
  </div>
);

export default App;