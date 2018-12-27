import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Sidebar from './Sidebar';
import Content from './Content';
import PostModal from './PostModal';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <Sidebar/>
          <Content/>
          <PostModal/>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
