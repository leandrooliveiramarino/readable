import React from 'react';
import Post from './Post';
import PostMessage from './PostMessage';
import Header from './Header';
import { connect } from 'react-redux';

const Content = props => {
  return (
    <div id='content' className='site-content'>
      <Header/>
      <div id='blog-wrapper' className={`${!props.postMessage.show ? 'blog-wrapper--100' : ''}`}>
        <div className={`blog-holder center-relative ${!props.postMessage.show ? 'blog-holder--90' : ''}`}>
          {
            Object.keys(props.posts).map(index => (
              <Post key={props.posts[index].id} {...props.posts[index]} />
            ))
          }
        </div>
        <div className='clear'></div>
      </div>
      <PostMessage/>
      <div className='clear'></div>
    </div>
  );
}

function mapStateToProps({ posts, postMessage }) {
  return {
    posts,
    postMessage
  };
}

export default connect(mapStateToProps)(Content);