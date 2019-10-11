import React, { Component } from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import ProtectedRoute from './component/ProtectedRoute';
import {
  verify as verifyService,
  logOut as logOutService
} from './services/authentication-api';

import LogInView from './views/LogIn';
import SignUpView from './views/SignUp';
import ProfileView from './views/UserProfile';
import HomeView from './views/Home';
import ErrorView from './views/Error';
import SingleBookView from './views/SingleBook';
import SingleVideoView from './views/SingleVideo';
import LibraryView from './views/Library';
import CreateBookView from './views/CreateBook';
import CreateVideoView from './views/CreateVideo';

import BookPopUpView from './component/bookPopUp';
import Nav from './component/Nav';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loaded: false
    };
    this.loadUser = this.loadUser.bind(this);
    this.verifyAuthenticated = this.verifyAuthenticated.bind(this);
    this.verifyUnauthenticated = this.verifyUnauthenticated.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    verifyService()
      .then(user => {
        this.setState({
          ...(user && { user }),
          loaded: true
        });
      })
      .catch(error => {
        this.setState({
          loaded: true
        });
        console.log(error);
      });
  }

  loadUser(user) {
    this.setState({
      user
    });
  }

  logOut(event) {
    event.preventDefault();
    logOutService()
      .then(() => {
        this.setState({
          user: null
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  verifyAuthenticated() {
    return !!this.state.user;
  }

  verifyUnauthenticated() {
    return !this.state.user;
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav user={this.state.user} logOut={this.logOut} />
          {this.state.loaded && (
            <Switch>
              <Route path="/" exact component={HomeView} />
              <ProtectedRoute
                path="/login"
                verify={this.verifyUnauthenticated}
                render={props => (
                  <LogInView {...props} exact loadUser={this.loadUser} />
                )}
              />
              <ProtectedRoute
                path="/profile/"
                component={ProfileView}
                verify={this.verifyAuthenticated}
              />
              <ProtectedRoute
                verify={this.verifyAuthenticated}
                path="/createbook"
                component={CreateBookView}
              />
              <ProtectedRoute
                verify={this.verifyAuthenticated}
                path="/createvideo"
                component={CreateVideoView}
              />
              <ProtectedRoute
                path="/signup"
                verify={this.verifyUnauthenticated}
                render={props => (
                  <SignUpView {...props} exact loadUser={this.loadUser} />
                )}
              />
              <ProtectedRoute
                path="/library"
                component={LibraryView}
                verify={this.verifyAuthenticated}
              />
              <ProtectedRoute
                path="/singlebook/:isbn"
                verify={this.verifyAuthenticated}
                render={props => (
                  <SingleBookView {...props} exact loadUser={this.loadUser} />
                )}
              />
              <ProtectedRoute
                path="/singlevideo/:id"
                verify={this.verifyAuthenticated}
                render={props => (
                  <SingleVideoView {...props} exact loadUser={this.loadUser} />
                )}
              />
              <Route path="/bookpopup" component={BookPopUpView} />
              <Route path="/error/:code" component={ErrorView} />
              <Redirect path="/" to="/error/404" />
            </Switch>
          )}
        </Router>
      </div>
    );
  }
}
