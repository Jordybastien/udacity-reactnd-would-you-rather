import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './views/Homepage';
import Login from './views/Login';
import Question from './components/poll/Question';
import Result from './components/poll/Result';
import Leaderboard from './views/LeaderBoard';
import NewQuestion from './views/Newquestion';

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route path='/' exact component={Homepage} />
          <Route path='/login' exact component={Login} />
          <Route path='/question' exact component={Question} />
          <Route path='/result' exact component={Result} />
          <Route path='/leaderboard' exact component={Leaderboard} />
          <Route path='/add' exact component={NewQuestion} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
