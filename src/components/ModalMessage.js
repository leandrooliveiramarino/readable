import React from 'react';

const ModalMessage = () => {
  return (
    <div className='modal__message hidden'>
      <p>Do you really want to remove the post? <button className='message__option'>No</button><button className='message__option'>Yes</button></p>
    </div>
  );
}

export default ModalMessage;