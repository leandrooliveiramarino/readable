import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPageTitle } from '../actions/page';

class NotFound extends Component {
  state = {
    timeToRedirect: null
  }

  componentDidMount = () => {
    this.props.dispatch(setPageTitle('404', 'Page not found'));
    this.setState(prevState => ({
      timeToRedirect: 10
    }));
  }

  componentDidUpdate = () => {

    if(!this.state.timeToRedirect) {
      this.props.history.push('/');
      return;
    }

    setTimeout(() => {
      this.setState(prevState => {
        const count = --prevState.timeToRedirect;
        return {
          timeToRedirect: count < 0 ? 0 : count
        }
      });
    }, 1000);
  }

  render() {
    return (
      <div id='blog-wrapper' className='blog-wrapper--100'>
        <div className='blog-holder center-relative blog-holder--90'>
          <div className='page-404'>
            <h1>Page not found! You will be redirected to the home page in</h1>
            <br/>
            <h2>{this.state.timeToRedirect} second{`${this.state.timeToRedirect > 1 ? 's' : ''}`}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(NotFound);