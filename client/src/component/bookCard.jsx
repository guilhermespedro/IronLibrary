import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default props => (
  <Card className="bookcard" bg="info" text="light" style={{ width: '14rem' }}>
    <pre></pre>
    <Card.Img
      variant="top"
      src={props.book.thumbnail.replace('zoom=1', 'zoom=0.5')}
    />
    <Card.Body>
      <Card.Title className="p-0 m-0">{props.book.title}</Card.Title>
      <Card.Text className="p-0 m-0">€ {props.book.price}</Card.Text>
      <Card.Text className="p-0 m-0">{props.book.category}</Card.Text>
    </Card.Body>
  </Card>
);
