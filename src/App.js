import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './api/store-creator';
import TreeEvolution from './components';
import './App.css';

window.store = store;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TreeEvolution />
      </Provider>
    );
  }
}


export default App;
