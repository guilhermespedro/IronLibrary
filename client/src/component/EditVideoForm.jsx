import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

export default class EditVideoForm extends Component {
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
          <Form.Label>Title</Form.Label>
          <Form.Control
            className="bg-dark text-white"
            type="text"
            name="title"
            placeholder="Title"
            value={this.props.value.title}
            onChange={this.onValueChange}
          />
          <Form.Label>Duration</Form.Label>
          <Form.Control
            className="bg-dark text-white"
            type="text"
            name="duration"
            placeholder="Duration"
            value={this.props.value.duration}
            onChange={this.onValueChange}
          />
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
        </Form.Group>
      </Form>
    );
  }
}
