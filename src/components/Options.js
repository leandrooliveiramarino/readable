import React, { Component } from 'react';
import { showModal } from '../actions/modal';
import { changeSortByOptions } from '../actions/sort';
import { connect } from 'react-redux';
import { ADD_POST } from '../actions/posts';

class Options extends Component {

  state = {
    field: 'timestamp',
    ordination: '-1'
  }

  componentDidMount = () => {

    /**
     * Se props estiver preenchido, mantenha o estado correspondente ao componente
     */
    if(Object.keys(this.props.sort).length) {
      this.setState(({
        field: this.props.sort.field,
        ordination: this.props.sort.ordination
      }));
    }
  }

  handleOnChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.props.dispatch(changeSortByOptions({
      ...this.state,
      [name]: value
    }));

    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  showModal = () => {
    this.props.dispatch(showModal({
      action: ADD_POST,
      title: 'Add Post',
      submitButtonLabel: 'Add'
    }));
  }

  render() {
    return (
      <div className='options'>
        <form className='options__form'>
          <label className='options__sort-by'>Sort By</label>
          <select
            name='field'
            className='options__dropdown'
            value={this.state.field}
            onChange={this.handleOnChange}
          >
            <option value='timestamp'>Date</option>
            <option value='author'>Author</option>
            <option value='commentCount'>Comment</option>
            <option value='title'>Title</option>
            <option value='voteScore'>Vote</option>
          </select>
          <select
            name='ordination'
            className='options__dropdown'
            value={this.state.ordination}
            onChange={this.handleOnChange}
          >
            <option value='-1'>Decrescent</option>
            <option value='1'>Crescent</option>
          </select>
        </form>
        <button
          type='button'
          className='options__new-post'
          onClick={this.showModal}
        >New Post
        </button>
      </div>
    );
  }
}

function mapStateToProps({ sort }) {
  return {
    sort
  }
};

export default connect(mapStateToProps)(Options);