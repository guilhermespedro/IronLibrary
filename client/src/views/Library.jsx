import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BookCard from "../component/bookCard";
import { list as listService } from "../services/book-api";

export default class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    };
  }

  componentDidMount() {
    listService(this.props.match.params.id)
      .then(book => {
        this.setState({
          book: book
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.book) return <div>Loading...</div>;
    return (
      <div className="d-flex flex-row">
        <Col className="col-4">
          <ul>
            <h4> Filter by Category </h4>{" "}
            <ul>
              <input type="radio" name="gender" value="react" /> React
            </ul>
            <ul>
              <input type="radio" name="gender" value="javascript" /> JavaScript
            </ul>
            <ul>
              <input type="radio" name="gender" value="express" /> Express
            </ul>
            <ul>
              <input type="radio" name="gender" value="nodejs" /> NodeJS
            </ul>
            <ul>
              <input type="radio" name="gender" value="html" /> HTML5
            </ul>
            <ul>
              <input type="radio" name="gender" value="css" /> CSS3
            </ul>
            <ul>
              <input type="radio" name="gender" value="mongodb" /> MongoDB
            </ul>
          </ul>
          <ul>
            <h4> Filter by Price </h4>
            <ul>
              <input type="radio" name="gender" value="mongodb" />
              Filter by Price
            </ul>
            <ul>
              <input type="radio" name="gender" value="mongodb" /> Filter by
              Programming language
            </ul>
          </ul>
        </Col>
        <Col className="col-8">
          <Row>
            <h1> Book Description </h1>
          </Row>
          <Row>
            <BookCard book={this.state.book} />
            <BookCard book={this.state.book} />
            <BookCard book={this.state.book} />
          </Row>
        </Col>
      </div>
    );
  }
}
