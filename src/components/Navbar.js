import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='mb-1 navbar navbar-expand-lg navbar-dark blue lighten-1'>
      <div className='container'>
        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent-555'
        >
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/'>
                Home
                <span className='sr-only'>(current)</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/question'>
                New Question
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/leaderboard'>
                LeaderBoard
              </NavLink>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto nav-flex-icons'>
            <li className='nav-item avatar'>
                <span className='mr-3 white-color'>Jordy Bastien Rugumbira</span>
                <img
                  src='https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg'
                  className='rounded-circle z-depth-0'
                  alt='avatar image'
                  height='35'
                />
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/login'>
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/signup'>
                Signup
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/logout'>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
