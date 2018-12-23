import React from 'react';

const Content = () => {
    return (
        <div id='content' className='site-content'>
          <div className='header'>
            <div className='header__title'>
              <h2 className='header__site-name'>Readable</h2>
            </div>
            <div className='options'>
              <form className='options__form'>
                <label className='options__sort-by'>Sort By</label>
                <select className='options__dropdown'>
                  <option value='AUTHOR'>Author</option>
                  <option value='COMMENT'>Comment</option>
                  <option value='DATE'>Date</option>
                  <option value='VOTE'>Vote</option>
                </select>
                <select className='options__dropdown'>
                  <option value='DECRESCENT'>Decrescent</option>
                  <option value='CRESCENT'>Crescent</option>
                </select>
              </form>
              <a href='new.html' className='options__new-post'>New Post</a>
            </div>
          </div>
          <div id='blog-wrapper'>
            <div className='blog-holder center-relative'>
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
            </div>
            <div className='clear'></div>
          </div>
          <div className='featured-image-holder show-post-message'>
            <div className='featured-post-image'>
              <blockquote className='post-message'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </blockquote>
            </div>
          </div>
          <div className='clear'></div>
        </div>
    );
}

export default Content;