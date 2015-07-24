import React from 'react';
import Component from './Component';
import Link from './Link';
import p from 'react-style-normalizer';
import { buttons, styles } from './buttons';

export default class ButtonGrid extends Component {
  static displayName = 'ButtonGrid';

  render() {
    let { width, height, buttonMargin, buttonHeight } = this.props;

    let containerStyles = {
      width,
      height,
      position: 'relative',
    };

    return <div styles={containerStyles}>
      {buttons.map((button, idx) => {
        let elems = [];
        if (button.title) {
          elems.push(<span style={p(styles.buttonLabel)} className='source-sans'>{button.title}</span>);
        }

        let buttonStyle = {
          width: button.double ? (width - 2*buttonMargin) : ((width - 3*buttonMargin) / 2),
          height: buttonHeight,
          top: ((~~(idx / 2)) * (buttonMargin + buttonHeight)),
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
  }
}
