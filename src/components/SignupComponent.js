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

export default class SplashComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Signup Signup
        </Text>
      </View>
    );
  }
}
