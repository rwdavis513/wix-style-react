import React from 'react';
import PropTypes from 'prop-types';

import styles from './CustomModal.st.css';
import { dataHooks } from './constants';
import CloseButton from '../CloseButton';
import Divider from '../Divider';
import Button from '../Button';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import Box from '../Box';

/** CustomModal */
class CustomModal extends React.PureComponent {
  static displayName = 'CustomModal';

  static propTypes = {
    /** additional css classes */
    className: PropTypes.string,
    /** data hook for testing */
    dataHook: PropTypes.string,
    /** The modal's title */
    title: PropTypes.string,
    /** The modal's subtitle */
    subtitle: PropTypes.string,
    /** When not provided, the primary action button will not be rendered */
    primaryButtonText: PropTypes.string,
    /** Passed to the primary button as props without any filter / mutation */
    primaryButtonProps: PropTypes.object,
    /** callback for when the primary button is clicked */
    primaryButtonOnClick: PropTypes.func,
    /** When not provided, the secondary action button will not be rendered */
    secondaryButtonText: PropTypes.string,
    /** Passed to the secondary button as props without any filter / mutation */
    secondaryButtonProps: PropTypes.object,
    /** callback for when the secondary button is clicked */
    secondaryButtonOnClick: PropTypes.func,
    /** callback for when the close button is clicked */
    onCloseButtonClick: PropTypes.func,
    /** When set to true, there will be no content padding */
    removeContentPadding: PropTypes.bool,
    /** a footnote node, to be rendered at the very bottom of the modal */
    footnote: PropTypes.node,
    /** side actions node, to be rendered as the first element on the same row as the action buttons */
    sideActions: PropTypes.node,
    /** the children / content of the modal */
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    primaryButtonText: '',
    secondaryButtonText: '',
    title: '',
    subtitle: '',
    removeContentPadding: false,
  };

  _renderHeaderLayout = () => {
    const { title, subtitle } = this.props;
    return (
      <div className={styles.header}>
        <Heading dataHook={dataHooks.title} appearance={'H3'}>
          {title}
        </Heading>
        {subtitle && <Text dataHook={dataHooks.subtitle}>{subtitle}</Text>}
      </div>
    );
  };

  _renderFooterLayout = () => {
    const {
      sideActions,
      secondaryButtonText,
      secondaryButtonOnClick,
      secondaryButtonProps,
      primaryButtonText,
      primaryButtonOnClick,
      primaryButtonProps,
    } = this.props;
    return (
      <>
        <Divider className={styles.footerDivider} />
        <Box padding={5} verticalAlign="middle">
          {sideActions && (
            <div className={styles.sideActions}>{sideActions}</div>
          )}
          <div className={styles.buttons}>
            {secondaryButtonText && (
              <Button
                onClick={secondaryButtonOnClick}
                priority="secondary"
                size="small"
                {...secondaryButtonProps}
              >
                {secondaryButtonText}
              </Button>
            )}
            {primaryButtonText && (
              <Button
                onClick={primaryButtonOnClick}
                size="small"
                {...primaryButtonProps}
              >
                {primaryButtonText}
              </Button>
            )}
          </div>
        </Box>
      </>
    );
  };

  render() {
    const {
      dataHook,
      primaryButtonText,
      secondaryButtonText,
      title,
      removeContentPadding,
      children,
      sideActions,
      footnote,
      onCloseButtonClick,
    } = this.props;

    const hasFooter = sideActions || primaryButtonText || secondaryButtonText;

    return (
      <div
        {...styles('root', { removeContentPadding }, this.props)}
        data-hook={dataHook}
      >
        {title && this._renderHeaderLayout()}
        {children && <div className={styles.contentWrapper}>{children}</div>}
        {hasFooter && this._renderFooterLayout()}
        {footnote && (
          <>
            <Divider />
            <div className={styles.footnote}>{footnote}</div>
          </>
        )}
        <CloseButton
          dataHook={dataHooks.closeButton}
          className={styles.closeButton}
          onClick={onCloseButtonClick}
          size="large"
          skin="dark"
        />
      </div>
    );
  }
}

export default CustomModal;
