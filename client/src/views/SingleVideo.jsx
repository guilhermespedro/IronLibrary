import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class SingleVideo extends Component {
  render() {
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
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Description : Some quick example text to build on the card
                  title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {/* <ListGroupItem>Description</ListGroupItem> */}
                <ListGroupItem>Category</ListGroupItem>
                <ListGroupItem>Year</ListGroupItem>
                <ListGroupItem>ISBN</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Buy now 14.50€</Card.Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
