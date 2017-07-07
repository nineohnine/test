import {
  select,
  put,
  call,
  cps,
  apply,
  fork,
  take,
  cancel,
  cancelled,
  takeLatest,
  takeEvery
} from 'redux-saga/effects';

import {
  APPLICATION_IS_BOOTING,
  APPLICATION_FINISHED_BOOTING,
  PERSIST_USER_DATA_SUCCESS,
  PERSIST_USER_DATA_FAILURE,
  LOAD_USER_DATA_SUCCESS,
  LOAD_USER_DATA_FAILURE,
  PERSIST_USER_DATA_REQUEST,
  LOAD_PERSISTED_USER_DATA_REQUEST,
  PUSH_ROUTE,
  POP_ROUTE,
  NAVIGATION_ACTION,
  APPLICATION_ERROR
} from '../constants/ActionTypes';

import { NavigationService } from '../services';

function* routingHandler(type, screen) {
  const NavInst = NavigationService.getInstance();

  if (type === POP_ROUTE){
    yield apply(NavInst, NavInst.pop);
  }
  else {
    yield apply(NavInst, NavInst.push, { screen });
  }
}

function* navigationHandler(action) {
  const cs = yield select();
  const screen = action.payload.route ? action.payload.route : cs.navigation.routes[cs.navigation.routes.length - 1].screen;
  try {
    if (action.payload.type === POP_ROUTE) {
      if (cs.navigation.routes.length <= 1) {
        yield cancel();
      }
    }
  }
  catch (e) {
    yield put({ type: APPLICATION_ERROR, payload: e.message });
  }
  finally {
    if (yield cancelled()) {
      yield put({ type: APPLICATION_ERROR, payload: 'Cannot pop at root.' });
    }
    else {
      console.warn('nav handler');
      yield* routingHandler(action.payload.type, screen);
    }
  }
}

export default function* routeMiddleware(){
  console.warn("ROUTE MIDDLEWARE");
  yield [
    takeLatest(NAVIGATION_ACTION, navigationHandler)
  ];
}
