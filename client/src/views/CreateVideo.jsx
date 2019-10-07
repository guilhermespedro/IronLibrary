import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreateVideoView extends Component {
    render() {
        return (
            <div>
                <div className="d-flex p-5">

            <h3>Add a new Video</h3>
            <br/>
                </div>
          <div className="d-flex p-1">
            <Form className=" w-25 p-3">
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  
                  name="title"
                  
                />
              </Form.Group>
              <Form.Group size="sm">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  
                  name="description"
                  
                ></Form.Control>
              </Form.Group>
              <Form.Group size="sm">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  name="duration"
                />
              </Form.Group>
              
              
              <Form.Group size="sm">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  name="file"
                  type="uploadfile"
                ></Form.Control>
              </Form.Group>
              
          
              <Button type="submit">Upload Video</Button>
            </Form>
          </div>
        </div>
        )
    }
}
