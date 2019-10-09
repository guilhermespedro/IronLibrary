import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player";
import { edit as editService } from "../services/video-api";
import { remove as removeService } from "../services/video-api";

export default class SingleVideo extends Component {
  render() {
    const video = this.props.video;
    return (
      <div className="d-flex justify-content-center p-5">
        <Card style={{ width: "50rem" }}>
          <Row>
            <Col>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                width="100%"
                height="100%"
                volume="40%"
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>title</Card.Title> 
                {/* {video.title} */}
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>description</ListGroupItem>
                {/* {video.description} */}
                <ListGroupItem>category</ListGroupItem>
                {/* {video.category} */}
                <ListGroupItem>url</ListGroupItem>
                {/* {video.url} */}
              </ListGroup>
              <Card.Body>
                {/* <Button variant="primary">BUY NOW</Button> */}
              </Card.Body>
              <Card.Body>
                <Button variant="outline-success">Edit</Button>
                <Button variant="outline-danger">Delete</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
