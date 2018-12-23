import React from 'react';

const Sidebar = () => {
    return (
      <div id='sidebar' className='sidebar'>
        <div className='menu-right-part'>
          <div className='logo-holder'>
            <a href='index.html'>
              <img src='images/logo.png' alt='Suppablog WP'/>
            </a>
          </div>
          <div className='social-holder'>
            <div className='social-list'>
              <a href='#'><img src='images/redux-icon.png' width='25' height='25' /></a>
              <a href='#'><img src='images/react-icon.png' width='25' height='25' /></a>
              <a href='#'><img src='images/udacity-icon.png' width='25' height='25' /></a>
            </div>
          </div>
          <div className='fixed scroll-top'>
            <i className='fa fa-caret-square-o-up' aria-hidden='true'></i>
          </div>
        </div>
        <div className='clear'></div>
      </div>
    );
}

export default Sidebar;