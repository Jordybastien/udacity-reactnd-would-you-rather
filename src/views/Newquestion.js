import React, { Component } from 'react';
import Button from '../components/shared/Button';
import TextBox from '../components/shared/TextBox';

class NewQuestion extends Component {
  state = {};

  handleChange() {
    console.log('==> CLICKED <==');
  }
  render() {
    return (
      <div className='container'>
        <div className='col-md-6 mx-auto my-auto'>
          <div className='card-box'>
            <div className='card-heading'>
              <h5 className='font-weight-bold pl-3 text-center'>
                Create Question
              </h5>
            </div>
            <div className='poll-body'>
              <div className='side-box'>
                <div className='poll-question'>
                  <span>
                    Complete the question
                  </span>
                  <h5 className='font-weight-bold mt-5'>Would you Rather?</h5>
                </div>
                <TextBox
                  type='text'
                  placeholder='Enter option two text here'
                  value=''
                  onChange={this.handleChange}
                />
                <p className='line-on-side'>
                  <span className='line-span text-center'>OR</span>
                </p>
                <TextBox
                  type='text'
                  placeholder='Enter option two text here'
                  value=''
                  onChange={this.handleChange}
                />
                <Button
                  goTo='/question'
                  toExecute={this.handleChange}
                  label='Submit'
                  classToUse='btn-primary'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewQuestion;
