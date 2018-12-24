import React from 'react';
import { limitCharacters } from '../utils/helper.js';
import { Link } from 'react-router-dom';

const Post = (props) => {
  return (
    <div className='card'>
      <div className='card__content'>
        <Link to={`/posts/${props.id}`}>
          <h2 className='content__title'>{limitCharacters(props.title, 25)}</h2>
        </Link>
        <small className='content__info'><b>Posted by:</b> {props.author}</small>
        <small className='content__info'><b>At</b> {props.timestamp}</small>
        <small className='content__info'><b>On</b> <Link to={`/${props.category}`}>{props.category}</Link></small>
        <hr />
        <div className='card__text'>
          {limitCharacters(props.body, 30)}
        </div>
      </div>
      <div className='card__score'>
        <i className='fa fa-angle-up score__score-up'></i>
        <span className='score__number'>{props.voteScore}</span>
        <i className='fa fa-angle-down score__score-down'></i>
      </div>
      <div className='card__comments'>
        <i className='fa fa-comments'></i>
        <span className='comments__number'>{props.commentCount}</span>
      </div>
    </div>
  );
}

export default Post;