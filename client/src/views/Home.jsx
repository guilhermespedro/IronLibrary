import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import BookCard from '../component/bookCard';
import VideoCard from '../component/videoCard';

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
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col className=" align-self-center">
                  <Image src="logo512.png" />
                </Col>
                <Col>
                  <Row className="justify-content-center justify-content-around">
                    {this.state.books
                      .filter(book => book.category === 'REACT')
                      .map(book => <BookCard book={book} key={book.isbn} />)
                      .slice(0, 2)}
                  </Row>
                  <br></br>
                  <Row className="justify-content-center justify-content-around">
                    {this.state.videos
                      .filter(video => video.category === 'REACT')
                      .map(video => <VideoCard key={video._id} video={video} />)
                      .slice(0, 3)}
                    
                  </Row>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col className=" align-self-center">
                  <Image src="./images/Javascript.png" />
                </Col>
                <Col>
                  <Row className="justify-content-center justify-content-around">
                    {this.state.books
                      .filter(book => book.category === 'JAVASCRIPT')
                      .map(book => <BookCard book={book} key={book.isbn} />)
                      .slice(0, 2)}
                  </Row>
                  <br></br>
                  <Row className="justify-content-center justify-content-around">
                    {this.state.videos
                      .filter(video => video.category === 'JAVASCRIPT')
                      .map(video => <VideoCard key={video._id} video={video} />)
                      .slice(0, 3)}
                    
                  </Row>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col className=" align-self-center">
                  <Image src="./images/nodejs.png" />
                </Col>
                <Col>
                  <Row className="justify-content-center justify-content-around">
                    {this.state.books
                      .filter(book => book.category === 'NODE')
                      .map(book => <BookCard book={book} key={book.isbn} />)
                      .slice(0, 2)}
                  </Row>
                  <br></br>
                  <Row className="justify-content-center justify-content-around">
                    {this.state.videos
                      .filter(video => video.category === 'NODE')
                      .map(video => <VideoCard key={video._id} video={video} />)
                      .slice(0, 2)}
                    
                  </Row>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col className=" align-self-center">
                  <Image src="./images/HTML.png" />
                </Col>
                <Col>
                  <Row className="justify-content-center justify-content-around">
                    {this.state.books
                      .filter(book => book.category === 'HTML/CSS')
                      .map(book => <BookCard book={book} key={book.isbn} />)
                      .slice(0, 2)}
                  </Row>
                  <br></br>
                  <Row className="justify-content-center justify-content-around">
                    {this.state.videos
                      .filter(video => video.category === 'HTML/CSS')
                      .map(video => <VideoCard key={video._id} video={video} />)
                      .slice(0, 3)}
                    
                  </Row>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col className=" align-self-center">
                  <Image src="./images/Express.png" />
                </Col>
                <Col>
                  <Row className="justify-content-center justify-content-around">
                    {this.state.books
                      .filter(book => book.category === 'EXPRESS')
                      .map(book => <BookCard book={book} key={book.isbn} />)
                      .slice(0, 2)}
                  </Row>
                  <br></br>
                  <Row className="justify-content-center justify-content-around">
                    {this.state.videos
                      .filter(video => video.category === 'EXPRESS')
                      .map(video => <VideoCard key={video._id} video={video} />)
                      .slice(0, 3)}
                    
                  </Row>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col className=" align-self-center">
                  <Image src="./images/MongoDB.png" />
                </Col>
                <Col>
                  <Row className="justify-content-center justify-content-around">
                    {this.state.books
                      .filter(book => book.category === 'MONGODB')
                      .map(book => <BookCard book={book} key={book.isbn} />)
                      .slice(0, 2)}
                  </Row>
                  <br></br>
                  <Row className="justify-content-center justify-content-around">
                    {this.state.videos
                      .filter(video => video.category === 'MONGODB')
                      .map(video => <VideoCard key={video._id} video={video} />)
                      .slice(0, 3)}
                    
                  </Row>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
