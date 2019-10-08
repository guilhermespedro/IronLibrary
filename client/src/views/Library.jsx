import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BookCard from "../component/bookCard";
import VideoCard from "../component/videoCard";
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
          <ul className="title">
            <h5 className="title"> Filter by Category </h5>{" "}
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
              <input type="radio" name="gender" value="html" /> HTML5/CSS3
            </ul>
            <ul>
              <input type="radio" name="gender" value="mongodb" /> MongoDB
            </ul>
          </ul>
          <ul>
            <h5 class="title"> Filter by Price </h5>
            <ul class="title">
              <input type="radio" name="gender" value="mongodb" />
              Filter by Price
            </ul>
            <ul class="title">
              <input type="radio" name="gender" value="mongodb" /> Filter by
              Programming language
            </ul>
          </ul>
        </Col>
        <Col className="col-8">
          <Row>
            <h2 class="title"> Books </h2>
          </Row>
          <Row>
            <BookCard book={this.state.book} />
            <BookCard book={this.state.book} />
            <BookCard book={this.state.book} />
          </Row>
          <Row>
            <h2 class="title"> Videos </h2>
          </Row>
          <Row>
            <VideoCard video={this.state.video} />
            <VideoCard video={this.state.video} />
            <VideoCard video={this.state.video} />
          </Row>
        </Col>
      </div>
    );
  }
}
