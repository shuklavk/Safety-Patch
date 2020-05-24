import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Registration from './components/Registration';
import Login from './components/Login';
import Request from './components/Request';
import Admin from './components/Admin';
import HotelView from './components/HotelView';
import SearchPage from './components/SearchPage';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import AgencyNavBar from './components/AgencyNavBar';
import logo from './safetyPatchLogo.png';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';

const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <div>
          <Router>
            <Switch className={styles.content}>
              <Route path="/hotels">{/* <Hotels /> */}</Route>
              <Route path="/results">{/* <Results /> */}</Route>
              <Route path="/register">
                <NavBar />
                <Registration />
              </Route>
              <Route exact path="/login">
                <NavBar />
                <Login />
              </Route>
              <Route path="/request">
                <div className={styles.container}>
                  <Request />
                </div>
              </Route>
              <Route path="/admin/respondent">
                {/* <div className={styles.container}> */}
                <AgencyNavBar />
                <Admin />
                {/* </div> */}
              </Route>
              <Route exact path="/search">
                {/* <Search /> */}
                <NavBar />
                <SearchPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
