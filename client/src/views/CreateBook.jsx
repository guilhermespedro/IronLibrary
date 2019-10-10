'use strict';

import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { load as loadBookApi } from './../services/google-books-api';
import { create as createBookApi } from './../services/book-api';
import CreateBookComponent from './../component/CreateBook';
export default class CreateProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: null,
      book: null
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const isbn = this.state.isbn;
    if (isbn !== prevState.isbn) {
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
      link,
      price
    } = {
      title: this.state.book.volumeInfo.title,
      thumbnail: this.state.book.volumeInfo.imageLinks.thumbnail,
      year: this.state.book.volumeInfo.publishedDate,
      description: this.state.book.volumeInfo.description,
      authors: this.state.book.volumeInfo.authors,
      category: this.state.category,
      isbn: this.state.isbn,
      link: this.state.link,
      price: this.state.price
    };
    createBookApi({
      title,
      thumbnail,
      year,
      description,
      authors,
      category,
      isbn,
      link,
      price
    })
      .then(() => {
        this.props.history.push(`/singlebook/${this.state.isbn}`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const book = this.state.book;
    return (
      <div className="title-createboook">
        
        <div className="d-flex justify-content-center p-5">
          <h3>Add a new Book</h3>
          <br />
        </div>
  
        {book && <CreateBookComponent book={book} />}
        <div className="d-flex justify-content-center p-1">
          <Form className=" w-25 p-3 block-example border border-dark" onSubmit={this.onFormSubmit}>
            <Form.Group size="sm">
              <Form.Label>ISBN</Form.Label>
              <Form.Control
                type="number"
                name="isbn"
                placeholder="ISBN"
                value={this.state.isbn}
                onChange={this.onValueChange}
              />
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                defaultValue=""
                value={this.state.category}
                onChange={this.onValueChange}
              >
                <option disabled value="">
                  Select Category
                </option>
                <option>HTML/CSS</option>
                <option>JAVASCRIPT</option>
                <option>MONGODB</option>
                <option>NODE</option>
                <option>REACT</option>
                <option>EXPRESS</option>
              </Form.Control>
              <Form.Label>Amazon Link</Form.Label>
              <Form.Control
                type="text"
                name="link"
                placeholder="Amazon"
                value={this.state.link}
                onChange={this.onValueChange}
              />
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Price"
                value={this.state.price}
                onChange={this.onValueChange}
              />
            </Form.Group>
            <Button type="submit">Upload Book</Button>
          </Form>
        </div>
      </div>
    );
  }
}
