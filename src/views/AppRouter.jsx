import React from 'react';
import Component from './Component';
import { history } from 'react-router/lib/HashHistory';
import { Router, Route } from 'react-router';

import Root from './Root';
import Timer from './Timer';

export default class AppRouter extends Component {
  static displayName = 'AppRouter';

  render() {
    return <Router history={history}>
      <Route path='/' component={Root}>
        <Route path='timer' component={Timer}/>
      </Route>
    </Router>;
  }
}

