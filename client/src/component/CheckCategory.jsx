import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default props => (
  <div>
    <Form className="title">
      <fieldset>
        <Form.Group>
          <Form.Check
            type="radio"
            name="select"
            value="all"
            checked={props.value}
            onChange={event => props.toggleCheckCategory(event.target.value)}
            label="All"
          />
          <Form.Check
            type="radio"
            name="select"
            value="REACT"
            checked={props.value}
            onChange={event => props.toggleCheckCategory(event.target.value)}
            label="React"
          />
          <Form.Check
            type="radio"
            name="select"
            value="NODE"
            checked={props.value}
            onChange={event => props.toggleCheckCategory(event.target.value)}
            label="NodeJs"
          />
          <Form.Check
            type="radio"
            name="select"
            value="EXPRESS"
            checked={props.value}
            onChange={event => props.toggleCheckCategory(event.target.value)}
            label="Express"
          />
          <Form.Check
            type="radio"
            name="select"
            value="MONGODB"
            checked={props.value}
            onChange={event => props.toggleCheckCategory(event.target.value)}
            label="MongoDb"
          />
          <Form.Check
            type="radio"
            name="select"
            value="JAVASCRIPT"
            checked={props.value}
            onChange={event => props.toggleCheckCategory(event.target.value)}
            label="Javascript"
          />
          <Form.Check
            type="radio"
            name="select"
            value="HTML/CSS"
            checked={props.value}
            onChange={event => props.toggleCheckCategory(event.target.value)}
            label="Css & htlm"
          />
        </Form.Group>
      </fieldset>
    </Form>
  </div>
);
