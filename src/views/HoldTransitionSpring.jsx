import React from 'react';
import Component from './Component';
import { TransitionSpring } from 'react-motion';

export default class HoldTransitionSpring extends Component {
  constructor() {
    super(...arguments);

    var endValue = this.props.endValue;
    if (typeof endValue === 'function') { endValue = endValue(); }

    this.components = {};
    Object.keys(endValue).forEach(key => {
      this.components[key] = this.props.holdComponent(key);
    });
  }

  willEnter(key) {
    this.components[key] = this.props.holdComponent(key);
    return this.props.willEnter(...arguments);
  }

  willLeave(key) {
    var r = this.props.willLeave(...arguments);
    if (r === null) {
      this.components[key] = null;
    }
    return r;
  }

  render() {
    return <TransitionSpring {...this.props}
      willEnter={this.willEnter}
      willLeave={this.willLeave}>
      {currentValue => this.props.children(currentValue, this.components)}
    </TransitionSpring>;
  }
}
