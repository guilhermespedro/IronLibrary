import React, { Component } from 'react'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default class UserProfileView extends Component {
    render() {
        return (
            
             <div>
          
          <div className="navi">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Iron Library</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto py-md-3">
        <li className="nav-item active">
        <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
      </li> 
      <li className="nav-item active">
        <a className="nav-link" href="/">SignOut<span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
</div>

<div class="container p-2 pb-5 m-10 pt-3 mt-5 pb-3">
    <h2><strong>Personal Information</strong></h2>
    <br></br>
     <h4><strong>Name:</strong> user.name </h4>
     <h4><strong>Email:</strong> user.email </h4>
     <h4><strong>Password:</strong> user.password </h4>
     <h4><strong>Country:</strong> user.country </h4>
     <h4><strong>Phone Number:</strong> user.phonenumber </h4>
</div>


        
<div class="container p-2 m-10">
<form action="/user-profile" method="POST">
  <div class="form-group">
    <label for="name"><strong>Name</strong></label>
    <input type="name" class="form-control" id="name" name="name" value="{{user.name}}"/>
  </div>
 
  <div class="form-group">
    <label for="email"><strong>Email</strong></label>
    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" value="{{user.email}}"/>
  </div>
  <div class="form-group">
    <label for="password"><strong>Password</strong></label>
    <input type="password" class="form-control" id="password" name="password" aria-describedby="emailHelp" value="{{user.password}}"/>
  </div>
  <div class="form-group">
    <label for="country"><strong>Country</strong></label>
    <input type="country" class="form-control" id="country" name="country" aria-describedby="emailHelp" value="{{seller.country}}"/>
  </div>
  <div class="form-group">
    <label for="phonenumber"><strong>Phone Number</strong></label>
    <input type="phonenumber" class="form-control" id="phonenumber" name="phonenumber" aria-describedby="emailHelp" value="{{seller.phonenumber}}"/>
  </div>
  <button class="btn btn-outline-primary btn-lg">Edit</button>
  {/* <a href="/seller-profile/delete" class="btn btn-outline-danger btn-lg">Delete account</a> */}
</form>
</div> 
       </div>     
        )
    }
}

        