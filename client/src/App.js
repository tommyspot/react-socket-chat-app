import React, { Component } from 'react';

import Layout from 'components/layout';
import Chat from 'scenes/Chat';

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
