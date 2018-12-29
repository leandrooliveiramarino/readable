import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Options from './Options';
import { Route } from 'react-router-dom';

class Header extends Component {

  showSiteName = () => (
    <Fragment>
      {this.props.page.name}
      {
        this.props.page.subtitle
          ? <small className='header__site-subtitle'> - {this.props.page.subtitle}</small>
          : ''
      }
    </Fragment>
  )

  render() {
    return (
      <div className={`header ${!this.props.postMessage.show && 'header--100 header--margin-0'}`}>
        <div className='header__title'>
          <h2 className='header__site-name'>{this.showSiteName()}</h2>
        </div>
        {
          /**
           * Especificando quais paths irão exibir o filtro e o botão de adicionar post
           */
        }
        <Route exact path='/' component={Options} />
        <Route exact path='/post/new' component={Options} />
        {
          Object.keys(this.props.categories).map(index =>
            <Route
              exact
              key={`${this.props.categories[index].path}`}
              path={`/${this.props.categories[index].path}`}
              component={Options}
            />
          )
        }
      </div>
    );
  }
}

function mapStateToProps({ postMessage, page, categories }) {
  return {
    postMessage,
    page,
    categories
  };
}

export default connect(mapStateToProps)(Header);