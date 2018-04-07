import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

import Content from './chat/Content';
import Action from './chat/Action';
import Error from './chat/Error';
import { splitMessage, isMessageError } from './services';
import { MESSAGE_SOCKET, END_POINT } from 'constants.js';
import Styles from './Chat.scss';

const socket = socketIOClient(END_POINT);

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      content: '',
    };
  }

  componentDidMount(){
    this.catchMessageFromServer();
  }

  handleSendMessage = () => {
    const message = splitMessage(this.state.message);
    socket.emit(MESSAGE_SOCKET, message);
    this.setState({ message: '' });
  };

  handleChangeMessage = (event) => {
    const message = event.target.value;
    this.setState({ message: message });
  };

  catchMessageFromServer = () => {
    socket.on(MESSAGE_SOCKET, (content) => {
      this.setState({ content });
    });
  };

  render() {
    const { message, content } = this.state;
    const isError = isMessageError(message);
    const isSendDisabled = !message || message.length === 0 || isError;

    return (
      <div className={Styles.wrapper}>
        <Content content={content} />
        <Action
          handleChangeMessage={this.handleChangeMessage}
          handleSendMessage={this.handleSendMessage}
          messageValue={message}
          isDisabledSendMessage={isSendDisabled}
        />
        <Error isOpen={isError} />
      </div>
    )
  }
}

export default Chat;
