import React, { Component } from 'react';

import Layout from 'components/layout';
import Chat from 'scenes/chat';

class App extends Component {
  render() {
    return (
      <Layout>
        <Chat />
      </Layout>
    );
  }
}

export default App;
