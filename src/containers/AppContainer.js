import React from 'react';
import { connect, Provider } from 'react-redux';
//import App from '../components/App';
import { bootApp } from '../actions';

// function mapStateToProps(state) {
//   return {
//     appIsBooting: state.appIsBooting
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {};
// }

// const StateContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(App);

const AppContainer = (props) => {
  return (
    <Provider store={props.store}>
    </Provider>
  );
};

export default AppContainer;
