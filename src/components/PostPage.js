import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPageTitle } from '../actions/page';
import PostForm from './PostForm';
import { hidePostMessage } from '../actions/postMessage';
import { UPDATE_POST } from '../actions/posts';

class PostPage extends Component {

  componentDidMount = () => {
    this.props.dispatch(hidePostMessage());
    this.props.dispatch(setPageTitle('post', this.props.posts[this.props.id].title));
  }

  render() {
    return (
      <div className='featured-image-holder show-post-message'>
        <div className='post-form'>
          <PostForm
            postId={this.props.id}
            title='Edit'
            submitButtonLabel='Edit'
            action={UPDATE_POST}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts }, props) {
  const { id } = props.match.params;
  return {
    id,
    posts
  };
}

export default connect(mapStateToProps)(PostPage);