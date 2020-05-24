import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Registration from './components/Registration';
import Login from './components/Login';
import SearchPage from './components/SearchPage';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import logo from './safetyPatchLogo.png';

function App() {
  return (
    <div className={styles.app}>
      <div>
        <Router>
          <NavBar />
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
