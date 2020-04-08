import React, { Component } from 'react';
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';
import Poll from '../components/poll';

class Homepage extends Component {
  state = {
    activeItem: '1',
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='col-md-6 mx-auto my-auto'>
          <MDBContainer>
            <MDBNav className='nav-tabs mt-5'>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to='#'
                  active={this.state.activeItem === '1'}
                  onClick={this.toggle('1')}
                  role='tab'
                >
                  Unanwered Questions
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to='#'
                  active={this.state.activeItem === '2'}
                  onClick={this.toggle('2')}
                  role='tab'
                >
                  Answered Questions
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.activeItem}>
              <MDBTabPane tabId='1' role='tabpanel'>
                <Poll />
                <Poll />
                <Poll />
              </MDBTabPane>
              <MDBTabPane tabId='2' role='tabpanel'>
                <Poll />
                <Poll />
                <Poll />
              </MDBTabPane>
            </MDBTabContent>
          </MDBContainer>
        </div>
      </div>
    );
  }
}
export default Homepage;
