import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { logIn as logInService } from "./../services/authentication-api";

export default class LogInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
    const { email, password } = this.state;
    logInService({
      email,
      password
    })
      .then(user => {
        this.props.history.push("/profile");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center p-5">
          <Form
            className="w-25 p-3 block-example border border-dark "
            onSubmit={this.onFormSubmit}
          >
            <Form.Group size="sm">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onValueChange}
              />
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onValueChange}
              />
            </Form.Group>
            <Button type="submit">Log In</Button>
          </Form>
        </div>
      </div>
    );
  }
}
