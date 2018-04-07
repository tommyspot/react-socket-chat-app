import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './Layout.scss';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div className={Styles.wrapper}>
        <div className={Styles.overlay}></div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
