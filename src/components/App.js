import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Sidebar from './Sidebar';
import Content from './Content';
import PostModal from './PostModal';
import PropTypes from 'prop-types';

class App extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          {
            this.props.loading
              ? null
              :
              <div>
                <Sidebar/>
                <Content/>
                <PostModal/>
              </div>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, categories }) {
  return {
    loading: authedUser === null,
    categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => dispatch(handleInitialData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
