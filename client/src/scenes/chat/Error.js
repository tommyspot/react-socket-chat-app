import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styles from './Error.scss';

class Error extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { isOpen, className } = this.props;

    return (
      isOpen &&
      <div className={classNames(Styles.wrapper, className)}>
        Message contains a span of non-whitespace characters longer than 50 characters.
      </div>
    );
  }
}

export default Error;