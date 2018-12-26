import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    return (
      <div id='sidebar' className='sidebar'>
        <div className='menu-right-part'>
          <div className='logo-holder'>
            <Link to='/'>
              <img src='/images/logo.png' alt='Readable'/>
            </Link>
          </div>
          <div className='social-holder'>
            <div className='social-list'>
            {
              Object.keys(props.categories).map(index => (
                <Link key={props.categories[index].name} to={props.categories[index].path}><img src={`/images/${props.categories[index].name}-icon.png`} width='25' height='25'/></Link>
              ))
            }
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

function mapStateToProps(categories) {
  return {
    ...categories
  };
}

export default connect(mapStateToProps)(Sidebar);