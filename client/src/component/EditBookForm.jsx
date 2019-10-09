import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

export default class PostForm extends Component {
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
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            className="bg-dark text-white"
            as="select"
            name="category"
            value={this.props.value.category}
            onChange={this.onValueChange}
          >
            <option>HTML/CSS</option>
            <option>JAVASCRIPT</option>
            <option>MONGODB</option>
            <option>NODE</option>
            <option>REACT</option>
            <option>EXPRESS</option>
          </Form.Control>
          <Form.Label>Amazon Link</Form.Label>
          <Form.Control
            className="bg-dark text-white"
            type="text"
            name="link"
            placeholder="Amazon"
            value={this.props.value.link}
            onChange={this.onValueChange}
          />
          <Form.Label>Price</Form.Label>
          <Form.Control
            className="bg-dark text-white"
            type="text"
            name="price"
            placeholder="Price"
            value={this.props.value.price}
            onChange={this.onValueChange}
          />
        </Form.Group>
      </Form>
    );
  }
}
