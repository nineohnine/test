import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  StatusBar,
} from 'react-native';
import routeMapper from '../routeMapper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    elevation: 4,
  },
  icon: {
    margin: 16,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
    margin: 16,
  },
  right: {
    width: 56,
  },
  content: {
    flex: 1,
  },
});

export default class Scene extends Component {
  render() {
    const {
      index,
      route,
    } = this.props.scene;

    const routeDesc = routeMapper(route);
    const SceneChild = routeDesc.component;

    return (
      <View style={[ styles.container, this.props.style ]}>
        <StatusBar />
        {
          routeDesc.appbar !== false ?
            <View style={styles.appbar}>
              {index !== 0 ?
                <TouchableNativeFeedback onPress={this.props.handleBackAction}>
                  <View>
                  </View>
                </TouchableNativeFeedback> :
                null
              }
              {routeDesc.title ?
                <Text numberOfLines={1} style={styles.title}>{routeDesc.title}</Text> :
                null
              }
              <View style={styles.right} />
            </View>
          :
            null
        }
        <View style={styles.content}>
          <SceneChild {...route.props} />
        </View>

      </View>
    );
  }
}
