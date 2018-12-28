import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { setPageTitle } from '../actions/page';

class PostList extends Component {

  componentDidMount = () => {
    this.props.dispatch(setPageTitle(this.props.category));
  }

  render() {
    return (
      <div id='blog-wrapper' className={`${!this.props.postMessage.show ? 'blog-wrapper--100' : ''}`}>
        <div className={`blog-holder center-relative ${!this.props.postMessage.show ? 'blog-holder--90' : ''}`}>
          {
            this.postsByCategory(this.props.category)
          }
        </div>
        <div className='clear'></div>
      </div>
    );
  }

  postsByCategory = category => {
    if(!category) {
      return Object.keys(this.props.posts).map(index => (
        <Post key={this.props.posts[index].id} {...this.props.posts[index]} />
      ))
    }

    return Object.keys(this.props.posts).filter(index => {
      return this.props.posts[index].category === category;
    })
    .map(index => (
      <Post key={this.props.posts[index].id} {...this.props.posts[index]} />
    ))
  }
}

function mapStateToProps({ posts, postMessage }) {
  return {
    posts,
    postMessage
  };
}

export default connect(mapStateToProps)(PostList);
