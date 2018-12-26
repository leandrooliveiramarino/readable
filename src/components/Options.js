import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to='/post/new' className='options__new-post'>New Post</Link>
    </div>
  );
}

export default Options;