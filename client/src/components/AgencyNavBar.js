import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../App.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default () => {
  return (
    <div className={styles.navDiv}>
      <Navbar className={styles.navbar} expand="sm">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={
                'https://media.discordapp.net/attachments/713803790746124338/713927966576607232/Screen_Shot_2020-05-23_at_6.34.26_PM.png'
              }
              height="100"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/admin/respondent">
              <button
                type="button"
                className="btn btn-link"
                style={{
                  color: '#0074A3',
                  width: '150%',
                  display: 'inline-block',
                  backgroundColor: 'white',
                  margin: '0px 5px',
                  outline: 'none'
                }}
              >
                Respondents
              </button>
            </Link>
            <Link to="/admin/hotels">
              <button
                type="button"
                className="btn btn-link"
                style={{
                  color: '#0074A3',
                  width: '150%',
                  display: 'inline-block',
                  backgroundColor: 'white',
                  margin: '0px 5px'
                }}
              >
                Hotels
              </button>
            </Link>
          </Nav>
          <Nav>
            {/* <Link to="/register">
              <button
                type="button"
                className="btn btn-link"
                style={{
                  color: '#0074A3',
                  width: '150%',
                  display: 'inline-block',
                  backgroundColor: 'white',
                  margin: '0px 5px'
                }}
              >
                Sign Up
              </button>
            </Link> */}
            <Link to="/login">
              <button
                type="button"
                className={`btn btn-primary ${styles.loginButton} shadow`}
              >
                Log Out
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
