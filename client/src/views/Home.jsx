import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BookCard from '../component/bookCard';

import { list as listBookApi } from './../services/book-api';
import { list as listVideoApi } from './../services/video-api';

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      videos: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
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

  render() {
    if (!this.state.books) return <div>Loading...</div>;
    return (
      <div className="primeiraimg">
        <div className="d-flex flex-row justify-content-center p-5">
          <div className=" primeiraimg headline">
            <br></br>
            <br></br>
            <br></br>
            <h1 className="d-flex justify-content-center">Iron Library</h1>
            <p>Explore the most demanding coding languages in the world</p>
          </div>
        </div>
        <div className="primeiraimg d-flex flex-row justify-content-center ">
          <Col className="col-8 ">
            <Row className="justify-content-center justify-content-around">
              <h2 className="title"> React </h2>
            </Row>
            <Row className="justify-content-center justify-content-around">
              {this.state.books
                .filter(book => book.category === 'REACT')
                .map(book => <BookCard book={book} key={book.isbn} />)
                .slice(0, 3)}
            </Row>
            <Row className="justify-content-center justify-content-around">
              <h2 className="title"> Express </h2>
            </Row>
            <Row className="justify-content-center justify-content-around">
              {this.state.books
                .filter(book => book.category === 'EXPRESS')
                .map(book => <BookCard book={book} key={book.isbn} />)
                .slice(0, 3)}
            </Row>
            <Row className="justify-content-center justify-content-around">
              <h2 className="title"> JavaScript </h2>
            </Row>
            <Row className="justify-content-center justify-content-around">
              {this.state.books
                .filter(book => book.category === 'JAVASCRIPT')
                .map(book => <BookCard book={book} key={book.isbn} />)
                .slice(0, 3)}
            </Row>
            <Row className="justify-content-center justify-content-around">
              <h2 className="title"> NodeJS </h2>
            </Row>
            <Row className="justify-content-center justify-content-around">
              {this.state.books
                .filter(book => book.category === 'NODE')
                .map(book => <BookCard book={book} key={book.isbn} />)
                .slice(0, 3)}
            </Row>
            <Row className="justify-content-center justify-content-around">
              <h2 className="title"> HTML5/CSS3 </h2>
            </Row>
            <Row className="justify-content-center justify-content-around">
              {this.state.books
                .filter(book => book.category === 'HTML/CSS')
                .map(book => <BookCard book={book} key={book.isbn} />)
                .slice(0, 3)}
            </Row>
            <Row className="justify-content-center justify-content-around">
              <h2 className="title"> MongoDB </h2>
            </Row>
            <Row className="justify-content-center justify-content-around">
              {this.state.books
                .filter(book => book.category === 'MONGODB')
                .map(book => <BookCard book={book} key={book.isbn} />)
                .slice(0, 3)}
            </Row>
          </Col>
        </div>
      </div>
    );
  }
}
