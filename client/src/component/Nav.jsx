import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { withRouter } from 'react-router';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = props => {
  console.log(props);
  return (
    <div>
      <div className="navi">
        <Nav className="navbar navbar-expand-lg navbar-dark bg-custom-2 mt-0">
          <Link className="navbar-brand" to="/">
            Iron Library
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex flex-row collapse navbar-collapse justify-content-end">
              {(!props.user && (
                <Fragment>
                  <Link to="/login" className="btn-login">
                    Log In
                  </Link>
                  <Link to="/signup" className="btn-signup">
                    Sign Up
                  </Link>
                </Fragment>
              )) || (
                <Fragment>
                  {props.user.role === 'admin' && (
                    <NavDropdown title="Create" id="nav-dropdown">
                      <NavDropdown.Item eventKey="1">
                        <Link to="/createbook">Add Book</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.2">
                        <Link to="/createvideo">Add Video</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                  <Link to="/profile" className="btn-profile mr-2">
                    Profile
                  </Link>
                  <Link to="/library" className="btn-signup">
                    Library{' '}
                  </Link>
                  <Button className="ml-4" onClick={props.logOut} type="submit">
                    Log Out
                  </Button>
                </Fragment>
              )}
            </div>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
