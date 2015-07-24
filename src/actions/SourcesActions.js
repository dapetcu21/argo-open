import { NEW_LOCAL_SOURCE, REMOVE_SOURCE } from '../constants/ActionTypes';

export function newLocalSource(title) {
  return { type: NEW_LOCAL_SOURCE, title };
}

export function removeSource(id) {
  return { type: REMOVE_SOURCE, id };
}
