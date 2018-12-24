import React, { Component, Fragment } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import PostModal from './PostModal';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar/>
        <Content/>
        <PostModal/>
      </Fragment>
    );
  }
}

export default App;
