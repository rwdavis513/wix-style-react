import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Pagination.scss';

const Pagination = ({ className, pages }) => (
  <div className={classNames(styles.root, className)}>
    {pages.map(page => _withDotClass(page))}
  </div>
);

const _withDotClass = comp => {
  const props = { className: classNames(comp.props.className, styles.dot) };
  return React.cloneElement(comp, props);
};

Pagination.propTypes = {
  className: PropTypes.string,
};

Pagination.displayName = 'Pagination';

export default Pagination;
