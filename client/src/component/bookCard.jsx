import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class bookCard extends Component {
  render() {
    return (
      // <div>
      //   <Card style={{ width: "14rem" }}>
      //     <Card.Img variant="top" src={this.props.book.cover} /> img
      //     <Card.Body>
      //       <Card.Title>{this.props.book.title}</Card.Title> title
      //       <Card.Text>{this.props.book.description}</Card.Text> description
      //       <Button variant="outline-primary">Read the Book</Button>
      //     </Card.Body>
      //   </Card>
      // </div>
      <div className="card card-cascade narrower w-25 p-1 width=14rem">
        <div className="view view-cascade overlay">
          <img
            className="card-img-top"
            src="https://prodimage.images-bn.com/pimages/9781787287020_p0_v2_s550x406.jpg"
            alt="Card image cap"
          />
          <a>
            <div className="mask rgba-white-slight"></div>
          </a>
          <a href="#!">
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>

        <div className="card-body card-body-cascade text-center">
          <h4 className="card-title">
            <strong>Book Title</strong>
          </h4>
          <h5 className="blue-text pb-2">
            <strong>Graffiti Artist</strong>
          </h5>
          <p className="card-text">Description. </p>
          <Button variant="outline-primary">Read the Book</Button>
        </div>
      </div>
    );
  }
}
