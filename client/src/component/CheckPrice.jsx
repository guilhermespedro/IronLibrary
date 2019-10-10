import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default props => (
  <div>
    <Form className="text-white">
      <fieldset>
        <Form.Group>
          <Form.Check
            type="radio"
            name="select"
            value="all"
            checked={props.value}
            onChange={event => props.toggleCheckPrice(event.target.value)}
            label="All"
          />
          <Form.Check
            type="radio"
            name="select"
            value="0"
            checked={props.value}
            onChange={event => props.toggleCheckPrice(event.target.value)}
            label="0€ - 9€"
          />
          <Form.Check
            type="radio"
            name="select"
            value="1"
            checked={props.value}
            onChange={event => props.toggleCheckPrice(event.target.value)}
            label="10€ - 19€"
          />
          <Form.Check
            type="radio"
            name="select"
            value="2"
            checked={props.value}
            onChange={event => props.toggleCheckPrice(event.target.value)}
            label="20€ - 29€"
          />
          <Form.Check
            type="radio"
            name="select"
            value="3"
            checked={props.value}
            onChange={event => props.toggleCheckPrice(event.target.value)}
            label="30€ - 39€"
          />
          <Form.Check
            type="radio"
            name="select"
            value="4"
            checked={props.value}
            onChange={event => props.toggleCheckPrice(event.target.value)}
            label="+ 40€"
          />
        </Form.Group>
      </fieldset>
    </Form>
  </div>
);
