import React, { Component } from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import Images from "react-bootstrap/Images"
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BookCard from "../component/bookCard";
import VideoCard from "../component/videoCard";
import { list as listService } from "../services/book-api";
import "node_modules/video-react/dist/video-react.css";

import LogIn from "./LogIn";

export default class HomeView extends Component {
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
      <body background="/images/space-bg1.jpg">
        <div>
          {/* <div>
            <Link to="/login" className="btn btn-danger">
              Log In
            </Link>

            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/userProfile" className="btn btn-primary">
              User Profile
            </Link>
            <Link to="/adminProfile" className="btn btn-primary">
              Admin Profile
            </Link>
          </div> */}
          <div></div>
          <div className="homepage">
            <div className="d-flex flex-row justify-content-center">
              <Col className="col-4"></Col>
              <Col className="col-8">
                <Row>
                  <h2 className="title"> React </h2>
                </Row>
                <Row>
                  <BookCard book={this.state.book} />
                  <BookCard book={this.state.book} />
                  <BookCard book={this.state.book} />
                </Row>
                <Row>
                  <h2 className="title"> Express </h2>
                </Row>
                <Row>
                  <BookCard book={this.state.book} />
                  <BookCard book={this.state.book} />
                  <BookCard book={this.state.book} />
                </Row>
                <Row>
                  <h2 className="title"> JavaScript </h2>
                </Row>
                <Row>
                  <BookCard book={this.state.book} />
                  <BookCard book={this.state.book} />
                  <BookCard book={this.state.book} />
                </Row>
                <Row>
                  <h2 className="title"> NodeJS </h2>
                </Row>
                <Row>
                  <BookCard book={this.state.book} />
                  <BookCard book={this.state.book} />
                  <BookCard book={this.state.book} />
                </Row>
                <Row>
                  <h2 className="title"> HTML5/CSS3 </h2>
                </Row>
                <Row>
                  <BookCard book={this.state.book} />
                  <BookCard book={this.state.book} />
                  <BookCard book={this.state.book} />
                </Row>
                <Row>
                  <h2 className="title"> MongoDB </h2>
                </Row>
                <Row>
                  <BookCard book={this.state.book} />
                  <BookCard book={this.state.book} />
                  <BookCard book={this.state.book} />
                </Row>
              </Col>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
