import { combineReducers } from 'redux';
import navigation from './navigation';
import user from './user';
import application from './application';

const rootReducer = combineReducers({
  navigation,
  user,
  application
});

export default rootReducer;
