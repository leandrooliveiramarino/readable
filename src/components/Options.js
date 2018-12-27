import React, { Component } from 'react';
import { showModal } from '../actions/modal';
import { connect } from 'react-redux';

class Options extends Component {

  showModal = () => {
    this.props.dispatch(showModal());
  }

  render() {
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
        <button type='button' className='options__new-post' onClick={this.showModal}>New Post</button>
      </div>
    );
  }
}

export default connect()(Options);