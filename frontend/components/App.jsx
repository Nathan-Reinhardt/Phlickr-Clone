import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { AuthRoute } from "../util/route_util";
import { Link } from "react-router-dom";

const App = () => (
  <div className="app-container">
    <header className="main-nav">
      <nav className="left-nav">
        <Link className="site-title" to="/">phlickr</Link>
      </nav>
      <div className="search-box-container">
        <label className="magsearch">H</label>
        <input className="search-text-box" type="text" value=""/>
      </div>
      <nav className="right-nav">
        <GreetingContainer />
      </nav>
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;