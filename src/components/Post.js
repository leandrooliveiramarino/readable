import React, { Component } from 'react';
import { limitCharacters } from '../utils/helper.js';
import { showPostMessage } from '../actions/postMessage';
import { handleUpVote, handleDownVote } from '../actions/posts';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helper';
import PropTypes from 'prop-types';

class Post extends Component {

  static propTypes = {
    redirectWhenClicked: PropTypes.bool,
    history: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    postMessage: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired
  }

  showPostMessage = e => {
    const clickedElement = e.target;

    /**
     * Ao clicar nos elementos discriminados na constante "exceptParents", o evento de exibir a mensagem não será despachado
     */
    const exceptParents = ['.card__score', '.card__comments', '.card-share'];
    const proceedIntent = !exceptParents.filter(element => clickedElement.closest(element)).length;

    if(proceedIntent && !this.props.redirectWhenClicked) {
      this.props.dispatch(showPostMessage(this.props));
    }

    /**
     * Na página de edição/visualização do comentário do usuário, é passada a propriedade "redirectWhenClicked", prevenindo ou permitindo a abertura da modal lateral de visualização do corpo do comentário e redirecionando (ou não) o usuário para a respectiva página do comentário.
     */
    if(proceedIntent && this.props.redirectWhenClicked) {
      this.props.history.push(`/${this.props.category}/${this.props.id}`);
    }
  }

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
        className={`card ${this.props.postMessage.postId === this.props.id ? 'card--active' : ''}`}
        onClick={this.showPostMessage}
      >
        <button type='button' className='card-share card-share__twitter' value='Share on Twitter' onClick={() => this.shareOnTwitter(this.props.author, this.props.title, this.props.body)}/>
        <Link
          target='_blank'
          to={{
            pathname: `https://www.facebook.com/sharer/sharer.php?u=${document.location.href}${this.props.category}/${this.props.id}`
          }}
          className='card-share card-share__facebook'
          alt='Share on Facebook'
        />
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
        <div className='card__comments' onClick={this.toPage}>
          <i className='fa fa-comments'></i>
          <span className='comments__number'>{this.props.commentCount}</span>
        </div>
      </div>
    );
  }

  shareOnTwitter = (authorName, postTitle, postBody) => {
    const hashtags = [
      'udacity',
      'readable',
      'project',
      'leandroMarino'
    ];
    const text = `${authorName} just posted \n\n"${postTitle}\n${postBody}"\n\n on Leandro's Readable project`;
    const shareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&hashtags=${hashtags.join(',')}`;

    window.open(
      shareURL,
      '',
      'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
    )
  };
}

function mapStateToProps({ postMessage }) {
  return {
    postMessage
  };
}

export default withRouter(connect(mapStateToProps)(Post));