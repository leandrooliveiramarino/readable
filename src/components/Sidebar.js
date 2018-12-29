import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import DevelopedBy from './DevelopedBy';
import PropTypes from 'prop-types';

const Sidebar = props => {
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
                <Route
                  key={props.categories[index].name}
                  path={`/${props.categories[index].path}`}
                  children={({match}) => {
                    return (
                      <Link to={`/${props.categories[index].path}`}>
                        <img
                          src={`/images/${props.categories[index].name}-icon.png`}
                          width='25'
                          height='25'
                          alt={props.categories[index].name}
                          className={!match ? 'menu-icon--active' : ''}
                        />
                      </Link>
                    )
                  }}
                />
              ))
            }
            </div>
          </div>
          <DevelopedBy/>
          <div className='fixed scroll-top'>
            <i className='fa fa-caret-square-o-up' aria-hidden='true'></i>
          </div>
        </div>
        <div className='clear'></div>
      </div>
    );
}

Sidebar.propTypes = {
  categories: PropTypes.object.isRequired
}

function mapStateToProps(categories) {
  return {
    ...categories
  };
}

export default connect(mapStateToProps)(Sidebar);