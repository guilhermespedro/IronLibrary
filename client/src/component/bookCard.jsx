import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class bookCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src={this.props.book.cover} /> img
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title> title
            <Card.Text>{this.props.book.description}</Card.Text> description
            <Button variant="outline-primary">Read the Book</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
