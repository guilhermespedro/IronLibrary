import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class Library extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center p-5">
        <Form>
          {["checkbox", "radio"].map(type => (
            <div key={`custom-inline-${type}`} className="mb-3">
              <Form.Check
                custom
                // inline
                label="REACT"
                type={1}
                id={`custom-inline-${type}-1`}
              />
            </div>
          ))}
        </Form>
        <h1> BOOKS </h1>
        <div className="card1">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS30Ynun89YPb2A8Rn_r23C7RU_coDwkOPRGtVCBn8J_k7HS0D-UA"
            />
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Learn it</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/teepublic/image/private/s--UgRIDbnj--/t_Preview/b_rgb:000000,c_limit,f_jpg,h_630,q_90,w_630/v1539274051/production/designs/3302114_0.jpg"
            />
            <Card.Body>
              <Card.Title>JavaScript</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Learn it</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png"
            />
            <Card.Body>
              <Card.Title>Node </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Learn it</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
