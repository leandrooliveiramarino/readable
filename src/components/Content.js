import React, { Component } from 'react';
import PostMessage from './PostMessage';
import PostList from './PostList';
import ResponseList from './ResponseList';
import PostPage from './PostPage';
import NotFound from './NotFound';
import Header from './Header';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

class Content extends Component {

  static propTypes = {
    categories: PropTypes.object.isRequired
  }

  render() {
    return (
      <div id='content' className='site-content'>
        <Header/>
        {
          /**
           * Prevenindo a renderização das duas situações seguintes simultaneamente
           */
        }
        <Switch>
          <Route
            exact
            path='/not-found'
            component={NotFound}
          />
          <Route
            exact
            path='/:category'
            render={props => <PostList category={props.match.params.category} />}
          />
        </Switch>

        <Route
          path='/:category/:id'
          component={ResponseList}
        />
        <Route
          path='/:category/:id'
          component={PostPage}
        />
        <Route exact path='/' render={() => <PostList category={null}/>} />

        <Route exact path='/' component={PostMessage} />
        <Route
          exact
          path='/:category'
          component={PostMessage}
        />
        <div className='clear'></div>
      </div>
    );
  }
}

function mapStateToProps({ categories, postMessage }) {
  return {
    postMessage,
    categories
  };
}

export default withRouter(connect(mapStateToProps)(Content));