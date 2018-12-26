import React from 'react';
import { connect } from 'react-redux';
import Options from './Options';

const Header = (props) => {
  return (
    <div className={`header ${!props.postMessage.show && 'header--100'}`}>
      <div className='header__title'>
        <h2 className='header__site-name'>Readable</h2>
      </div>
      <Options/>
    </div>
  );
}

function mapStateToProps({ postMessage }) {
  return {
    postMessage
  };
}

export default connect(mapStateToProps)(Header);