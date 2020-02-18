import React, { PureComponent } from 'react';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';
import {
  oneOfType,
  string,
  node,
  oneOf,
  element,
  object,
  bool,
  func,
} from 'prop-types';
import cx from 'classnames';
import { generateDataAttr } from '../utils/generateDataAttr';

import styles from './TextButton.st.css';

class TextButton extends PureComponent {
  static displayName = 'TextButton';

  static propTypes = {
    /** render as some other component or DOM tag */
    as: oneOfType([func, object, string]),
    /** Additional classes */
    className: string,
    /** Skins of TextButton content */
    skin: oneOf(['standard', 'light', 'premium', 'dark']),
    /** Underline of TextButton content */
    underline: oneOf(['none', 'onHover', 'always']),
    /** Weight of TextButton content */
    weight: oneOf(['thin', 'normal']),
    /** Size of TextButton content */
    size: oneOf(['tiny', 'small', 'medium']),
    /** Click event handler  */
    onClick: func,
    /** Element based icon (svg, image etc.) */
    suffixIcon: element,
    /** Element based icon (svg, image etc.) */
    prefixIcon: element,
    /** Applies disabled styles */
    disabled: bool,
    /** String based node */
    children: node,
    /** String based data hook */
    dataHook: string,
  };

  static defaultProps = {
    skin: 'standard',
    underline: 'none',
    weight: 'thin',
    size: 'medium',
    disabled: false,
  };

  render() {
    const {
      skin,
      underline,
      weight,
      size,
      children,
      className: userClassName,
      dataHook,
      ...rest
    } = this.props;

    const { className } = styles('root', { skin, underline, weight, size });
    const classNames = cx(className, userClassName);

    return (
      <ButtonNext
        {...rest}
        {...generateDataAttr(this.props, [
          'skin',
          'size',
          'weight',
          'underline',
        ])}
        {...styles('root', { skin, underline, weight, size }, rest)}
        className={classNames}
        data-hook={dataHook}
      >
        {children}
      </ButtonNext>
    );
  }
}

export default TextButton;
