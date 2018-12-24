import React from 'react';
import Post from './Post';
import PostMessage from './PostMessage';
import Header from './Header';
import { connect } from 'react-redux';

const Content = (props) => {
  return (
    <div id='content' className='site-content'>
      <Header/>
      <div id='blog-wrapper'>
        <div className='blog-holder center-relative'>
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

function mapStateToProps({ posts }) {
  return {
    posts
  };
}

export default connect(mapStateToProps)(Content);