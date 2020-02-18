import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../../BaseComponents/WixComponent';
import TextLinkLayout from '../TextLinkLayout';

import deprecationLog from '../../utils/deprecationLog';

export default class TextLink extends WixComponent {
  static displayName = 'TextLink';

  constructor(props) {
    super(props);

    deprecationLog(
      `Using "TextLink" is deprecated. Please see "5.3 TextButton" updated documentation and use "<TextButton as="a"/>" instead`,
    );
  }

  static propTypes = {
    ...TextLinkLayout.propTypes,
    link: PropTypes.string,
    download: PropTypes.bool,
    rel: PropTypes.string,
    target: PropTypes.string,
    ariaLabel: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    ellipsis: PropTypes.bool,
  };

  static defaultProps = {
    ...TextLinkLayout.defaultProps,
    download: false,
    rel: null,
    target: null,
    onClick: () => {},
    ellipsis: false,
  };

  _handleOnClick = event => {
    const { link, disabled } = this.props;

    if (!link || disabled) {
      event.preventDefault();
    }

    if (!disabled) {
      this.props.onClick(event);
    }
  };

  render() {
    const {
      ariaLabel,
      disabled,
      link,
      children,
      download,
      rel,
      target,
      onMouseEnter,
      onMouseLeave,
      ellipsis,
    } = this.props;

    const props = {
      download,
      href: link,
      onClick: this._handleOnClick,
      role: 'link',
      style: {
        textDecoration: 'inherit',
        tabIndex: 0,
        display: ellipsis ? 'inline' : 'inline-block',
      },
      disabled,
      rel,
      target,
      onMouseEnter,
      onMouseLeave,
    };

    if (ariaLabel) {
      props['aria-label'] = ariaLabel;
    }

    return (
      <a {...props}>
        <TextLinkLayout {...this.props}>{children}</TextLinkLayout>
      </a>
    );
  }
}
