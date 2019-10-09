import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

export default class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.props.onValueChange({
      [name]: value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Group className="title">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={this.props.value.name}
            onChange={this.onValueChange}
          />
        </Form.Group>
        <Form.Group className="title">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={this.props.value.email}
            onChange={this.onValueChange}
          />
        </Form.Group>
        <Form.Group className="title">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="country"
            placeholder="Country"
            value={this.props.value.country}
            onChange={this.onValueChange}
          />
        </Form.Group>
        <Form.Group className="title">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={this.props.value.phoneNumber}
            onChange={this.onValueChange}
          />
        </Form.Group>
        {this.props.children}
      </Form>
    );
  }
}
