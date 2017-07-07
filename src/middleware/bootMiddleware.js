import {
  select,
  put,
  call,
  cps,
  apply,
  fork,
  take,
  takeLatest,
  takeEvery
} from 'redux-saga/effects';

import { PersistenceService } from '../services';

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
  NAVIGATION_ACTION
} from '../constants/ActionTypes';

const PERSISTENCE_KEY = 'umbrella_app_data';

const storage = new PersistenceService(PERSISTENCE_KEY);

function* persistData() {
  try {
    const currentState = yield select();
    if (currentState.user) {
      yield apply(storage, storage.persist, currentState.user);
      yield put({ type: PERSIST_USER_DATA_SUCCESS });
    }
    else {
      yield put({ type: PERSIST_USER_DATA_FAILURE, message: 'No user data.'});
    }
  } catch (e) {
    yield put({ type: PERSIST_USER_DATA_FAILURE, message: e.message });
  }
}

function* loadData() {
  try {
    const payload = yield apply(storage, storage.load);
    if (payload) {
      yield put({
        type: LOAD_USER_DATA_SUCCESS,
        payload,
      });
    }
    else {
      yield put({ type: LOAD_USER_DATA_FAILURE, message: 'No persisted data.' });
    }
  } catch (e) {
    yield put({ type: LOAD_USER_DATA_FAILURE, message: e.message });
  }
}

function* dataHandler(){
  yield put({ type: APPLICATION_FINISHED_BOOTING });
}

function* startAppBoot(){
  take(APPLICATION_IS_BOOTING);
  yield fork(loadData);
}

function* finishAppBoot(){
  take(APPLICATION_FINISHED_BOOTING);
  const currentState = yield select();
  if(currentState.user.token){
    yield put({type: NAVIGATION_ACTION, payload: { type: PUSH_ROUTE, screen: 'HomeScreen' }});
  }
  else {
    yield put({type: NAVIGATION_ACTION, payload: { type: PUSH_ROUTE, screen: 'SignupScreen' }});
  }
}

export default function* bootMiddleware(){
  yield [
    startAppBoot(),
    finishAppBoot(),
    takeLatest(LOAD_PERSISTED_USER_DATA_REQUEST, loadData),
    takeLatest(PERSIST_USER_DATA_REQUEST, persistData),
    takeEvery([LOAD_USER_DATA_FAILURE, LOAD_USER_DATA_SUCCESS], dataHandler)
  ];
}
