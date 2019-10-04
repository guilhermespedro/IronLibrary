import React, { Component, Fragment } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LogInView from "./views/LogIn";
import SignUpView from "./views/SignUp";
import UserProfileView from "./views/UserProfile";
import AdminProfileView from "./views/AdminProfile";
import HomeView from "./views/Home";
import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";
import SingleBookView from "./views/SingleBook";
import SingleVideoView from "./views/SingleVideo";
import BookPopUpView from "./component/bookPopUp";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/login" component={LogInView} />
            <Route path="/userprofile" component={UserProfileView} />
            <Route path="/adminprofile" component={AdminProfileView} />
            <Route path="/signup" component={SignUpView} />
            <Route path="/singlebook" component={SingleBookView} />
            <Route path="/singlevideo" component={SingleVideoView} />
            <Route path="/bookpopup" component={BookPopUpView} />
            <Route path="/error/:code" component={ErrorView} />
            <Route path="/" component={CatchAllView} />
          </Switch>
        </Router>
      </div>
    );
  }
}
