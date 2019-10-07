import React, { Component } from "react";

import {
  edit as editService,
  verify as verifyService
} from "./../services/authentication-api";

export default class UserProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
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

  render() {
    const user = this.state.user;

    return (
      <div>
        <div className="container p-2 pb-5 m-10 pt-3 mt-5 pb-3">
          <h2>
            <strong>Personal Information</strong>
          </h2>
          <br></br>
          <h4>
            <strong>Name:</strong> {user.name}
          </h4>
          <h4>
            <strong>Email:</strong> {user.email}
          </h4>
          <h4>
            <strong>Country:</strong> {user.country}
          </h4>
          <h4>
            <strong>Phone Number:</strong> {user.phoneNumber}
          </h4>
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
                value={user.name}
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
                value={user.email}
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
                value={user.country}
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
                name="phoneNumber"
                aria-describedby="emailHelp"
                value={user.phoneNumber}
              />
            </div>
            <button className="btn btn-outline-primary btn-lg">Edit</button>
          </form>
        </div>
      </div>
    );
  }
}
