import React from 'react';

const Options = () => {
  return (
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
  );
}

export default Options;