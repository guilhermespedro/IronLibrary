'use strict';

import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { load as loadBookApi } from './../services/google-books-api';
import { create as createBookService } from './../services/book-api';
import CreateBookComponent from './../component/CreateBook';
export default class CreateProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIsbn: null,
      book: null
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const isbn = this.state.newIsbn;
    if (isbn !== prevState.newIsbn) {
      loadBookApi(isbn)
        .then(newbook => {
          this.setState({
            book: newbook
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  onValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const {
      title,
      thumbnail,
      year,
      description,
      authors,
      category,
      isbn,
      price
    } = this.state;
    createBookService({
      title: this.state.newBook.thumbnail,
      year,
      description,
      authors,
      category,
      isbn,
      price
    })
      .then(() => {
        this.props.history.push('/singlebook');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const book = this.state.book;

    return (
      <div>
        <div className="d-flex p-5">
          <h3>Add a new Book</h3>
          <br />
        </div>
        {book && <CreateBookComponent book={book} />}
        <div className="d-flex p-1">
          <Form className=" w-25 p-3" onSubmit={this.onFormSubmit}>
            <Form.Group size="sm">
              <Form.Label>ISBN</Form.Label>
              <Form.Control
                type="number"
                name="newIsbn"
                placeholder="ISBN"
                value={this.state.newIsbn}
                onChange={this.onValueChange}
              />
            </Form.Group>
            <Form.Group size="sm">
              <Form.Label>Category</Form.Label>
              <Form.Control name="category"></Form.Control>
            </Form.Group>
            <Button type="submit">Upload Book</Button>
          </Form>
        </div>
      </div>
    );
  }
}
