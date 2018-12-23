import React, { Component, Fragment } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar/>
        <Content/>
      </Fragment>
    );
  }
}

export default App;
