import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store-creator';
import TreeEvolution from './components';
import treeEvolutionApi from './treeEvolution.api';
import './App.css';

export const api = new treeEvolutionApi(store);

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
