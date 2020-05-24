import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Registration.module.css';
import fetchAgenciesQuery from '../queries/fetchAgencies';
import addRespondentToAgencyQuery from '../queries/addRespondentToAgency';
import { Dropdown } from 'react-bootstrap';
import { graphql } from 'react-apollo';

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
      state: '',
      arrOfOrgs: ['lsdfmsdlkvmldfm vldkfmvld', 'Org2', 'Org3']
    };
  }

  // componentDidMount() {
  //   console.log('data', this.props);
  // }

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
    const {
      firstName,
      lastName,
      phone,
      email,
      address,
      city,
      state,
      organization
    } = this.state;
    this.props
      .mutate({
        variables: {
          agencyName: organization,
          firstName,
          lastName,
          primaryPhoneNumber: parseInt(phone),
          email,
          address,
          city,
          state,
          verified: false
        }
      })
      .then(() => {
        this.props.data.refetch();
      });
  };

  renderAgencies() {
    return this.props.data.agencies.map(org => {
      return (
        <Dropdown.Item
          onClick={e => {
            this.handleChangeDropdown(e);
          }}
        >
          {org.name}
        </Dropdown.Item>
      );
    });
  }

  render() {
    // console.log('DATA:', this.props.data.agencies);
    // const testArr = this.props.data.agencies;
    // console.log('test', testArr);
    if (this.props.data.loading) {
      return <h1>Loading...</h1>;
    }
    this.renderAgencies();
    const arrOfDropdownEle = this.state.arrOfOrgs.map(org => {
      return (
        <Dropdown.Item
          onClick={e => {
            this.handleChangeDropdown(e);
          }}
        >
          {org.name}
        </Dropdown.Item>
      );
    });
    return (
      // <div className={styles.container}>
      <div style={{ display: '-webkit-box' }}>
        <div className={styles.formDiv}>
          <div>
            <h1 style={{ fontWeight: 900, margin: '2% 1.75%' }}>Sign up!</h1>
            <p style={{ fontWeight: 600, margin: '2% 1.75%' }}>
              Tell us more about you so you can start booking
            </p>
            <Form
              onSubmit={() => {
                console.log('submitted');
              }}
            >
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
                    {/* {arrOfDropdownEle} */}
                    {this.renderAgencies()}
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
                type="submit"
                className={styles.registerButton}
              >
                I'm Ready!
              </Button>
            </Form>
          </div>
        </div>
        {/* <div> */}
        <img
          style={{ width: '45%', marginTop: '5%' }}
          src="https://creeksidechalets.com/wp-content/uploads/2018/04/group-of-friends-watching-mountain-sunrise.jpg"
        />
        {/* </div> */}
      </div>
    );
  }
}

export default graphql(addRespondentToAgencyQuery)(
  graphql(fetchAgenciesQuery)(Registration)
);
