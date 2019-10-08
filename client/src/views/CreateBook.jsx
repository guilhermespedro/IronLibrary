import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreateProductView extends Component {
  render() {
    return (
      <div>
        <div className="d-flex p-5">
          <h3>Add a new Book</h3>
          <br />
        </div>

        <div className="d-flex p-1">
          <Form className=" w-25 p-3">
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" />
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Price</Form.Label>
              <Form.Control name="price"></Form.Control>
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>ISBN</Form.Label>
              <Form.Control name="isbn" />
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Year</Form.Label>
              <Form.Control name="year"></Form.Control>
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Cover</Form.Label>
              <Form.Control name="file" type="uploadfile"></Form.Control>
            </Form.Group>

            <Button type="submit">Upload Book</Button>
          </Form>
        </div>
      </div>
    );
  }
}
