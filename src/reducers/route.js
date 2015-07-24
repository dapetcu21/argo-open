import { ROUTE_CHANGE } from '../constants/ActionTypes';

export default function route(state = null, action) {
  if (action.type === ROUTE_CHANGE) {
    return action.state;
  }
  return state;
}
