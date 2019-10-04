import React, { Component } from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import Images from "react-bootstrap/Images"
import Carousel from "react-bootstrap/Carousel"

import LogIn from "./LogIn"


export default class HomeView extends Component {
  render() {
    return (
      <div>



        <div>
        <Link to="/login" className="btn btn-danger">
          Log In
        </Link>
        
        <Link to="/signup" className="btn btn-primary">  
          Sign Up
        </Link>
        <Link to="/userProfile" className="btn btn-primary">  
          User Profile
        </Link>
        <Link to="/adminProfile" className="btn btn-primary">  
          Admin Profile
        </Link>
      </div>

      <div>

      {/* <Image src="/images/space-bg.jpg" fluid /> */}

  
    <img
      className="d-block w-100"
      src="/images/space-bg1.jpg"
      alt="First slide"
    />
   




      </div>

      <div className = "Explore">

      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      </div>

 
      
      

      </div>
    );
  }
}
