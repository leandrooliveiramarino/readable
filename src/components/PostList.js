import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { setPageTitle } from '../actions/page';
import { formatListToObject } from '../utils/helper';

class PostList extends Component {

  componentDidMount = () => {
    this.props.dispatch(setPageTitle(this.props.category));
  }

  render() {
    return (
      <div id='blog-wrapper' className={`blog-wrapper ${!this.props.postMessage.show ? ' blog-wrapper--100' : 'blog-wrapper--active'}`}>
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

function mapStateToProps({ posts, postMessage, sort }) {
  const postList = Object.keys(posts).map(index => {
    return posts[index];
  });

  /**
   * Aplicando ordenação aos elementos
   */
  const orderedPosts = postList.sort((a, b) => {

    if(a[sort.field] === undefined || b[sort.field] === undefined) {
      return 0;
    }

    const aField = a[sort.field].toString().toLowerCase();
    const bField = b[sort.field].toString().toLowerCase();

    if(aField > bField) {
      return 1 * Number(sort.ordination);
    }

    if(aField < bField) {
      return -1 * Number(sort.ordination);
    }
    return 0;
  });

  return {
    posts: formatListToObject(orderedPosts),
    postMessage,
    sort
  };
}

export default connect(mapStateToProps)(PostList);
