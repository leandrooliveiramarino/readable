import React, { Component } from 'react';
import ModalMessage from './ModalMessage';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { firstLetterToUppercase } from '../utils/helper';

class PostModal extends Component {
  state = {
    form: {
      title: '',
      author: '',
      body: '',
      category: 'react'
    },
    submitted: false,
    invalidFields: [],
    message: ''
  };

  handleChange = e => {
    const input = e.target.value;
    const name = e.target.name;

    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: input
      }
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const invalidFields = Object.keys(this.state.form).filter(index => this.state.form[index] === '');
    const hasInvalidFields = invalidFields.length;
    let message = 'Do you really want to proceed?';

    if(hasInvalidFields) {
      message = 'Please, fill the inputs.';
    }
    // const { text } = this.state;
    // const { dispatch, id } = this.props;

    // dispatch(handleAddTweet(text, id));

    this.setState(prevState => ({
      form: {
        ...prevState.form
      },
      submitted: true,
      invalidFields,
      message
    }));
  }

  hideSubmitMessage = () => {
    this.setState(prevState => ({
      ...prevState,
      submitted: false
    }));
  }

  render() {
    return (
      <div className='modal' id='modal'>
        <div className='modal__content'>
          <div className='form-message'>
            <h2 className='modal__action'>Add Post</h2>
            <Link to='/' id='closeButton' className='modal__close-button'>&times;</Link>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                className={`form-control ${this.state.invalidFields.indexOf('title') > -1 &&
                  this.state.submitted &&
                  'form-control--danger'}`
                }
                id='title'
                name='title'
                placeholder='Title'
                value={this.state.form.title}
                onChange={this.handleChange}
              />
              <input
                type='text'
                className={`form-control ${this.state.invalidFields.indexOf('author') > -1 &&
                  this.state.submitted &&
                  'form-control--danger'}`
                }
                id='author'
                name='author'
                placeholder='Author'
                value={this.state.form.author}
                onChange={this.handleChange}
              />
              <textarea
                name='body'
                className={`${this.state.invalidFields.indexOf('body') > -1 &&
                  this.state.submitted &&
                  'form-control--danger'}`
                }
                id='message'
                placeholder='Message'
                value={this.state.form.body}
                onChange={this.handleChange}
              >
              </textarea>
              <label
                htmlFor='category'
                className='label-name'
              >
                Category
              </label>
              <select
                className={`form-select ${this.state.invalidFields.indexOf('category') > -1 &&
                  this.state.submitted &&
                  'form-control--danger'}`
                }
                id='category'
                name='category'
                onChange={this.handleChange}
                value={this.state.form.category}
              >
              {
                this.props.categories.map(category =>
                  <option
                    key={`${category}`}
                    value={`${category}`}
                  >{`${firstLetterToUppercase(category)}`}
                  </option>
                )
              }
              </select>
              <button className='form-message__submit'>Submit</button>
            </form>
          </div>
          {
            this.state.submitted &&
              <ModalMessage
                hasInvalidFields={this.state.invalidFields.length}
                message={this.state.message}
                form={this.state.form}
                hideSubmitMessage={this.hideSubmitMessage}
              />
          }
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: Object.keys(categories).map(index => categories[index].name)
  }
}

export default connect(mapStateToProps)(PostModal);