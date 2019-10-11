import React, { Component } from 'react';

import {
  edit as editService,
  verify as verifyService
} from './../services/authentication-api';

import EditUserForm from './../component/EditUserForm';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
      <div>
        <div className="d-flex justify-content-center p-4  ">
          <div className="d-flex text-white justify-content-center p-4">
            <Card className="profile" style={{ width: '28rem' }}>
              <Card.Body className="align-self-center">
                <Card.Title className="p-1 m-2">
                  <strong>Name: </strong>
                  {user.name}
                </Card.Title>
                <Card.Title className="p-1 m-2">
                  {' '}
                  <strong>Email: </strong>
                  {user.email}
                </Card.Title>
                <Card.Title className="p-1 m-2">
                  {' '}
                  <strong>Country: </strong>
                  {user.country}
                </Card.Title>
                <Card.Title className="p-1 m-2">
                  {' '}
                  <strong>Phone Number: </strong>
                  {user.phoneNumber}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="d-flex justify-content-center p-4">
          <EditUserForm
            value={user}
            onValueChange={this.onFormValueChange}
            onFormSubmit={this.editUser}
          >
            <div className="d-flex justify-content-center">
              <Button type="submit" variant="outline-primary">
                Edit
              </Button>
            </div>
          </EditUserForm>
        </div>
      </div>
    );
  }
}
