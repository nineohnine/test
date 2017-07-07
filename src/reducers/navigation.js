import {
  PUSH_ROUTE,
  POP_ROUTE,
  NAVIGATION_ACTION,
} from '../constants/ActionTypes';

const initialState = {
  index: 0,
  key: 'root',
  routes: [
    {
      screen: 'SplashScreen',
    },
  ]
};

export default (currentState=initialState, action) => {

  const {
    index,
    routes,
  } = currentState;

  if(!action.payload){
    return currentState;
  }

  switch (action.payload.type){

    case PUSH_ROUTE:

      if(action.payload){
        return {
          ...currentState,
          routes: [
            ...routes,
            { screen: action.payload.screen }
          ],
          index: index + 1
        }
      }
      else {
        return currentState;
      }

    case POP_ROUTE:

      if (index > 0) {
        return {
          ...currentState,
          routes: routes.slice(0, routes.length - 1),
          index: index - 1,
        };
      }
      else {
        return currentState;
      }

    default:
      return currentState;
  }
}
