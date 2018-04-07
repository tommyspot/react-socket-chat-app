import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Message from './content/Message';
import Styles from './Content.scss';

class Content extends Component {
  static propTypes = {
    content: PropTypes.array.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { content, className } = this.props;
    const isValid = content && content.length > 0;

    return (
      <div className={classNames(Styles.wrapper, className)}>
        {isValid && content.map(messages => <Message messages={messages}/>)}
      </div>
    );
  }
}

export default Content;