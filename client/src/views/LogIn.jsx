import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import Cards from "react-bootstrap/Cards";

// import * as AuthenticationServices from "./../services/auth-service";

export default class LogInView extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: ""
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
//     const { email, password } = this.state;
//     AuthenticationServices.logInService({
//       email,
//       password
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

<div class="navi">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-0">
  <a class="navbar-brand" href="#">Iron Library</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto py-md-3">
        <li class="nav-item active">
        <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
      </li> 
    </ul>
  </div>
</nav>
</div>
        <div className="d-flex justify-content-center p-5">
        <Form className="w-25 p-3 block-example border border-dark ">
          <Form.Group size="sm">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Email"
              name="email"
            //   value={this.state.email}
            //   onChange={this.onValueChange}
            />
          </Form.Group>
          <Form.Group size="sm">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Password"
              name="password"
              type="password"
            //   value={this.state.password}
            //   onChange={this.onValueChange}
            />
          </Form.Group>
          <Button type="submit">Log In</Button>
        </Form>
      </div>
      </div>
    );
  }
}