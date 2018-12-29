import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { hideModal } from '../actions/modal';
import { ADD_POST } from '../actions/posts';

class PostModal extends Component {

  hideModal = e => {
    const clickedElement = e.target;

    if(clickedElement.id === 'modal' || clickedElement.id === 'closeButton') {
      this.props.dispatch(hideModal());
    }
  }

  render() {
    return (
      <div className={`modal ${this.props.modal.show ? 'modal--active' : ''}`} id='modal' onClick={this.hideModal}>
        <div className='modal__content'>
          <button type='button' id='closeButton' className='modal__close-button' onClick={this.hideModal}>&times;</button>
          <PostForm
            title={this.props.modal.title}
            submitButtonLabel={this.props.modal.submitButtonLabel}
            action={this.props.modal.action ? this.props.modal.action : ADD_POST}
          />
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories, modal }) {
  return {
    modal
  }
}

export default connect(mapStateToProps)(PostModal);