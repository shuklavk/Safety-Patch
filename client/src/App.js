import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Registration from './components/Registration';
import Login from './components/Login';
import Request from './components/Request'
import Admin from './components/Admin'
import HotelView from './components/HotelView';
import styles from './App.module.css';
import logo from './safetyPatchLogo.png';

function App() {
  return (
    <Router>
          <Navbar className={styles.navbar} expand="sm">
            <Navbar.Brand><img src={logo} alt="logo" height="80" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Link to="/">Home</Link>
                <Link to="/hotels">For Hotels</Link>
                <Link to="/request">Book a Stay</Link>
                <Link to="/admin">Admin</Link>
              </Nav>
              <Nav>
                <Link to="/register">Sign Up</Link>
                <Link to="/login">Login</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      <div className={styles.content}>
        <div>
          <Switch>
            <Route path="/hotels">
              <div className={styles.container}>
                <HotelView />
              </div>
            </Route>
            <Route path="/register">
              <div className={styles.container}>
                <Registration />
              </div>
            </Route>
            <Route path="/login">
              <div className={styles.container}>
                <Login />
              </div>
            </Route>
            <Route path="/request">
              <div className={styles.container}>
                <Request />
              </div>
            </Route>
            <Route path="/admin">
              <div className={styles.container}>
                <Admin />
              </div>
            </Route>
            <Route path="/results">
              {/* <Results /> */}
            </Route>
            <Route exact path="/">
              {/* <Search /> */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
