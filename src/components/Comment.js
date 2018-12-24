import React from 'react';

const Comment = () => {
  return (
    <div className='card'>
      <div className='card__content'>
        <h2 className='content__title'>The title goes here!</h2>
        <small className='content__info'><b>Posted by:</b> Xurupitas</small>
        <small className='content__info'><b>At</b> 07.04.2018</small>
        <small className='content__info'><b>On</b> <a href='javascript:void(0)'>categorie</a></small>
        <hr />
        <div className='card__text'>
          This is the text written by Xurupitas
        </div>
      </div>
      <div className='card__score'>
        <i className='fa fa-angle-up score__score-up'></i>
        <span className='score__number'>7</span>
        <i className='fa fa-angle-down score__score-down'></i>
      </div>
      <div className='card__comments'>
        <i className='fa fa-comments'></i>
        <span className='comments__number'>3</span>
      </div>
    </div>
  );
}

export default Comment;