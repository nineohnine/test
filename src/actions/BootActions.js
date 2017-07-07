import {
  LOAD_PERSISTED_USER_DATA_REQUEST,
  APPLICATION_IS_BOOTING,
} from '../constants/ActionTypes';

export function loadPersistedUserData() {
  return {
    type: LOAD_PERSISTED_USER_DATA_REQUEST,
  };
};

export function bootApp() {
  return {
    type: APPLICATION_IS_BOOTING,
  };
};
