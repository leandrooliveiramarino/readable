import React from 'react';
import { connect } from 'react-redux';

const PostMessage = (props) => {
  return (
    <div className={`featured-image-holder ${props.postMessage.show && 'show-post-message'}`}>
      <div className='featured-post-image'>
        <blockquote className='post-message'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </blockquote>
      </div>
    </div>
  );
}

function mapStateToProps({ postMessage }) {
  return {
    postMessage
  };
}

export default connect(mapStateToProps)(PostMessage);