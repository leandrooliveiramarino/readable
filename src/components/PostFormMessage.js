import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVE_POST } from '../actions/posts';

class PostFormMessage extends Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
    hideSubmitMessage: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    hasInvalidFields: PropTypes.number.isRequired,
    action: PropTypes.string
  }

  render() {
    return (
      <div className={`modal__message ${this.props.hasInvalidFields && 'modal__message--danger'}`}>
        {(!this.props.hasInvalidFields || this.props.action === REMOVE_POST) &&
          <p>{this.props.message}
            <button type='button' className='message__option' onClick={this.props.hideSubmitMessage}>No</button>
            <button type='button' className='message__option' onClick={this.props.handleSubmit}>Yes</button>
          </p>
        }
        {(!!this.props.hasInvalidFields && this.props.action !== REMOVE_POST) &&
          <p>{this.props.message}</p>
        }
      </div>
    );
  }
}

export default withRouter(connect()(PostFormMessage));
