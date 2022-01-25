import React, { Component } from 'react';

import { UserProvider } from './context/user';
import DefinedRoutes from './routes';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <DefinedRoutes />
      </UserProvider>
    );
  }
}

export default App;
