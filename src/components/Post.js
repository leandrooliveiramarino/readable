import React, { Component } from 'react';
import { limitCharacters } from '../utils/helper.js';
import { showPostMessage } from '../actions/postMessage';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Post extends Component {

  showPostMessage = () => {
    this.props.dispatch(showPostMessage(this.props));
  }

  render() {
    return (
      <div className='card' onClick={this.showPostMessage}>
        <div className='card__content'>
          <Link to={`/posts/${this.props.id}`}>
            <h2 className='content__title'>{limitCharacters(this.props.title, 25)}</h2>
          </Link>
          <small className='content__info'><b>Posted by:</b> {this.props.author}</small>
          <small className='content__info'><b>At</b> {this.props.timestamp}</small>
          <small className='content__info'><b>On</b> <Link to={`/${this.props.category}`}>{this.props.category}</Link></small>
          <hr />
          <div className='card__text'>
            {limitCharacters(this.props.body, 30)}
          </div>
        </div>
        <div className='card__score'>
          <i className='fa fa-angle-up score__score-up'></i>
          <span className='score__number'>{this.props.voteScore}</span>
          <i className='fa fa-angle-down score__score-down'></i>
        </div>
        <div className='card__comments'>
          <i className='fa fa-comments'></i>
          <span className='comments__number'>{this.props.commentCount}</span>
        </div>
      </div>
    );
  }
}

export default connect()(Post);