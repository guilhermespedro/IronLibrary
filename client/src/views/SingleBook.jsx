import React, { Component } from "react";
import BookCard from "../component/bookCard";
import { getOneBook } from "../services/book-api";

export default class singleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    };
  }

  componentDidMount() {
    getOneBook(this.props.match.params.id)
      .then(book => {
        this.setState({
          book: book
        });
      })
      .catch(error => {
        console.log(erro);
      });
  }

  render() {
    if (!this.state.beer) return <div>Loading...</div>;
    return (
      <div className="bookCard">
        <h1> Book Description </h1>
        <BookCard book={this.state.book} />
      </div>
    );
  }
}
