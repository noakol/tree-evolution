import React, { Component } from 'react';
import store from './store-creator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Loader />
        <MovieExp />
      </Provider>
    );
  }
}

export default App;
