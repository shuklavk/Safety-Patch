import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Registration from './components/Registration';
import Login from './components/Login';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar className={styles.navbar} expand="sm">
          <Navbar.Brand>Safety Patch</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/hotels">For Hotels</Link>
            </Nav>
            <Nav>
              <Link to="/register">Sign Up</Link>
              <Link to="/login">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className={styles.content}>
          <Switch>
            <Route path="/hotels">
              {/* <Hotels /> */}
            </Route>
            <Route path="/register">
              <Registration />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/results">
              {/* <Results /> */}
            </Route>
            <Route exact path="/">
              {/* <Search /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
