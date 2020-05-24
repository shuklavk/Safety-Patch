import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Registration from './components/Registration';
import Login from './components/Login';
import Request from './components/Request'
import Admin from './components/Admin'
import HotelView from './components/HotelView';
import SearchPage from './components/SearchPage';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import logo from './safetyPatchLogo.png';

function App() {
  return (
    <div>
      <div>
        <Router>
          <NavBar />
          <Switch className={styles.content}>
            <Route path="/hotels">{/* <Hotels /> */}</Route>
            <Route path="/results">
              {/* <Results /> */}
            </Route>
            <Route path="/register">
              <Registration />
            </Route>
            <Route path="/login">
              <Login />
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
