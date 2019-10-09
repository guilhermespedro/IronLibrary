import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ReactPlayer from 'react-player';

import EditVideoForm from './../component/EditVideoForm';

import {
  edit as editVideoApi,
  remove as removeVideoApi,
  load as loadVideoApi
} from '../services/video-api';

import { verify as verifyService } from './../services/authentication-api';

export default class SingleVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      user: null,
      loaded: false,
      id: null
    };
    this.deleteVideo = this.deleteVideo.bind(this);
    this.onFormValueChange = this.onFormValueChange.bind(this);
    // this.onEditBook = this.onEditBook.bind(this);
  }

  loadVideo() {
    loadVideoApi(this.props.match.params.id)
      .then(video => {
        this.setState({ video });
      })
      .catch(error => {
        this.props.history.push('/library');
      });
  }

  componentDidMount() {
    this.loadVideo();
    verifyService()
      .then(user => {
        this.setState({
          ...(user && { user }),
          loaded: true
        });
      })
      .catch(error => {
        this.setState({
          loaded: true
        });
        console.log(error);
      });
  }

  onFormValueChange(data) {
    this.setState({
      video: {
        ...this.state.video,
        ...data
      }
    });
  }

  deleteVideo() {
    removeVideoApi(this.state.video._id)
      .then(video => {
        this.props.history.push('/library');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const video = this.state.video;
    const user = this.state.user;
    console.log(video);
    return (
      <div className="d-flex justify-content-center p-5">
        {video && (
          <Card className="bg-dark text-light" style={{ width: '50rem' }}>
            <Card.Header>
              <ReactPlayer url={video.url} volume="40%" />
            </Card.Header>
            {(this.state.loaded && user.role === 'admin' && (
              <Card.Body>
                <EditVideoForm
                  value={video}
                  onValueChange={this.onFormValueChange}
                ></EditVideoForm>
                <Button variant="outline-success">Edit</Button>
                <Button onClick={this.deleteBook} variant="outline-danger">
                  Delete
                </Button>
              </Card.Body>
            )) || (
              <Card.Body>
                <Card.Text>
                  <strong>Title: </strong>
                  {video.title}
                </Card.Text>
                <Card.Text>
                  <strong>Duration: </strong>
                  {video.duration}
                </Card.Text>
                <Card.Text>
                  <strong>Category: </strong>
                  {video.category}
                </Card.Text>
              </Card.Body>
            )}
          </Card>
        )}
      </div>
    );
  }
}
