import { NAVIGATION_ACTION } from '../constants/ActionTypes';

export function navigate(type) {
  return {
    type: NAVIGATION_ACTION,
    payload: {
      type
    }
  };
}
