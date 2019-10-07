import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class videoCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "14rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Video Title</Card.Title>
            <Card.Text>Video Description</Card.Text>
            <Button variant="outline-primary">Watch the Video</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
