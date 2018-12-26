import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddPost } from '../actions/posts';

class ModalMessage extends Component {

  handleSubmit = () => {
    const post = this.props.form;
    this.props.dispatch(handleAddPost(post));
    this.props.history.push('/');
  }

  render() {
    return (
      <div className={`modal__message ${this.props.hasInvalidFields && 'modal__message--danger'}`}>
        {!this.props.hasInvalidFields &&
          <p>{this.props.message}
            <button type='button' className='message__option' onClick={this.props.hideSubmitMessage}>No</button>
            <button type='button' className='message__option' onClick={this.handleSubmit}>Yes</button>
          </p>
        }
        {!!this.props.hasInvalidFields &&
          <p>{this.props.message}</p>
        }
      </div>
    );
  }
}

export default withRouter(connect()(ModalMessage));
