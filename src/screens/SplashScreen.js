import React, { Component } from 'react';
import { SplashContainer } from '../containers';
import Screen from './Screen';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default class SplashScreen extends Screen {
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props){
    super(props);
  }

  render(){
    return (
      <SplashContainer />
    );
  }
};
