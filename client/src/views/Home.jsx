import React, { Component } from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import LogIn from "./LogIn"


export default class HomeView extends Component {
  render() {
    return (
      <div>



        <div>
        <Link to="/login" className="btn btn-danger">
          Log In
        </Link>
        <Link to="/signup" className="btn btn-primary">
          Sign Up
        </Link>
      </div>

 
      
      

      </div>
    );
  }
}
