import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import EditBookForm from './../component/EditBookForm';

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
    this.onFormValueChange = this.onFormValueChange.bind(this);
    this.editBook = this.editBook.bind(this);
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

  onFormValueChange(data) {
    this.setState({
      book: {
        ...this.state.book,
        ...data
      }
    });
  }

  editBook(event) {
    // event.preventDefault();
    const { isbn, updatedBook } = {
      isbn: this.state.book.isbn,
      updatedBook: this.state.book
    };
    editBookApi(isbn, updatedBook)
      .then(() => {
        this.props.history.push(`/singlebook/${isbn}`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteBook() {
    removeBookApi(this.state.book.isbn)
      .then(book => {
        this.props.history.push('/library');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const book = this.state.book;
    const user = this.state.user;
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
                  {(this.state.loaded && user.role === 'admin' && (
                    <EditBookForm
                      value={book}
                      onValueChange={this.onFormValueChange}
                    ></EditBookForm>
                  )) || (
                    <div>
                      <Card.Text>Category: {book.category}</Card.Text>
                      <Card.Text>Price: € {book.price}</Card.Text>
                    </div>
                  )}
                  <Card.Text>Published: {book.year}</Card.Text>
                  <Card.Text>ISBN: {book.isbn}</Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button variant="primary" target="popup" href={book.link}>
                    BUY NOW
                  </Button>
                </Card.Body>
                {this.state.loaded && user.role === 'admin' && (
                  <Card.Body>
                    <Button
                      type="submit"
                      variant="outline-success"
                      onClick={this.editBook}
                    >
                      Edit
                    </Button>
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
