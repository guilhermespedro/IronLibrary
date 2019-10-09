import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { verify as verifyService } from './../services/authentication-api';
import {
  edit as editBookApi,
  remove as removeBookApi,
  load as loadBookApi
} from '../services/book-api';

export default class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      user: null,
      loaded: false
    };
    this.deleteBook = this.deleteBook.bind(this);
  }

  loadBook() {
    loadBookApi(this.props.match.params.isbn)
      .then(book => {
        this.setState({ book });
      })
      .catch(error => {
        this.props.history.push('/library');
      });
  }

  componentDidMount() {
    this.loadBook();
    verifyService()
      .then(user => {
        this.setState({
          ...(user && { user }),
          loaded: true
        });
      })
      .catch(error => {
        this.setState({
          loaded: true
        });
        console.log(error);
      });
  }

  deleteBook() {
    removeBookApi(this.state.book.isbn)
      .then(book => {
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const book = this.state.book;
    const user = this.state.user;
    console.log(user);
    return (
      <div className="d-flex justify-content-center p-5">
        {book && (
          <Card className="bg-dark text-white">
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src={book.thumbnail.replace('zoom=1', 'zoom=0.5')}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.description}</Card.Text>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>{book.year}</Card.Text>
                  <Card.Text>{book.isbn}</Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button variant="primary" target="popup" href={book.price}>
                    BUY NOW
                  </Button>
                </Card.Body>
                {this.state.loaded && user.role === 'admin' && (
                  <Card.Body>
                    <Button variant="outline-success">Edit</Button>
                    <Button onClick={this.deleteBook} variant="outline-danger">
                      Delete
                    </Button>
                  </Card.Body>
                )}
              </Col>
            </Row>
          </Card>
        )}
      </div>
    );
  }
}
