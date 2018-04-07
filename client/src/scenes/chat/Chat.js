import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

import { MESSAGE_SOCKET, END_POINT } from 'constants.js';
import Styles from './Chat.scss';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: END_POINT,
      textMessage: '',
      content: '',
    };
  }

  componentDidUpdate() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on(MESSAGE_SOCKET, (content) => {
      this.setState({ content });
    });
  };

  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit(MESSAGE_SOCKET, this.state.textMessage);
    this.setState({ textMessage: '' });
  };

  setTextMessage = (event) => {
    const textMessage = event.target.value;
    this.setState({ textMessage });
  };

  render() {
    const { textMessage, content } = this.state;
    const isSendDisabled = !textMessage || textMessage.length === 0;

    return (
      <div className={Styles.chat}>
        <div className={Styles.content}>{content}</div>
        <div className={Styles.action}>
          <textarea
            className={Styles.message}
            onChange={this.setTextMessage}
            value={textMessage}
          ></textarea>
          <button
            disabled={isSendDisabled}
            className={Styles.send}
            onClick={this.send}
          >
            Send
          </button>
        </div>
      </div>
    )
  }
}

export default Chat;