import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import BookCard from '../component/bookCard';
import VideoCard from '../component/videoCard';
import { list as listService } from '../services/book-api';

export default class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
    if (!this.state.book) return <div>Loading...</div>;
    return (
     
      <div className="d-flex flex-row justify-content-center p-5">
        <Col className="col-4 justify-content-center justify-content-around">
          <form onSubmit={this.handleFormSubmit}>
            <ul className="title">
              <h5 className="title"> Filter by Content Category </h5>{' '}
              <ul>
                <label >
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
            <BookCard book={this.state.book} value="react" />
            <BookCard book={this.state.book} />
            <BookCard book={this.state.book} />
          </Row>
          <Row className="justify-content-center justify-content-around">
            <h2 className="title"> Videos </h2>
          </Row>
          <Row className="justify-content-center justify-content-around">
            <VideoCard video={this.state.video} />
            <VideoCard video={this.state.video} />
            <VideoCard video={this.state.video} />
          </Row>
        </Col>
      </div>
    );
  }
}
