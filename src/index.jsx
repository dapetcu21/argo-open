import './css/main.sass';

import React from 'react';

import { loadFromStorage } from './actions/StorageActions';
import { screenResize } from './actions/ScreenActions';
import store from './store';

import App from './views/App';

store.dispatch(loadFromStorage());

window.addEventListener('resize', () => {
  store.dispatch(screenResize());
}, true);

if (module.hot) {
  module.hot.accept(['./store'], () => {});
}

React.initializeTouchEvents(true);
React.render(<App/>, document.body);
