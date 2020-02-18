import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Content.scss';

class Content extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(['medium', 'large']),
  };

  _getChildName = children =>
    children.type && (children.type.displayName || children.type.name);

  render() {
    const { children, size } = this.props;

    return (
      <div
        className={
          this._getChildName(children) === 'EmptyState'
            ? styles.emptyStateContent
            : classNames(styles.root, styles[size])
        }
      >
        {children}
      </div>
    );
  }
}

export default Content;
