import React from 'react';
import Component from './Component';
import HoldTransitionSpring from './HoldTransitionSpring';
import { connect } from 'react-redux';
import p from 'react-style-normalizer';

import MenuView from './MenuView';

const styles = { 
  subview: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  container: {
    perspective: 150,
  }
};

const config = [60, 10];

@connect(state => ({
  screen: state.screen
}))
export default class MainView extends Component {
  holdComponent(key) {
    return this.props.children ? React.cloneElement(this.props.children, { key }) : null;
  }

  getEndValue() {
    return { [this.props.children ? 'subview' : 'root'] : { val: 1, config } };
  }

  willEnter() {
    return {val : 0, config};
  }

  willLeave(key, value, endValue, currentValue, currentSpeed) {
    if (currentValue[key].val === 0 && currentSpeed[key].val === 0) {
      return null;
    }
    return {val : 0, config};
  }

  render() {
    let { width, height } = this.props.screen;

    return (
      <HoldTransitionSpring
        endValue={this.getEndValue}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
        holdComponent={this.holdComponent}>
        {(currentValue, components) =>
          <div style={p({...styles.container, width, height})}>
            <div>{JSON.stringify(currentValue)}</div>
            {Object.keys(currentValue).map( key => {
              if (components[key]) { 
                let style = { 
                  opacity: currentValue[key].val,
                  transform: `translate3d(0px, 0px, ${-(1 - currentValue[key].val) * 50}px)`
                };
                return <div style={p({...styles.subview, ...style})}>{components[key]}</div>;
              }
              return <MenuView branch={this.props.branch} width={width} height={height} animationValue={currentValue[key].val} key='root'/>;
            })}
          </div>
        }
      </HoldTransitionSpring>
    );
  }
}
