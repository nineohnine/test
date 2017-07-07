import {
  APPLICATION_IS_BOOTING,
  APPLICATION_FINISHED_BOOTING
} from '../constants/ActionTypes';

const initialState = {
  appIsBooting: true
};

export default (currentState=initialState, action) => {

  switch (action.type){
    case APPLICATION_IS_BOOTING:
      return { appIsBooting: true };

    case APPLICATION_FINISHED_BOOTING:
      return { appIsBooting: false };

    default:
      return currentState;
  }

}
