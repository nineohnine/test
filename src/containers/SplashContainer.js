import { connect } from 'react-redux';
import { push, pop } from '../actions/NavigationActions';
import { bootApp } from '../actions';
import { NavigationService } from '../services';
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

  constructor(props){
    super(props);
    // console.log('props navigator', props.navigator);
    // NavigationService.setNavigator(props.navigator);
  }

  componentDidMount(){
    console.log("mounted child");
    console.log("navigator boot app", NavigationService.getInstance().navigator);
    this.props.bootApp();
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
