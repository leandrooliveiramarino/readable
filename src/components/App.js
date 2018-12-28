import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
          {
            this.props.loading
              ? null
              :
              <div>
                <Sidebar/>
                <Content/>
                <Route exact path='/' component={PostModal}/>
                {
                  Object.keys(this.props.categories).map(index =>
                    <Route
                      key={`${this.props.categories[index].path}`}
                      path={`/${this.props.categories[index].path}`}
                      component={PostModal}
                    />
                  )
                }
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

export default connect(mapStateToProps)(App);
