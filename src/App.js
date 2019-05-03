import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Joole  from './containers/Joole/Joole';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Joole />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
