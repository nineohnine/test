import React, { Component } from 'react';
import AppContainer from './containers/AppContainer';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
