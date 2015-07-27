import React from 'react';
import Component from './Component';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    color: '#000',
  }
};

export default class Timer extends Component {
  static displayName = 'Timer';

  render() {
    return <div style={styles.container}>
      Timer
    </div>;
  }
}
