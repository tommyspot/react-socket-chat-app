import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Styles from './Message.scss';

class Message extends Component {
  static propTypes = {
    message: PropTypes.any.isRequired,
  };

  render() {
    const { message } = this.props;

    return (
      <div className={Styles.wrapper}>
        {message}
      </div>
    );
  }
}

export default Message;