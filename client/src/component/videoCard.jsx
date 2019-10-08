import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import "node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";

export default class videoCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "14rem" }}>
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
          {/* <Card.Img
            variant="top"
            src="https://www.youtube.com/watch?v=Ke90Tje7VS0"
          /> */}
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
