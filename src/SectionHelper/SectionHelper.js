import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Text from '../Text';
import Button from '../Button';
import CloseButton from '../CloseButton';
import { Appearance } from './constants';
import styles from './SectionHelper.scss';

const appearanceToStyleMap = {
  [Appearance.Warning]: styles.warning,
  [Appearance.Standard]: styles.standard,
  [Appearance.Danger]: styles.danger,
  [Appearance.Success]: styles.success,
  [Appearance.Premium]: styles.premium,
  [Appearance.Preview]: styles.preview,
  [Appearance.ExperimentalDark]: styles.experimentalDark,
};

/**
 * Used in pages where you need to explain or mention things about the content or actions
 */
class SectionHelper extends React.PureComponent {
  render() {
    const {
      dataHook,
      showCloseButton,
      onClose,
      onAction,
      actionText,
      appearance,
      title,
      fullWidth,
      children,
    } = this.props;
    const isExperimentalDark = appearance === Appearance.ExperimentalDark;

    return (
      <div
        data-hook={dataHook}
        data-appearance={appearance}
        className={classNames(styles.root, appearanceToStyleMap[appearance], {
          [styles.showClose]: showCloseButton,
        })}
      >
        {showCloseButton && onClose && (
          <div
            className={classNames(styles.close, {
              [styles.closeWithTitle]: !!title,
            })}
          >
            <CloseButton
              dataHook="sectionhelper-close-btn"
              size="medium"
              skin={isExperimentalDark ? 'light' : 'dark'}
              onClick={onClose}
            />
          </div>
        )}

        {title && (
          <div className={styles.title}>
            <Text
              light={isExperimentalDark}
              dataHook="sectionhelper-title"
              size="small"
              weight="normal"
            >
              {title}
            </Text>
          </div>
        )}

        <div
          className={classNames(styles.content, {
            [styles.fullWidth]: !!fullWidth,
          })}
        >
          <Text size="small" light={isExperimentalDark}>
            {children}
          </Text>
        </div>

        {onAction && actionText && (
          <div className={styles.action}>
            <Button
              size="small"
              skin={isExperimentalDark ? 'standard' : 'dark'}
              priority={isExperimentalDark ? 'primary' : 'secondary'}
              onClick={onAction}
              dataHook="sectionhelper-action-btn"
            >
              {actionText}
            </Button>
          </div>
        )}
      </div>
    );
  }
}

SectionHelper.displayName = 'SectionHelper';

SectionHelper.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Sets the look and feel of the component */
  appearance: PropTypes.oneOf(Object.values(Appearance)),

  /** Adds text as the title */
  title: PropTypes.node,

  /** decide if to show the close button */
  showCloseButton: PropTypes.bool,

  /** When provided, will make a close button appear and invoke it upon click */
  onClose: PropTypes.func,

  /** When provided, will make an action button appear and invoke it upon click */
  onAction: PropTypes.func,

  /** Text label for the action button */
  actionText: PropTypes.string,

  /** Children to render */
  children: PropTypes.node,

  /** Set the content width to 100% */
  fullWidth: PropTypes.bool,
};

SectionHelper.defaultProps = {
  showCloseButton: true,
  appearance: Appearance.Warning,
};

export default SectionHelper;
