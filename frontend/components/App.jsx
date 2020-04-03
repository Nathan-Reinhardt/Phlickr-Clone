import React from "react";
import { Route, Switch } from "react-router-dom";

import SplashContainer from "./splash/splash_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import PhotostreamContainer from "./profile/profile_tabs/photostream_container";
import CameraUploadContainer from "./profile/profile_tabs/camera_upload_container";
import StatsTabContainer from "./profile/profile_tabs/stats_tab_container";
import GroupsContainer from "./profile/profile_tabs/groups_container";
import GalleriesContainer from "./profile/profile_tabs/galleries_container";
import FavesContainer from "./profile/profile_tabs/faves_tab_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact={true} path="/" component={SplashContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact={true} path="/photos/:userId" component={PhotostreamContainer} />
      <ProtectedRoute exact={true} path="/photos/:userId/favorites" component={FavesContainer} />
      <ProtectedRoute exact={true} path="/photos/:userId/galleries" component={GalleriesContainer} />
      <ProtectedRoute exact={true} path="/photos/:userId/stats" component={StatsTabContainer} />
      <ProtectedRoute path="/cameraroll" component={CameraUploadContainer} />
      <ProtectedRoute path="/groups" component={GroupsContainer} />
    </Switch>
  </div>
);

export default App;