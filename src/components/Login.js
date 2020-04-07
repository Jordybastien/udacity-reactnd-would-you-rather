import React, { Component } from 'react';
import Button from './shared/Button';
import Select from './shared/Select';

class Login extends Component {
  handleChange = () => {
    console.log('==> CLICKED <==');
  };

  render() {
    const arr = [
      {
        user: 'User 1',
        image:
          'https://res.cloudinary.com/pristinetechnicalgroup/image/upload/v1586193896/eymlxmhvrvgl1o6wkjpd.jpg',
      },
      {
        user: 'User 2',
        image:
          'https://res.cloudinary.com/pristinetechnicalgroup/image/upload/v1586192129/pvow4oxyyfnc4zbz3lv3.jpg',
      },
      {
        user: 'User 3',
        image:
          'https://res.cloudinary.com/pristinetechnicalgroup/image/upload/v1586192129/pvow4oxyyfnc4zbz3lv3.jpg',
      }
    ];
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
              <Select options={arr} onChange={this.handleChange} />
              <Button goTo='/' toExecute={this.handleChange} label='Test' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
