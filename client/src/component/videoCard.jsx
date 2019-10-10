import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReactPlayer from 'react-player';

export default props => (
  <div>
    <Card style={{ width: '14rem' }}>
      {console.log(props)}
      <ReactPlayer
        url={props.video.url}
        width="100%"
        height="10%"
        volume="40%"
      />
      <Card.Body>
        <Card.Title>{props.video.title}</Card.Title>
        <Card.Text>{props.video.duration}</Card.Text>
        <Card.Text>{props.video.category}</Card.Text>
      </Card.Body>
    </Card>
  </div>
);
