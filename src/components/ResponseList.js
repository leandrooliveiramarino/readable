import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { setPageTitle } from '../actions/page';

class ResponseList extends Component {

  componentDidMount = () => {
    this.props.dispatch(setPageTitle(this.props.category));
  }

  render() {
    return (
      <div id='blog-wrapper'>
        <div className={`blog-holder center-relative`}>
          {
            Object.keys(this.props.posts).map(index => (
              <Post key={this.props.posts[index].id} {...this.props.posts[index]} redirectWhenClicked={true} />
            ))
          }
        </div>
        <div className='clear'></div>
      </div>
    );
  }
}

function mapStateToProps({ posts, postMessage }) {
  return {
    posts,
    postMessage
  };
}

export default connect(mapStateToProps)(ResponseList);
