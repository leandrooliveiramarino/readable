import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPageTitle } from '../actions/page';
import PostForm from './PostForm';
import { hidePostMessage } from '../actions/postMessage';
import { UPDATE_POST, handleUpVote, handleDownVote } from '../actions/posts';
import PropTypes from 'prop-types';

class PostPage extends Component {

  static propTypes = {
    post: PropTypes.object,
    history: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  }

  upVote = () => {
    this.props.dispatch(handleUpVote(this.props.id));
  }

  downVote = () => {
    this.props.dispatch(handleDownVote(this.props.id));
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
          <div className='vote'>
            <hr/>
            <div className='card__score card--left'>
              <p className='score__vote'>Current vote:</p>
              <i className='fa fa-angle-up score__score-up' onClick={this.upVote}></i>
              <span className='score__number'>{this.props.post ? this.props.post.voteScore : null}</span>
              <i className='fa fa-angle-down score__score-down' onClick={this.downVote}></i>
            </div>
            <div className='card__comments card--right'>
              <p className='amount__comment'>Comments:</p>
              <i className='fa fa-comments'></i>
              <span className='comments__number'>{this.props.post ? this.props.post.commentCount : null}</span>
            </div>
          </div>
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