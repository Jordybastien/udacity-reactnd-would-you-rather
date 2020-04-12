import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Navbar from './components/Navbar';
import Homepage from './views/Homepage';
import Login from './views/Login';
import Question from './components/poll/Question';
import Leaderboard from './views/LeaderBoard';
import NewQuestion from './views/Newquestion';
import { handleInitialData } from './actions/shared';
import { setAuthedUser } from './actions/authedUser';
import NotFound from './components/Notfound';

class App extends Component {
  /**
   * @description This is the lifecycle that will be invoked
   *  when the component will be mounted and executes the function
   * to fetch data
   */
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const user = localStorage.getItem('authedUser');
    if (user) {
      this.props.dispatch(setAuthedUser(user));
    }
    return (
      <Router>
        <Fragment>
          <Navbar />
          <LoadingBar />
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/login' component={Login} />
            <Route path='/questions/:question_id' component={Question} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/add' component={NewQuestion} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
