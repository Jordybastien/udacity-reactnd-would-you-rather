import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Login from './Login';

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route path='/' exact component={Homepage} />
          <Route path='/login' exact component={Login} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
