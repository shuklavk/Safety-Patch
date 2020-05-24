import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Registration from './components/Registration';
import Login from './components/Login';
import SearchPage from './components/SearchPage';
import styles from './App.module.css';
import logo from './safetyPatchLogo.png';

function App() {
  return (
    <div className={styles.app}>
      <div>
        <Router>
          <Navbar className={styles.navbar} expand="sm">
            <Navbar.Brand>
              <img src={logo} height="80" />
            </Navbar.Brand>
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
          <Switch className={styles.content}>
            <Route path="/hotels">{/* <Hotels /> */}</Route>
            <Route path="/register">
              <Registration />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/results">{/* <Results /> */}</Route>
            <Route exact path="/search">
              {/* <Search /> */}
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
