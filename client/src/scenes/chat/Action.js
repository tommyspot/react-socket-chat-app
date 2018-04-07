import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import InputMessage from './action/InputMessage';
import SendMessage from './action/SendMessage';

import Styles from './Action.scss';

class Action extends Component {
  static propTypes = {
    handleChangeMessage: PropTypes.func.isRequired,
    handleSendMessage: PropTypes.func.isRequired,
    messageValue: PropTypes.string.isRequired,
    isDisabledSendMessage: PropTypes.bool.isRequired,
    className: PropTypes.string,
  };

  render() {
    const {
      handleChangeMessage,
      handleSendMessage,
      messageValue,
      isDisabledSendMessage,
      className,
    } = this.props;

    return (
      <div className={classNames(Styles.wrapper, className)}>
        <InputMessage
          className={Styles.message}
          onChanged={handleChangeMessage}
          value={messageValue}
        />

        <SendMessage
          className={Styles.send}
          isDisabled={isDisabledSendMessage}
          onClick={handleSendMessage}
        />
      </div>
    );
  }
}

export default Action;