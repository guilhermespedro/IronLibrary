import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class SignUpView extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: "",
  //       email: "",
  //       password: "",
  //       country: "",
  //       phoneNumber: "",

  //     };
  //     this.onValueChange = this.onValueChange.bind(this);
  //     this.onFormSubmit = this.onFormSubmit.bind(this);
  //   }

  //   onValueChange(event) {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     this.setState({
  //       [name]: value
  //     });
  //   }

  //   onFormSubmit(event) {
  //     event.preventDefault();
  //     const { name, email, password, country, phoneNumber } = this.state;
  //     AuthenticationServices.signUpService({
  //       name,
  //       email,
  //       password,
  //       country,
  //       phoneNumber
  //     })
  //       .then(user => {
  //         this.props.history.push("/profile");
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center p-5">
          <Form className=" w-25 p-3 block-example border border-dark">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                //   placeholder="Name"
                name="name"
                //   value={this.state.name}
                //   onChange={this.onValueChange}
              />
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Email</Form.Label>
              <Form.Control
                //   placeholder="Email"
                name="email"
                //   value={this.state.email}
                //   onChange={this.onValueChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Password</Form.Label>
              <Form.Control
                //   placeholder="Password"
                name="password"
                type="password"
                //   value={this.state.password}
                //   onChange={this.onValueChange}
              />
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Country</Form.Label>
              <Form.Control
                //   placeholder="Country"
                name="country"
                //   value={this.state.country}
                //   onChange={this.onValueChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                //   placeholder="Phone Number"
                name="phoneNumber"
                //   value={this.state.phoneNumber}
                //   onChange={this.onValueChange}
              ></Form.Control>
            </Form.Group>
            <Button type="submit">Sign Up</Button>
          </Form>
        </div>
      </div>
    );
  }
}
