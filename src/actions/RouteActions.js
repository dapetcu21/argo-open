import { ROUTE_CHANGE } from '../constants/ActionTypes';

export function changeRoute(state) {
  return { type: ROUTE_CHANGE, state };
}
