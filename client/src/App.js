import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

import { COLOR_SOCKET, END_POINT } from './constants';

class App extends Component {
  constructor() {
    super();

    this.state = {
      endpoint: END_POINT,
      color: 'white',
    }
  }

  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit(COLOR_SOCKET, this.state.color);
  };

  setColor = (color) => {
    this.setState({ color });
  };

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on(COLOR_SOCKET, (color) => {
      document.body.style.backgroundColor = color
    });

    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send()}>Change Color</button>

        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
      </div>
    )
  }
}

export default App