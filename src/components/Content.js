import React from 'react';
import Comment from './Comment';
import PostMessage from './PostMessage';
import Header from './Header';

const Content = () => {
  return (
    <div id='content' className='site-content'>
      <Header/>
      <div id='blog-wrapper'>
        <div className='blog-holder center-relative'>
          <Comment/>
        </div>
        <div className='clear'></div>
      </div>
      <PostMessage/>
      <div className='clear'></div>
    </div>
  );
}

export default Content;