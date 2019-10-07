import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { edit as editService } from "./../services/authentication-api";

export default class UserProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const { name, email, password, country, phonenumber } = this.state;
    editService({
      name,
      email,
      country,
      phonenumber
    })
      .then(user => {
        this.props.loadUser(user);
        // this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        {JSON.stringify(this.state.user)}
        <div className="container p-2 pb-5 m-10 pt-3 mt-5 pb-3">
          <h2>
            <strong>Personal Information</strong>
          </h2>
          <br></br>
          {this.props.user && (
            <div>
              <h4>
                <strong>Name:</strong> {this.props.user.name}
              </h4>
              <h4>{/* <strong>Email:</strong> {this.props.user.email} */}</h4>
              <h4>
                {/* <strong>Password:</strong> {this.props.user.password} */}
              </h4>
              <h4>
                {/* <strong>Country:</strong> {this.props.user.country} */}
              </h4>
              <h4>
                {/* <strong>Phone Number:</strong> {this.props.user.phonenumber} */}
              </h4>
            </div>
          )}
        </div>
        <div className="container p-2 m-10">
          <form action="/user-profile" method="POST">
            <div className="form-group">
              <label htmlFor="phonenumber">
                <strong>Name</strong>
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                name="name"
                value={this.props.user ? this.props.user.name : ""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                value="{{user.email}}"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                aria-describedby="emailHelp"
                value="{{user.password}}"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">
                <strong>Country</strong>
              </label>
              <input
                type="country"
                className="form-control"
                id="country"
                name="country"
                aria-describedby="emailHelp"
                value="{{user.country}}"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phonenumber">
                <strong>Phone Number</strong>
              </label>
              <input
                type="phonenumber"
                className="form-control"
                id="phonenumber"
                name="phonenumber"
                aria-describedby="emailHelp"
                value="{{user.phonenumber}}"
              />
            </div>
            <button className="btn btn-outline-primary btn-lg">Edit</button>
          </form>
        </div>
      </div>
    );
  }
}
