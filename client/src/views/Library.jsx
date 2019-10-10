import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BookCard from './../component/bookCard';
import VideoCard from './../component/videoCard';

import { list as listBookApi } from './../services/book-api';
import { list as listVideoApi } from './../services/video-api';

import { Link } from 'react-router-dom';

export default class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      videos: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    listBookApi().then(books => {
      this.setState({
        books
      });
    });
    listVideoApi()
      .then(videos => {
        this.setState({
          videos
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    this.props.searchValue(event.target.value);
  }
  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
  };

  render() {
    if (!this.state.books) return <div>Loading...</div>;
    return (
      <label className="d-flex flex-row justify-content-center p-5">
        <div className="libfundo"> </div>
        <Col className="col-4 justify-content-center justify-content-around">
          <form onSubmit={this.handleFormSubmit}>
            <ul className="title">
              <h5 className="title"> Filter by Content Category </h5>{' '}
              <ul>
                <label>
                  <input
                    type="radio"
                    name="bookcategory"
                    value="react"
                    onChange={this.handleOptionChange}
                  />{' '}
                  React
                </label>
              </ul>
              <ul>
                <label>
                  <input
                    type="radio"
                    name="bookcategory"
                    value="javascript"
                    onChange={this.handleOptionChange}
                  />{' '}
                  JavaScript
                </label>
              </ul>
              <ul>
                <label>
                  <input
                    type="radio"
                    name="bookcategory"
                    value="express"
                    onChange={this.handleOptionChange}
                  />{' '}
                  Express
                </label>
              </ul>
              <ul>
                <label>
                  <input
                    type="radio"
                    name="bookcategory"
                    value="nodejs"
                    onChange={this.handleOptionChange}
                  />{' '}
                  NodeJS
                </label>
              </ul>
              <ul>
                <label>
                  <input
                    type="radio"
                    name="bookcategory"
                    value="html"
                    onChange={this.handleOptionChange}
                  />{' '}
                  HTML5/CSS3
                </label>
              </ul>
              <ul>
                <label>
                  <input
                    type="radio"
                    name="bookcategory"
                    value="mongodb"
                    onChange={this.handleOptionChange}
                  />{' '}
                  MongoDB
                </label>
              </ul>
            </ul>

            <ul>
              <h5 className="title"> Filter by Price </h5>
              <ul className="title">
                <input type="radio" name="price" value="1" />
                0€ - 9€
              </ul>
              <ul className="title">
                <input type="radio" name="price" value="2" /> 10€ - 19€
              </ul>
              <ul className="title">
                <input type="radio" name="price" value="3" /> 20€ - 29€
              </ul>
              <ul className="title">
                <input type="radio" name="price" value="4" /> 30€ - 39€
              </ul>
              <ul className="title">
                <input type="radio" name="price" value="5" /> +40€
              </ul>
            </ul>
          </form>
        </Col>
        <Col className="col-8 justify-content-center justify-content-around ">
          <Row className="justify-content-center justify-content-around">
            <h2 className="title "> Books </h2>
          </Row>
          <Row className="justify-content-center justify-content-around">
            {this.state.books.map(book => (
              <Link
                className="text-decoration-none text-reset"
                to={`/singlebook/${book.isbn}`}
                key={book.isbn}
              >
                <BookCard book={book} />
              </Link>
            ))}
          </Row>
          <Row className="justify-content-center justify-content-around">
            <h2 className="title"> Videos </h2>
          </Row>
          <Row className="justify-content-center justify-content-around">
            {this.state.videos.map(video => (
              <Link
                className="text-decoration-none text-reset"
                to={`/singlevideo/${video._id}`}
                key={video._id}
              >
                <VideoCard video={video} />
              </Link>
            ))}
          </Row>
        </Col>
      </label>
    );
  }
}
