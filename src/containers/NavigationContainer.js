import { connect } from 'react-redux';
import NavigationComponent from '../components/NavigationComponent';
import { push, pop } from '../actions';

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: route => dispatch(push(route)),
    popRoute: () => dispatch(pop()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationComponent);
