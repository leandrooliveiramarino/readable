import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class PostMessage extends Component {

  toPage = id => {
    this.props.history.push(`/${this.props.posts[id].category}/${id}`);
  }

  render() {
    return (
      <div
        className={`featured-image-holder ${this.props.postMessage.show && 'show-post-message'}`}
        onClick={e => {
          this.toPage(this.props.postMessage.postId)}
        }
      >
        <div className='featured-post-image'>
          <blockquote className='post-message'>
            {this.props.postMessage.message}
          </blockquote>
          <p className='post-message__details'>click to see more details</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ postMessage, posts }) {
  return {
    postMessage,
    posts
  };
}

export default withRouter(connect(mapStateToProps)(PostMessage));