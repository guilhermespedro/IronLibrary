import React, { Component, Fragment } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { verify as verifyService } from "./services/authentication-api";

import LogInView from "./views/LogIn";
import SignUpView from "./views/SignUp";
import ProfileView from "./views/UserProfile";
import HomeView from "./views/Home";
import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";
import SingleBookView from "./views/SingleBook";
import SingleVideoView from "./views/SingleVideo";
import LibraryView from "./views/Library";
import BookPopUpView from "./component/bookPopUp";
import CreateBookView from "./views/CreateBook";
import CreateVideoView from "./views/CreateVideo";
import EditBookView from "./views/EditBook";
import EditVideoView from "./views/EditVideo";
import Nav from "./component/Nav";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loaded: false
    };
    this.loadUser = this.loadUser.bind(this);
  }

  loadUser(user) {
    this.setState({
      user
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route
              path="/login"
              render={props => (
                <LogInView {...props} loadUser={this.loadUser} />
              )}
            />
            <Route
              path="/profile/"
              render={props => (
                <ProfileView {...props} exact loadUser={this.loadUser} />
              )}
            />
            <Route path="/createbook" component={CreateBookView} />
            <Route path="/createvideo" component={CreateVideoView} />
            <Route path="/editbook" component={EditBookView} />
            <Route path="/editvideo" component={EditVideoView} />
            <Route
              path="/signup"
              render={props => (
                <SignUpView {...props} exact loadUser={this.loadUser} />
              )}
            />
            <Route path="/library" component={LibraryView} />
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
