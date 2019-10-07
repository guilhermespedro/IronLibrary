import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class bookCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.book.url} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.description}</Card.Text>
            <Button variant="primary">Read the Book</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
