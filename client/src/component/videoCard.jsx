import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player";

export default class videoCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "14rem" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="10%"
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
