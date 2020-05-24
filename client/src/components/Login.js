import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Login.module.css';
import { withRouter } from 'react-router';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    const temp = {};
    temp[e.target.name] = e.target.value;
    this.setState(temp);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push('/admin/respondent');
  };

  render() {
    console.log('hist:', this.props);
    return (
      <div
        className={`container ${styles.mainDiv}`}
        style={{ textAlign: 'center' }}
      >
        <h1 style={{ fontWeight: '900' }}>Login</h1>
        <p style={{ fontWeight: '600' }}>Welcome back!</p>
        <div>
          <Form style={{ width: '50%', margin: '0 auto' }}>
            <Form.Group>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                placeholder="EMAIL"
                className={styles.smallInput}
              />
            </Form.Group>
            <Form.Group>
              <input
                type="text"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                placeholder="PASSWORD"
                className={styles.smallInput}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={this.handleSubmit}
              type="submit"
              className={styles.registerButton}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
