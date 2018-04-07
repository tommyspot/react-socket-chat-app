import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


class InputMessage extends PureComponent {
  static propTypes = {
    onChanged: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { onChanged, value, className } = this.props;

    return (
      <textarea
        className={className}
        onChange={onChanged}
        value={value}
      />
    );
  }
}

export default InputMessage;
