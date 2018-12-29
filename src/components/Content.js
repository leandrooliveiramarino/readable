import React, { Component } from 'react';
import PostMessage from './PostMessage';
import PostList from './PostList';
import ResponseList from './ResponseList';
import PostPage from './PostPage';
import NotFound from './NotFound';
import Header from './Header';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class Content extends Component {

  static propTypes = {
    categories: PropTypes.object.isRequired
  }

  render() {
    return (
      <div id='content' className='site-content'>
        <Header/>
        <Route
          exact
          path='/not-found'
          component={NotFound}
        />
        <Route
          path='/:category/:id'
          component={ResponseList}
        />
        <Route
          path='/:category/:id'
          component={PostPage}
        />

        {
          Object.keys(this.props.categories).map(index =>
            <Route
              exact
              key={`${this.props.categories[index].path}`}
              path={`/${this.props.categories[index].path}`}
              render={() => <PostList category={this.props.categories[index].name}/>}
            />
          )
        }
        <Route exact path='/' render={() => <PostList category={null}/>} />

        <Route exact path='/' component={PostMessage} />
        {
          Object.keys(this.props.categories).map(index =>
            <Route
              exact
              key={`${this.props.categories[index].path}`}
              path={`/${this.props.categories[index].path}`}
              component={PostMessage}
            />
          )
        }
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