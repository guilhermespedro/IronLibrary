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
import LibraryView from "./views/Library";
import BookPopUpView from "./component/bookPopUp";
import CreateBookView from "./views/CreateBook";
import CreateVideoView from "./views/CreateVideo";
import EditBookView from "./views/EditBook";
import EditVideoView from "./views/EditVideo";
import Nav from "./component/Nav";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/login" component={LogInView} />
            <Route path="/userprofile" component={UserProfileView} />
            <Route path="/adminprofile" component={AdminProfileView} />
            <Route path="/createbook" component={CreateBookView} />
            <Route path="/createvideo" component={CreateVideoView} />
            <Route path="/editbook" component={EditBookView} />
            <Route path="/editvideo" component={EditVideoView} />
            <Route path="/signup" component={SignUpView} />
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
