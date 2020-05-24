import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Login.module.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
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
        <h1>Login</h1>
        <p>Welcome back!</p>
        <Form>
          <Form.Group>
            <Form.Label>EMAIL</Form.Label>
            <Form.Control type="text" value={this.state.value} onChange={this.handleChange} name="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control type="password" value={this.state.value} onChange={this.handleChange} name="email" />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>Login</Button>
        </Form>
      </div>
    );
  }
};

export default Login;