import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

import Content from './chat/Content';
import Action from './chat/Action';
import { MESSAGE_SOCKET, END_POINT } from 'constants.js';
import Styles from './Chat.scss';

const socket = socketIOClient(END_POINT);

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      message: '',
    };
  }

  componentDidMount(){
    this.catchMessageFromServer();
  }

  handleSendMessage = () => {
    socket.emit(MESSAGE_SOCKET, this.state.message);
    this.setState({ message: '' });
  };

  handleChangeMessage = (event) => {
    const message = event.target.value;
    this.setState({ message });
  };

  catchMessageFromServer = () => {
    socket.on(MESSAGE_SOCKET, (content) => {
      this.setState({ content });
    });
  };

  render() {
    const { message, content } = this.state;
    const isSendDisabled = !message || message.length === 0;

    return (
      <div className={Styles.wrapper}>
        <Content content={content} />
        <Action
          handleChangeMessage={this.handleChangeMessage}
          handleSendMessage={this.handleSendMessage}
          messageValue={message}
          isDisabledSendMessage={isSendDisabled}
        />
      </div>
    )
  }
}

export default Chat;