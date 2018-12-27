import React from 'react';
import PostMessage from './PostMessage';
import PostList from './PostList';
import Header from './Header';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

const Content = props => {
  return (
    <div id='content' className='site-content'>
      <Header/>
      <div id='blog-wrapper' className={`${!props.postMessage.show ? 'blog-wrapper--100' : ''}`}>
        {
          Object.keys(props.categories).map(index =>
            <Route
              key={`${props.categories[index].path}`}
              path={`/${props.categories[index].path}`}
              render={() => <PostList category={props.categories[index].name}/>}
            />
          )
        }
        <Route exact path='/' render={() => <PostList category={null}/>} />
        <div className='clear'></div>
      </div>
      <PostMessage/>
      <div className='clear'></div>
    </div>
  );
}

function mapStateToProps({ categories, postMessage }) {
  return {
    postMessage,
    categories
  };
}

export default withRouter(connect(mapStateToProps)(Content));