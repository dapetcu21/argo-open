import React from 'react';
import Component from './Component';
import p from 'react-style-normalizer';

import { buttons, styles as buttonStyle } from './buttons';
import ButtonGrid from './ButtonGrid';

const styles = {
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  titleBar: {
    height: 44,
    width: '100%',
    position: 'relative',
  },
  titleBarLabel: {
    position: 'absolute',
    color: '#fff',
    fontSize: '17pt',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  buttons: {
    width: '100%',
    height: '100%',
    position: 'relative',
    perspective: 150,
  },
  buttonsInner: {
    width: '100%',
    height: '100%',
  },
  buttonsScroll: {
    width: '100%',
  },
};

const buttonMargin = 15;
const minButtonHeight = 100;
const rowCount = Math.ceil(buttons.length / 2);

let max = (a, b) => a > b ? a : b;

export default class MenuView extends Component {
  render() {
    let { width, height } = this.props;

    styles.menuContainer.width = width;
    styles.menuContainer.height = height;
    let buttonScrollHeight = styles.buttonsScroll.height = height - styles.titleBar.height;
    let buttonHeight = max(minButtonHeight, (buttonScrollHeight) / rowCount - buttonMargin);
    let buttonsHeight = buttonMargin + (buttonHeight + buttonMargin) * rowCount;

    let pathComponent = null;
    try {
      pathComponent = this.props.branch[this.props.branch.length - 1].path;
    } catch (ex) {}

    let pX = '50%', pY = '50%';
    if (pathComponent) {
      buttons.forEach((button, idx) => {
        if (button.id === pathComponent) {
          pY = (((~~(idx / 2)) * (buttonMargin + buttonHeight)) + buttonHeight/2) + 'px';
          pX = button.double ? '50%' : ((25 + 50 * (idx&1)) + '%');
        }
      });
    }

    const anim = this.props.animationValue;
    styles.buttons.perspectiveOrigin = pX + ' ' + pY;
    styles.buttonsInner.transform = `translate3d(0px, 0px, ${(1 - anim) * 50}px)`;
    styles.buttonsInner.opacity = anim;

    return <div style={p(styles.menuContainer)}>
      <div style={p(styles.titleBar)}>
        <span style={p(styles.titleBarLabel)} className='source-sans'>ARGO Open</span>
      </div>
      <div style={p(styles.buttonsScroll)}>
        <div style={p(styles.buttons)}>
          <div style={p(styles.buttonsInner)}>
            <ButtonGrid width={width} height={buttonsHeight} buttonMargin={buttonMargin} buttonHeight={buttonHeight}/>
          </div>
        </div>
      </div>
    </div>;
  }
};
