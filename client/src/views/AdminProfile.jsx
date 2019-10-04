import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class AdminProfileView extends Component {
  render() {
    return (
      <div>
        <div class="container p-2 pb-5 m-10 pt-3 mt-5 pb-3">
          <h2>
            <strong>Personal Information</strong>
          </h2>
          <br></br>
          <h4>
            <strong>Name:</strong> user.name{" "}
          </h4>
          <h4>
            <strong>Email:</strong> user.email{" "}
          </h4>
          <h4>
            <strong>Password:</strong> user.password{" "}
          </h4>
        </div>

        <div class="container p-2 m-10">
          <form action="/admin-profile" method="POST">
            <div class="form-group">
              <label for="name">
                <strong>Name</strong>
              </label>
              <input
                type="name"
                class="form-control"
                id="name"
                name="name"
                value="user.name"
              />
            </div>

            <div class="form-group">
              <label for="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                value="seller.email"
              />
            </div>
            <div class="form-group">
              <label for="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                value="user.password"
              />
            </div>
            <div class="form-group">
              <button class="btn btn-outline-primary btn-lg">Edit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
