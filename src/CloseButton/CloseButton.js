import React, { PureComponent } from 'react';
import { generateDataAttr } from '../utils/generateDataAttr';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';
import Close from 'wix-ui-icons-common/system/Close';
import CloseLarge from 'wix-ui-icons-common/system/CloseLarge';
import { SIZES } from './constants';
import cx from 'classnames';

import { oneOfType, string, node, oneOf, object, bool, func } from 'prop-types';
import styles from './CloseButton.st.css';

class CloseButton extends PureComponent {
  static displayName = 'CloseButton';

  static propTypes = {
    /** render as some other component or DOM tag */
    as: oneOfType([func, object, string]),
    /** additional css classes */
    className: string,
    /** Used for passing any wix-style-react icon. For external icon make sure to follow ux sizing guidelines */
    children: node,
    /** skins of closebutton */
    skin: oneOf([
      'standard',
      'standardFilled',
      'light',
      'lightFilled',
      'dark',
      'transparent',
    ]),
    /** size of closebutton */
    size: oneOf(['small', 'medium', 'large']),
    /** Click event handler  */
    onClick: func,
    /** applies disabled styles */
    disabled: bool,
    /** string based data hook for testing */
    dataHook: string,
  };

  static defaultProps = {
    skin: 'standard',
    size: 'small',
    disabled: false,
  };

  _renderCloseIcon(size) {
    let CloseIcon;
    if (size === SIZES.small) {
      // fallback to Close icon if children not provided (current behavior)
      CloseIcon = <Close data-hook="close" />;
    } else if (size === SIZES.medium) {
      CloseIcon = <CloseLarge data-hook="close-medium" />;
    } else {
      CloseIcon = <CloseLarge data-hook="close-large" size="12" />;
    }
    return CloseIcon;
  }

  render() {
    const {
      skin,
      size,
      className: userClassName,
      dataHook,
      children,
      ...rest
    } = this.props;

    const childSize = '18px';

    const { className } = styles('root', { skin, size });
    const classNames = cx(className, userClassName);

    return (
      <ButtonNext
        {...rest}
        {...styles('root', { skin, size }, this.props)}
        {...generateDataAttr(this.props, ['skin', 'size'])}
        data-hook={dataHook}
        className={classNames}
      >
        {children
          ? React.cloneElement(children, {
              size: childSize,
              width: childSize,
              height: childSize,
            })
          : this._renderCloseIcon(size)}
      </ButtonNext>
    );
  }
}

export default CloseButton;
