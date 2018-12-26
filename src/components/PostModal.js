import React, { Component } from 'react';
import ModalMessage from './ModalMessage';
import { Link, Route } from 'react-router-dom';

class PostModal extends Component {
  render() {
    return (
      <div className='modal' id='modal'>
        <div className='modal__content'>
          <div className='form-message'>
            <h2 className='modal__action'>Add Post</h2>
            <Link to='/' id='closeButton' className='modal__close-button'>&times;</Link>
            <form>
              <input type='text' className='form-control' id='title' placeholder='Title' />
              <input type='text' className='form-control' id='author' placeholder='Author' />
              <textarea id='message' name='your-message' placeholder='Message'></textarea>
              <label htmlFor='category' className='label-name'>Category</label>
              <select className='form-select' id='category' name='category'>
                <option value='react'>React</option>
                <option value='redux'>Redux</option>
                <option value='udacity'>Udacity</option>
              </select>
              <button className='form-message__submit'>Submit</button>
            </form>
          </div>
          <Route exact path='/post/:id/edit' render={() =>
            <div className='modal__additional-options'>
              <button className="additional-options__remove">remove</button>
              <button className="additional-options__edit">edit</button>
            </div>
          } />
          <ModalMessage/>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}

export default PostModal;