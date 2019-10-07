import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class videoCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "14rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MpnWuJ79-pdYdud1iTnftFXiVPT4yvWnCEwe7P9yWlG7vk6V"
          />
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
