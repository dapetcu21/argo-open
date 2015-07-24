import { SCREEN_RESIZE } from '../constants/ActionTypes';

function getScreen() {
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };
}

export default function screen(state = getScreen(), action) {
  if (action.type === SCREEN_RESIZE) {
    return getScreen();
  }
  return state;
}
