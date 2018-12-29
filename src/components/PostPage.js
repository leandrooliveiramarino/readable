import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPageTitle } from '../actions/page';
import PostForm from './PostForm';
import { hidePostMessage } from '../actions/postMessage';
import { UPDATE_POST } from '../actions/posts';
import PropTypes from 'prop-types';

class PostPage extends Component {

  static propTypes = {
    post: PropTypes.object,
    history: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  }

  componentDidMount = () => {
    /**
     * Se o post não existir, redirecionar usuário para a página 404
     */
    if(!this.props.post) {
      this.props.history.push('/not-found');
      return;
    }

    this.props.dispatch(hidePostMessage());
    this.props.dispatch(setPageTitle('post', this.props.post.title));
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
    post: posts[id]
  };
}

export default connect(mapStateToProps)(PostPage);