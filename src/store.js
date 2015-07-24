import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

let store;
const reducer = combineReducers(reducers);

if (DEBUG) {
  store = compose(
    applyMiddleware(thunk),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  )(reducer);
} else {
  store = applyMiddleware(thunk)(createStore)(reducer);
}

export default store;

