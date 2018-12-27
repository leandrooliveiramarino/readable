import React, { Component } from 'react';
import { limitCharacters } from '../utils/helper.js';
import { showPostMessage } from '../actions/postMessage';
import { handleUpVote, handleDownVote } from '../actions/posts';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helper';

class Post extends Component {

  showPostMessage = e => {
    const clickedElement = e.target;

    /**
     * Ao clicar nos elementos discriminados na constante "exceptParents", o evento de exibir a mensagem não será despachado
     */
    const exceptParents = ['.card__score', '.card__comments'];
    const willShowPostMessage = !exceptParents.filter(element => clickedElement.closest(element)).length;

    if(willShowPostMessage) {
      this.props.dispatch(showPostMessage(this.props));
    }
  }

  upVote = () => {
    this.props.dispatch(handleUpVote(this.props.id));
  }

  downVote = () => {
    this.props.dispatch(handleDownVote(this.props.id));
  }

  render() {
    return (
      <div
        className={`card ${this.props.postMessage.postId === this.props.id ? 'card--active' : ''}`}
        onClick={this.showPostMessage}
      >
        <div className='card__content'>
          <h2 className='content__title'>{limitCharacters(this.props.title, 25)}</h2>
          <small className='content__info'><b>Posted by:</b> {this.props.author}</small>
          <small className='content__info'><b>At</b> {formatDate(this.props.timestamp)}</small>
          <small className='content__info'><b>On</b> <Link to={`/${this.props.category}`}>{this.props.category}</Link></small>
          <hr />
          <div className='card__text'>
            {limitCharacters(this.props.body, 30)}
          </div>
        </div>
        <div className='card__score'>
          <i className='fa fa-angle-up score__score-up' onClick={this.upVote}></i>
          <span className='score__number'>{this.props.voteScore}</span>
          <i className='fa fa-angle-down score__score-down' onClick={this.downVote}></i>
        </div>
        <div className='card__comments'>
          <i className='fa fa-comments'></i>
          <span className='comments__number'>{this.props.commentCount}</span>
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

export default connect(mapStateToProps)(Post);