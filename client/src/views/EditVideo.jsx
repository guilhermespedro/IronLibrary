import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class EditVideoView extends Component {
    render() {
        return (
            <div>
                <div className="editVideo">

                <div className="d-flex justify-content-center p-5">

            <h3>Update Video Details</h3>
            <br/>
                </div>
                </div>

                <div className="lettering">

          <div className="d-flex justify-content-center p-1">
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
                <Form.Label>URL</Form.Label>
                <Form.Control
                  name="file"
                  type="uploadfile"
                  ></Form.Control>
              </Form.Group>
              
          
              <Button type="submit">Update</Button>
            </Form>
          </div>
                  </div>
        </div>
        )
    }
}
