import React, { Component } from "react";

export default class bookCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Book Title</Card.Title>
            <Card.Text>Book Description</Card.Text>
            <Button variant="primary">Read the Book</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
