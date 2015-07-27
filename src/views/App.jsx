import React from 'react';
import Component from './Component';

import AppRouter from './AppRouter';
import store from '../store';

import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export default class App extends Component {
  static displayName = 'App';

  render() {
    var provider = <Provider store={store}>
      {() => <AppRouter/>}
    </Provider>;

    if (DEBUG) {
      return <div>
        {provider}
        <DebugPanel bottom left style={{ height: '50%' }}>
          <DevTools 
            store={store}
            monitor={LogMonitor} 
            //select={ (state) => (state.sources) }
          />
        </DebugPanel>
      </div>;
    }

    return provider;
  }
}
