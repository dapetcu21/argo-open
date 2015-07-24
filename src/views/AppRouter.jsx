import React from 'react';
import Component from './Component';
import { history } from 'react-router/lib/HashHistory';
import { Router, Route } from 'react-router';

import MainView from './MainView';
import TimerView from './TimerView';

export default class AppRouter extends Component {
  render() {
    return <Router history={history}>
      <Route path='/' component={MainView}>
        <Route path='timer' component={TimerView}/>
      </Route>
    </Router>;
  }
}

