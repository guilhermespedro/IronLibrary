import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { create as createVideoService } from './../services/video-api';
// import { load as loadVideoApi } from "./../services/video-api";

export default class CreateVideoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const { title, duration, category, url } = this.state;
    createVideoService({
      title,
      duration,
      category,
      url
    })
      .then(video => {
        this.props.history.push(`/library}`);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const video = this.state.video;
    return (
      <div className="title">
        <div className="d-flex justify-content-center p-5">
          <h3>Add a new Video</h3>
          <br />
        </div>
        <div className="d-flex justify-content-center p-1">
          <Form
            className=" w-25 p-3 block-example border border-dark"
            onSubmit={this.onFormSubmit}
          >
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                placeholder="Title"
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.onValueChange}
              />
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                placeholder="Duration"
                name="duration"
                type="text"
                value={this.state.duration}
                onChange={this.onValueChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                defaultValue=""
                name="category"
                value={this.state.category}
                onChange={this.onValueChange}
              >
                <option disabled value="">
                  Select Category
                </option>
                <option>HTML/CSS</option>
                <option>JAVASCRIPT</option>
                <option>MONGODB</option>
                <option>NODE</option>
                <option>REACT</option>
                <option>EXPRESS</option>
              </Form.Control>
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>URL</Form.Label>
              <Form.Control
                name="url"
                type="text"
                placeholder="URL"
                value={this.state.url}
                onChange={this.onValueChange}
              ></Form.Control>
            </Form.Group>
            <Button type="submit">Upload Video</Button>
          </Form>
        </div>
      </div>
    );
  }
}
