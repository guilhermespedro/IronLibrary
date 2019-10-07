import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { edit as editService } from "../services/book-api";
import { remove as removeService } from "../services/book-api";

export default class SingleBook extends Component {
  render() {
    const book = this.props.book;
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
                <Card.Title>title</Card.Title>
                {/* {book.title} */}
                <Card.Text>description</Card.Text>
                {/* {book.description} */}
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>category</ListGroupItem>
                {/* {book.category} */}
                <ListGroupItem>year</ListGroupItem>
                {/* {book.year} */}
                <ListGroupItem>isbn</ListGroupItem>
                {/* {book.isbn} */}
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
