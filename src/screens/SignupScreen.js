import React, { Component } from 'react';
import { SignupContainer } from '../containers';
import Screen from './Screen';

export default class SignupScreen extends Screen {
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props){
    super(props);
  }

  render(){
    return (
      <SignupContainer />
    );
  }
};
