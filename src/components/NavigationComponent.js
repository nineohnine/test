import React, { Component } from 'react';
import ReactNative from 'react-native';
import Scene from './Scene';

const {
  NavigationExperimental,
  BackAndroid,
} = ReactNative;

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

export default class NavigationComponent extends Component {

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction);
  }

  _renderScene = (props) => {
    return <Scene {...props} handleBackAction={this._handleBackAction} />;
  };

  _handleBackAction = () => {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
  };

  _handleNavigate = (action) => {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.payload);
        return true;
      case 'back':
      case 'pop':
        return this._handleBackAction();
      default:
        return false;
    }
  };

  render() {
    return (
      <NavigationCardStack
        direction='vertical'
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate}
        renderScene={this._renderScene}
      />
    );
  }
}
