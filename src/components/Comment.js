import React, { Component } from 'react';
import { limitCharacters } from '../utils/helper.js';
import { showPostMessage } from '../actions/postMessage';
import { handleUpVote, handleDownVote } from '../actions/posts';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helper';

class Comment extends Component {

  upVote = () => {
    this.props.dispatch(handleUpVote(this.props.id));
  }

  downVote = () => {
    this.props.dispatch(handleDownVote(this.props.id));
  }

  toPage = () => {
    this.props.history.push(`/${this.props.category}/${this.props.id}`);
  }

  render() {
    return (
      <div
        className={`card card--100`}
        onClick={this.showPostMessage}
      >
        <div className='card__content'>
          <small className='content__info'><b>Posted by:</b> {this.props.author}</small>
          <small className='content__info'><b>At</b> {formatDate(this.props.timestamp)}</small>
          <hr />
          <div className='card__text'>
            {limitCharacters(this.props.body, 200)}
          </div>
        </div>
        <div className='card__score'>
          <i className='fa fa-angle-up score__score-up' onClick={this.upVote}></i>
          <span className='score__number'>{this.props.voteScore}</span>
          <i className='fa fa-angle-down score__score-down' onClick={this.downVote}></i>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ postMessage }) {
  return {
    postMessage
  };
}

export default withRouter(connect(mapStateToProps)(Comment));