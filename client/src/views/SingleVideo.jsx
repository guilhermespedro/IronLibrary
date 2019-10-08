import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default class SingleVideo extends Component {
  render() {
    const video = this.props.video;
    return (
      <div className="d-flex justify-content-center p-5">
        <Card style={{ width: "50rem" }}>
          <Row>
            <Col>
              <Card.Img
                variant="top"
                src="https://s2982.pcdn.co/wp-content/uploads/2014/08/HP_hc_new_6.jpeg"
              />
            </Col>
            <Col>
              <Card.Body>
                {/* <Card.Title>{video.title}</Card.Title> */}
              </Card.Body>
              <ListGroup className="list-group-flush">
                {/* <ListGroupItem>{video.description}</ListGroupItem> */}
                {/* <ListGroupItem>{video.category}</ListGroupItem> */}
                {/* <ListGroupItem>{video.url}</ListGroupItem> */}
              </ListGroup>
              <Card.Body>
                <Button variant="primary">BUY NOW</Button>
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
