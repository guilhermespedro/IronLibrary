import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import BookCard from "../component/bookCard";
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
      <div className="bookCard">
        <h1> Book Description </h1>
        <BookCard book={this.state.book} />
        <BookCard book={this.state.book} />
        <BookCard book={this.state.book} />
      </div>
    );
  }
}
