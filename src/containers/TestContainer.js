import { connect } from 'react-redux';
import TestComponent from '../components/TestComponent';
import { push, pop } from '../actions/NavigationActions';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestComponent);
