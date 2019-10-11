import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import BookCard from './../component/bookCard';
import VideoCard from './../component/videoCard';
import CheckCategory from '../component/CheckCategory';
import CheckPrice from '../component/CheckPrice';

import { list as listBookApi } from './../services/book-api';
import { list as listVideoApi } from './../services/video-api';

import { Link } from 'react-router-dom';

export default class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      videos: [],
      checkCategory: false,
      checkPrice: false
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleCheckCategory = this.toggleCheckCategory.bind(this);
    this.toggleCheckPrice = this.toggleCheckPrice.bind(this);
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

  toggleCheckCategory(value) {
    this.setState({
      checkCategory: value
    });
  }

  toggleCheckPrice(value) {
    this.setState({
      checkPrice: value
    });
  }

  render() {
    if (!this.state.books) return <div>Loading...</div>;
    return (
      <Row className="p-5 m-5">
        <Col className="col-4 justify-content-center justify-content-around">
          <Card className="catcard" style={{ width: '18rem' }} bg="info">
            <Card.Body>
              <Card.Title className="title">
                {' '}
                Filter by Category
                <br />
                <br />
                <CheckCategory toggleCheckCategory={this.toggleCheckCategory} />
                <br />
                <br />
                Filter by Price
                <br />
                <br />
                <CheckPrice toggleCheckPrice={this.toggleCheckPrice} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-8 justify-content-center justify-content-around ">
          <Row className="justify-content-center justify-content-around">
            <h2 className="title "> Books </h2>
          </Row>
          <br />
          <Row className="justify-content-center justify-content-around">
            {this.state.books
              .filter(book =>
                this.state.checkCategory === 'all'
                  ? book
                  : this.state.checkCategory
                  ? book.category === this.state.checkCategory
                  : book
              )
              .filter(book =>
                this.state.checkPrice === 'all'
                  ? book
                  : this.state.checkPrice
                  ? book.price
                    ? Math.floor(parseInt(book.price) / 10) ===
                      parseInt(this.state.checkPrice)
                    : Math.floor(parseInt(book.price) / 10) >
                      parseInt(this.state.checkPrice)
                  : book
              )
              .map(book => (
                <Link
                  className="text-decoration-none text-reset"
                  to={`/singlebook/${book.isbn}`}
                  key={book.isbn}
                >
                  <BookCard className="m-3" book={book} />
                </Link>
              ))}
          </Row>
          <br />
          <br />
          <br />

          <Row className="justify-content-center justify-content-around">
            <h2 className="title"> Videos </h2>
          </Row>
          <br />
          <Row className="justify-content-center justify-content-around">
            {this.state.videos
              .filter(video =>
                this.state.checkCategory === 'all'
                  ? video
                  : this.state.checkCategory
                  ? video.category === this.state.checkCategory
                  : video
              )
              .filter(video =>
                this.state.checkPrice === 'all'
                  ? video
                  : this.state.checkPrice
                  ? null
                  : video
              )
              .map(video => (
                <Link
                  className="text-decoration-none text-reset"
                  to={`/singlevideo/${video._id}`}
                  key={video._id}
                >
                  <VideoCard className="p-3" video={video} />
                </Link>
              ))}
          </Row>
        </Col>
      </Row>
    );
  }
}
