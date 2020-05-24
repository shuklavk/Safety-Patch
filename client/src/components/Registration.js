import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Registration.module.css';
import { Dropdown } from 'react-bootstrap';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      organization: 'Organization',
      phone: '',
      email: '',
      address: '',
      city: '',
      state: ''
    };
  }

  handleChange = e => {
    const temp = {};
    temp[e.target.name] = e.target.value;
    this.setState(temp);
  };

  handleChangeDropdown = e => {
    const organization = e.target.innerHTML;
    this.setState({ organization });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      // <div className={styles.container}>
      <div style={{ display: '-webkit-box' }}>
        <div className={styles.formDiv}>
          <div>
            <h1 style={{ fontWeight: 900, margin: '2% 1.75%' }}>Sign up!</h1>
            <p style={{ fontWeight: 600, margin: '2% 1.75%' }}>
              Tell us more about you so you can start booking
            </p>
            <Form>
              <Form.Group>
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  name="firstName"
                  placeholder="FIRST NAME"
                  className={styles.smallInput}
                />
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  name="lastName"
                  placeholder="LAST NAME"
                  className={styles.smallInput}
                />
              </Form.Group>
              <Form.Group>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id={styles.dropdownComponent}
                    // className={styles.dropdownComponent}
                  >
                    {this.state.organization}
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{ width: '83.5%', textAlign: 'center' }}
                  >
                    <Dropdown.Item
                      onClick={e => {
                        this.handleChangeDropdown(e);
                      }}
                    >
                      Org 1
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={e => {
                        this.handleChangeDropdown(e);
                      }}
                    >
                      Org 2
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={e => {
                        this.handleChangeDropdown(e);
                      }}
                    >
                      Org 3
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Form.Group>
                <input
                  type="text"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  name="phone"
                  placeholder="PHONE NUMBER"
                  className={styles.smallInput}
                />
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
                  value={this.state.address}
                  onChange={this.handleChange}
                  name="address"
                  placeholder="STREET ADDRESS"
                  style={{ width: '83.5%' }}
                />
              </Form.Group>
              <Form.Group>
                <input
                  type="text"
                  value={this.state.city}
                  onChange={this.handleChange}
                  name="city"
                  placeholder="CITY"
                  className={styles.smallInput}
                />
                <input
                  type="text"
                  value={this.state.state}
                  onChange={this.handleChange}
                  name="state"
                  placeholder="STATE"
                  className={styles.smallInput}
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={this.handleSubmit}
                className={styles.registerButton}
              >
                I'm Ready!
              </Button>
            </Form>
          </div>
        </div>
        <div>
          <img
            style={{ width: '45%', marginTop: '5%' }}
            src="https://creeksidechalets.com/wp-content/uploads/2018/04/group-of-friends-watching-mountain-sunrise.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Registration;
