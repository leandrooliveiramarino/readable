import React, { Component, Fragment } from 'react';
import { limitCharacters } from '../utils/helper.js';
import { showPostMessage } from '../actions/postMessage';
import { handleUpVote, handleDownVote, handleUpdateComment, UPDATE_COMMENT } from '../actions/comments';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helper';
import { showModal } from '../actions/modal';

class Comment extends Component {

  state = {
    editMode: false,
    oldBody: '',
    body: ''
  }

  upVote = () => {
    this.props.dispatch(handleUpVote(this.props.id));
  }

  downVote = () => {
    this.props.dispatch(handleDownVote(this.props.id));
  }

  componentDidMount = () => {
    this.setState(prevState => ({
      ...prevState,
      body: this.props.body
    }));
  }

  handleEdit = () => {
    this.setState(prevState => ({
      ...prevState,
      oldBody: prevState.body,
      editMode: true,
    }));
  }

  confirm = () => {
    this.setState(prevState => ({
      ...prevState,
      editMode: false
    }));

    this.props.dispatch(handleUpdateComment({
      body: this.state.body
    }, this.props.id));
  }

  cancel = () => {
    this.setState(prevState => ({
      ...prevState,
      body: prevState.oldBody,
      editMode: false
    }));
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  render() {
    return (
      <div
        className={`card card--100`}
      >
        <div className='card__content'>
          <small className='content__info'><b>Posted by:</b> {this.props.author}</small>
          <small className='content__info'><b>At</b> {formatDate(this.props.timestamp)}</small>
          <hr />
          <div className='card__text'>
            {
              this.state.editMode
                ? <input
                    type='text'
                    name='body'
                    value={this.state.body}
                    className='card__text--edit'
                    onChange={this.handleChange}
                    maxLength={150}
                    autoFocus
                  />
                : limitCharacters(this.state.body, 200)
            }
          </div>
        </div>
        <div className='card__score'>
          <i className='fa fa-angle-up score__score-up' onClick={this.upVote}></i>
          <span className='score__number'>{this.props.voteScore}</span>
          <i className='fa fa-angle-down score__score-down' onClick={this.downVote}></i>
        </div>
        <div className='card__options'>
          {
            !this.state.editMode
              ? <Fragment>
                  <button className='options__remove' type='button'>remove</button>
                  <button className='options__edit' type='button' onClick={this.handleEdit}>edit</button>
                </Fragment>
              : <Fragment>
                  <button className='options__cancel' type='button' onClick={this.cancel}>cancel</button>
                  <button className='options__save' type='button' onClick={this.confirm}>save</button>
                </Fragment>
          }
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(Comment));