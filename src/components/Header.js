import React from 'react';
import Options from './Options';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__title'>
        <h2 className='header__site-name'>Readable</h2>
      </div>
      <Options/>
    </div>
  );
}

export default Header;