import React, { Component } from 'react';

import {
  edit as editService,
  verify as verifyService
} from './../services/authentication-api';

import EditUserForm from './../component/EditUserForm';
import Button from 'react-bootstrap/Button';

export default class UserProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
    this.onFormValueChange = this.onFormValueChange.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  onFormValueChange(data) {
    this.setState({
      user: {
        ...this.state.user,
        ...data
      }
    });
  }

  editUser(event) {
    // event.preventDefault();
    const user = this.state.user;
    const id = user._id;

    editService(id, user)
      .then(user => {
        this.props.loadUser(user);
        this.props.history.push('/profile');
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
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

  render() {
    const user = this.state.user;

    return (
      <div className="title ">
        <div className="d-flex justify-content-center p-4  ">
          <ul>
            <ul>
              {' '}
              <h2 className="title ">
                <strong>Personal Information</strong>
              </h2>
            </ul>
            <br></br>
            <ul>
              <h4 className="title">
                <strong>Name:</strong> {user.name}
              </h4>
            </ul>
            <ul>
              <h4 className="title">
                <strong>Email:</strong> {user.email}
              </h4>
            </ul>
            <ul>
              <h4 className="title">
                <strong>Country:</strong> {user.country}
              </h4>
            </ul>
            <ul>
              <h4 className="title">
                <strong>Phone Number:</strong> {user.phoneNumber}
              </h4>
            </ul>
          </ul>
        </div>
        <div className="d-flex justify-content-center p-4">
          <EditUserForm
            value={user}
            onValueChange={this.onFormValueChange}
            onFormSubmit={this.editUser}
          >
            <Button type="submit" className="btn btn-outline-primary btn-lg">
              Edit
            </Button>
          </EditUserForm>
        </div>
      </div>
    );
  }
}
