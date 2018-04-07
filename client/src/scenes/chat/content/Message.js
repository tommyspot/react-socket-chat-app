import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Styles from './Message.scss';

class Message extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
  };

  render() {
    const { messages } = this.props;
    if (messages === null) return null;

    return (
      <div className={Styles.wrapper}>
        {
          messages.length === 1
          ? messages
          : messages.map((message, index, messages) => {
              return <div>{`${index + 1}/${messages.length}: ${message}`}</div>;
          })
        }
      </div>
    );
  }
}

export default Message;