import React, { Component } from 'react';
import PostMessage from './PostMessage';
import PostList from './PostList';
import ResponseList from './ResponseList';
import PostPage from './PostPage';
import Header from './Header';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

class Content extends Component {
  render() {
    return (
      <div id='content' className='site-content'>
        <Header/>
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