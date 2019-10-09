import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { create as createVideoService } from "./../services/video-api";
// import { load as loadVideoApi } from "./../services/video-api";

export default class CreateVideoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: "",
      url: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(event) {
    event.preventDefault();
    const { title, description, category, url } = this.state;
    createVideoService({
      title,
      description,
      category,
      url
    })
      .then(video => {
        this.props.loadVideo(video);
        this.props.history.push("/singleVideo");
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="title">
        <div className="d-flex justify-content-center p-5">
          <h3>Add a new Video</h3>
          <br />
        </div>
        <div className="d-flex justify-content-center p-1">
          <Form className=" w-25 p-3" onSubmit={this.onFormSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" />
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Description</Form.Label>
              <Form.Control name="description"></Form.Control>
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Category</Form.Label>
              <Form.Control name="category" />
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>URL</Form.Label>
              <Form.Control name="file" type="uploadfile"></Form.Control>
            </Form.Group>

            <Button type="submit">Upload Video</Button>
          </Form>
        </div>
      </div>
    );
  }
}
