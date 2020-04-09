import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Navbar from './components/Navbar';
import Homepage from './views/Homepage';
import Login from './views/Login';
import Question from './components/poll/Question';
import Result from './components/poll/Result';
import Leaderboard from './views/LeaderBoard';
import NewQuestion from './views/Newquestion';
import { handleInitialData } from './actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <LoadingBar />
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

export default connect()(App);
