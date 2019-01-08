import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { firstLetterToUppercase } from '../utils/helper';
import PostFormMessage from './PostFormMessage';
import { hideModal } from '../actions/modal';
import { withRouter } from 'react-router-dom';
import { showModal } from '../actions/modal';
import {
  handleAddPost,
  handleUpdatePost,
  handleRemovePost,
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST
} from '../actions/posts';
import {
  handleAddComment,
  ADD_COMMENT
} from '../actions/comments';
import { setPageTitle } from '../actions/page';
import PropTypes from 'prop-types';

class PostForm extends Component {

  static propTypes = {
    post: PropTypes.object,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    action: PropTypes.string.isRequired,
    modal: PropTypes.object.isRequired,
    postId: PropTypes.string,
    title: PropTypes.string,
    categories: PropTypes.array.isRequired,
    submitButtonLabel: PropTypes.string
  }

  state = {
    form: {
      title: '',
      author: '',
      body: '',
      category: 'react'
    },
    submitted: false,
    invalidFields: [],
    message: '',
    action: ADD_POST,
    answerPostId: null
  };

  componentDidMount = () => {
    /**
     * Se acaso o objeto "post" não vier preenchido, devemos settar os atributos iniciais corretamente
     */
    if(this.props.post) {
      this.setState(prevState => ({
        ...prevState,
        form: {
          title: this.props.post.title,
          author: this.props.post.author,
          body: this.props.post.body,
          category: this.props.post.category,
        }
      }));
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id) {
      this.setState(prevState => ({
        ...prevState,
        form: {
          title: this.props.post.title,
          author: this.props.post.author,
          body: this.props.post.body,
          category: this.props.post.category,
        }
      }));
    }
  }

  cleanInputFields = () => {
    this.setState({
      submitted: false,
      invalidFields: [],
      message: '',
      action: ADD_POST,
      answerPostId: null,
      form: {
        title: '',
        author: '',
        body: '',
        category: 'react'
      }
    })
  }

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


  handleSubmit = () => {
    const form = this.state.form;

    switch(this.state.action) {
      case ADD_POST:
        this.props.dispatch(handleAddPost(form));
        this.props.dispatch(hideModal());
        this.cleanInputFields();
        break;
      case UPDATE_POST:
        this.props.dispatch(handleUpdatePost(form, this.props.post.id));
        this.props.dispatch(setPageTitle('post', form.title));
        this.hideSubmitMessage();
        break;
      case REMOVE_POST:
        this.props.dispatch(handleRemovePost(this.props.post.id));
        this.props.history.push('/');
        break;
      case ADD_COMMENT:
        this.props.dispatch(handleAddComment(form, this.state.answerPostId));
        this.props.dispatch(hideModal());
        this.cleanInputFields();
        break;
      default:
        this.props.history.push('/');
        return;
    }
  }

  validateForm = e => {
    e.preventDefault();

    let formKeys = Object.keys(this.state.form);

    /**
     * No caso de respostas aos comentários, deve-se desconsiderar o campo "category"
     */
    if(this.props.action === ADD_COMMENT) {
      delete formKeys['category'];
    }

    const invalidFields = formKeys.filter(index => this.state.form[index] === '');
    const hasInvalidFields = invalidFields.length;
    let message = 'Do you really want to proceed?';

    if(hasInvalidFields) {
      message = 'Please, fill the inputs.';
    }

    this.setState(prevState => ({
      form: {
        ...prevState.form
      },
      submitted: true,
      invalidFields,
      message,
      action: this.props.action,
      answerPostId: this.props.modal.parentId
    }));
  }

  hideSubmitMessage = () => {
    this.setState(prevState => ({
      ...prevState,
      submitted: false
    }));
  }

  confirmDeletion = () => {
    this.setState(prevState => ({
      ...prevState,
      submitted: true,
      message: 'Do you really want to remove this post?',
      action: REMOVE_POST
    }));
  }

  showModal = () => {
    this.props.dispatch(showModal({
      action: ADD_COMMENT,
      title: 'Answer',
      submitButtonLabel: 'Reply',
      parentId: this.props.postId
    }));
  }

  render() {
    return (
        <Fragment>
          <div className='form-message'>
            <h2 className='post-form__action'>{this.props.title}</h2>
            {
              this.props.action === UPDATE_POST &&
                <button
                  className='post-form__reply'
                  type='button'
                  onClick={this.showModal}
                >Click to Reply
                </button>
            }
            <form onSubmit={this.validateForm}>
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
                disabled={this.props.action === UPDATE_POST}
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
                maxLength={150}
                onChange={this.handleChange}
              >
              </textarea>

              {
                this.props.action !== ADD_COMMENT &&
                <Fragment>
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
                    disabled={this.props.action === UPDATE_POST}
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
                </Fragment>
              }
              <button className='form-message__submit'>{this.props.submitButtonLabel}</button>
              {
                this.props.action === UPDATE_POST && <button type='button' className='form-message__delete' onClick={this.confirmDeletion}>Delete</button>
              }
            </form>
          </div>
          {
            this.state.submitted &&
              <PostFormMessage
                hasInvalidFields={this.state.invalidFields.length}
                message={this.state.message}
                hideSubmitMessage={this.hideSubmitMessage}
                handleSubmit={this.handleSubmit}
                action={this.state.action}
              />
          }
          <div className='clear'></div>
        </Fragment>
    );
  }
}

function mapStateToProps({ categories, posts, modal }, { postId }) {
  return {
    categories: Object.keys(categories).map(index => categories[index].name),
    post: posts[postId],
    modal
  };
}

export default withRouter(connect(mapStateToProps)(PostForm));