'use strict';

import React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default props => (
  <Card bg="dark" text="white" className="d-flex flex-row p">
    <Card.Img
      className="rounded"
      variant="top"
      src={props.book.volumeInfo.imageLinks.thumbnail.replace(
        'zoom=1',
        'zoom=0.5'
      )}
    />

    <Card.Body>
      <Card.Title className="d-flex align-items-center font-weight-light">
        <h1>{props.book.volumeInfo.title}</h1>
      </Card.Title>
      <Card.Title>Description:</Card.Title>
      <Card.Text>{props.book.volumeInfo.description}</Card.Text>
      <Card.Text>
        <strong>Published: </strong>
        {props.book.volumeInfo.publishedDate}
      </Card.Text>
      <Card.Text>
        <Row>
          <Col>
            <strong>Authors:</strong>
          </Col>
          <Col>
            {props.book.volumeInfo.authors.map(author => (
              <ul key={author}>{author}</ul>
            ))}
          </Col>
        </Row>
      </Card.Text>
    </Card.Body>
  </Card>
);
