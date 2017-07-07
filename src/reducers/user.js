import {
  LOAD_USER_DATA_SUCCESS,
} from '../constants/ActionTypes';

const initialState = {};

export default (currentState=initialState, action) => {

  switch (action.type){

    case LOAD_USER_DATA_SUCCESS:

      if(action.payload){
        return action.payload;
      }
      else {
        return currentState;
      }

    default:
      return currentState;
  }
}
