import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Select from '../components/shared/Select';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  state = {
    user: '',
  };

  /**
   * @description handle changes from the selected User
   * @param  e receives event
   * @returns it changes the state to the new value
   */
  handleChange = (e) => {
    return this.setState({ user: e.target.value });
  };

  /**
   * @description handle form submission
   * @param  e receives event
   * @returns it dispactches an authenticated User and redirect user to homepage
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    this.props.dispatch(setAuthedUser(user));
    localStorage.setItem('authedUser', user);
    return this.props.history.push('/');
  };

  render() {
    const { allUsers, isAuth } = this.props;
    const { user } = this.state;
    if (isAuth) {
      return <Redirect to='/' />;
    }
    return (
      <div className='container'>
        <div className='col-md-5 mx-auto py-3'>
          <div className='card-box'>
            <div className='card-heading'>
              <h5 className='text-center font-weight-bold'>
                Welcome to would you rather App{' '}
              </h5>
              <p className='text-center'>Please sign in to continue</p>
            </div>
            <div className='mx-auto'>
              <img
                src='https://res.cloudinary.com/pristinetechnicalgroup/image/upload/v1586282581/logo192_cl1faa.png'
                alt='logo'
                width='100px'
              />
            </div>
            <div className='login-form'>
              <h4 className='text-center'>Login</h4>
              <form className='new-tweet' onSubmit={this.handleSubmit}>
                <Select options={allUsers} onChange={this.handleChange} />
                <button
                  className='btn btn-primary btn-block custom-btn'
                  type='submit'
                  disabled={user === ''}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    allUsers: Object.keys(users).map((user) => {
      return user;
    }),
    isAuth: authedUser !== null,
  };
};

export default withRouter(connect(mapStateToProps)(Login));
