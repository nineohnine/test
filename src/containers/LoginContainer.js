import { connect } from 'react-redux';
import { push, pop } from '../actions/NavigationActions';
import { bootApp } from '../actions';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  content: {
    paddingVertical: 4,
    paddingBottom: 88,
  },
});

class Splash extends Component {

  componentDidMount(){
//    this.props.bootApp();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Splish Splash, takin a bath.
        </Text>
      </View>
    );
  }
}



function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    bootApp: () => dispatch(bootApp())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash);
