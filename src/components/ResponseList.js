import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { setPageTitle } from '../actions/page';
import { fetchComments } from '../actions/shared';
import PropTypes from 'prop-types';

class ResponseList extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    category: PropTypes.object,
    filteredComments: PropTypes.array.isRequired,
    comments: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    this.props.dispatch(fetchComments(this.props.match.params.id));
    this.props.dispatch(setPageTitle(this.props.category));
  }

  render() {
    return (
      <div id='blog-wrapper'>
        <div className={`blog-holder center-relative`}>
          {
            this.props.filteredComments.length
              ? this.props.filteredComments.map(index => (
                  <Comment key={index} {...this.props.comments[index]} />
                ))
              : <h4>There are no comments for this post...</h4>
          }
        </div>
        <div className='clear'></div>
      </div>
    );
  }
}

function mapStateToProps({ postMessage, comments }, props) {
  const filteredComments = Object.keys(comments).filter(index => comments[index].parentId === props.match.params.id);
  return {
    comments,
    filteredComments,
    postMessage
  };
}

export default connect(mapStateToProps)(ResponseList);
