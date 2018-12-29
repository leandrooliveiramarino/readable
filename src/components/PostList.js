import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { setPageTitle } from '../actions/page';
import { formatListToObject } from '../utils/helper';
import PropTypes from 'prop-types';

class PostList extends Component {

  static propTypes = {
    postMessage: PropTypes.object.isRequired,
    category: PropTypes.string,
    posts: PropTypes.object.isRequired,
  }

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
    const postsAvailable = this.props.posts || {} ;

    if(!category) {
      if(!Object.keys(postsAvailable).length) {
        return <h4>No posts was found...</h4>;
      }

      return Object.keys(postsAvailable).map(index => (
        <Post key={postsAvailable[index].id} {...postsAvailable[index]} />
      ))
    }

    const filteredPosts = Object.keys(postsAvailable).filter(index => {
      return postsAvailable[index].category === category;
    });

    if(!Object.keys(filteredPosts).length) {
      return <h4>No posts was found...</h4>;
    }

    return filteredPosts.map(index => (
      <Post key={postsAvailable[index].id} {...postsAvailable[index]} />
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
