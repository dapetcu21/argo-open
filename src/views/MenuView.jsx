import React from 'react';
import Component from './Component';
import { Link } from 'react-router';
import p from 'react-style-normalizer';

const buttons = [{
  title: 'Schedule',
  id: 'schedule',
  image: require('../assets/img/menu-schedule.jpg')
},{
  title: 'Venues',
  id: 'venues',
  image: require('../assets/img/menu-venues.jpg')
},{
  id: 'open',
  contain: true,
  image: require('../assets/img/menu-open.png')
},{
  title: 'Team',
  id: 'team',
  image: require('../assets/img/menu-people.jpg')
},{
  title: 'Timer',
  id: 'timer',
  image: require('../assets/img/menu-timer.jpg')
},{
  title: 'Travel guide',
  id: 'travel',
  image: require('../assets/img/menu-guide.jpg')
},{
  title: 'Maps',
  id: 'maps',
  double: true,
  image: require('../assets/img/menu-maps.jpg')
}];

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
  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    minHeight: 100,
    backgroundColor: '#444',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
  },
  buttonLabel: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxWidth: '90%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textShadow: '0px 0px 15px #000, 0px 0px 15px #000, 0px 0px 15px #000',
    fontSize: '17pt',
  }
};

let buttonMargin = 15;

let max = (a, b) => a > b ? a : b;

export default class MenuView extends Component {
  render() {
    let { width, height } = this.props;

    styles.menuContainer.width = width;
    styles.menuContainer.height = height;
    styles.buttonsScroll.height = height - styles.titleBar.height;
    styles.button.height = max(styles.button.minHeight, (styles.buttonsScroll.height) / 4 - buttonMargin);

    let pathComponent = null;
    try {
      pathComponent = this.props.branch[this.props.branch.length - 1].path;
    } catch (ex) {}

    let pX = '50%', pY = '50%';
    buttons.forEach((button, idx) => {
      if (button.id === pathComponent) {
        pY = (((~~(idx / 2)) * (buttonMargin + styles.button.height)) + styles.button.height/2) + 'px';
        pX = button.double ? '50%' : ((25 + 50 * (idx&1)) + '%');
      }
    });

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
            {buttons.map((button, idx) => {
              let elems = [];
              if (button.title) {
                elems.push(<span style={p(styles.buttonLabel)} className='source-sans'>{button.title}</span>);
              }

              let buttonStyle = {
                width: button.double ? (width - 2*buttonMargin) : ((width - 3*buttonMargin) / 2),
                top: ((~~(idx / 2)) * (buttonMargin + styles.button.height)),
              }
              buttonStyle.left = buttonMargin + (idx&1) * (buttonMargin + buttonStyle.width);
              if (button.image) {
                buttonStyle.backgroundImage = `url(${encodeURI(button.image)})`;
              }
              if (button.contain) {
                buttonStyle.backgroundSize = 'contain';
              }

              return <Link to={`/${button.id}`} key={button.id} style={p({...styles.button, ...buttonStyle})} >
                {elems}
              </Link>
            })}
          </div>
        </div>
      </div>
    </div>;
  }
};
