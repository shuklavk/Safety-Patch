import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Registration.module.css';

class Registration extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    organization: '',
    phone: '',
    email: '',
  }

  handleChange = (e) => {
    const temp = {};
    temp[e.target.name] = e.target.value;
    this.setState(temp);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render () { 
    return (
      <div>
        <h1>Sign up!</h1>
        <p>Tell us more about you so you can start booking</p>
        <Form>
          <Form.Group>
            <Form.Label>FIRST NAME</Form.Label>
            <Form.Control type="text" value={this.state.value} onChange={this.handleChange} name="firstName" />
          </Form.Group>
          <Form.Group>
            <Form.Label>LAST NAME</Form.Label>
            <Form.Control type="text" value={this.state.value} onChange={this.handleChange} name="lastName" />
          </Form.Group>
          <Form.Group>
            <Form.Label>ORGANIZATION</Form.Label>
            <Form.Control type="text" value={this.state.value} onChange={this.handleChange} name="organization" />
          </Form.Group>
          <Form.Group>
            <Form.Label>PHONE NUMBER</Form.Label>
            <Form.Control type="text" value={this.state.value} onChange={this.handleChange} name="phone" />
          </Form.Group>
          <Form.Group>
            <Form.Label>EMAIL</Form.Label>
            <Form.Control type="text" value={this.state.value} onChange={this.handleChange} name="email" />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>I'm Ready!</Button>
        </Form>
      </div>
    );
  }
};

export default Registration;