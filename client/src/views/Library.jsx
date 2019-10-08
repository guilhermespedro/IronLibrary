import React, { Component } from "react";
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
            <h5 className="title"> Filter by Content Category </h5>{" "}
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
            <h5 className="title"> Filter by Price </h5>
            <ul className="title">
              <input type="radio" name="gender" value="1" />
              0€ - 10€
            </ul>
            <ul className="title">
              <input type="radio" name="gender" value="2" /> 10€ - 20€
            </ul>
            <ul className="title">
              <input type="radio" name="gender" value="3" /> 20€ - 30€
            </ul>
            <ul className="title">
              <input type="radio" name="gender" value="4" /> 30€ - 40€
            </ul>
            <ul className="title">
              <input type="radio" name="gender" value="5" /> +40€
            </ul>
          </ul>
        </Col>
        <Col className="col-8">
          <Row>
            <h2 className="title"> Books </h2>
          </Row>
          <Row>
            <BookCard book={this.state.book} />
            <BookCard book={this.state.book} />
            <BookCard book={this.state.book} />
          </Row>
          <Row>
            <h2 className="title"> Videos </h2>
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
