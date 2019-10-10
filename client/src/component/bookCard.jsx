import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default props => (
  <Card style={{ width: '14rem' }}>
    <Card.Img
      variant="top"
      src={props.book.thumbnail.replace('zoom=1', 'zoom=0.5')}
    />
    <Card.Body>
      <Card.Title>{props.book.title}</Card.Title>
      <Card.Text>{props.book.category}</Card.Text>
    </Card.Body>
  </Card>
);
