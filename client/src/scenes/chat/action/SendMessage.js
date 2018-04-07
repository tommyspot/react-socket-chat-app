import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


class SendMessage extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { onClick, isDisabled, className } = this.props;

    return (
      <button
        className={className}
        disabled={isDisabled}
        onClick={onClick}
      >
        Send
      </button>
    );
  }
}

export default SendMessage;
