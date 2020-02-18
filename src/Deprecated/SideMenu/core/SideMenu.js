import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';
import deprecationLog from '../../../utils/deprecationLog';

const SideMenu = ({ children, inFlex, className, dataHook }) => {
  const rootStyles = classNames(
    {
      [styles.root]: true,
      [styles.inFlex]: inFlex,
    },
    className,
  );

  deprecationLog(
    `Using "<SideMenu/>" is deprecated. Instead, we advise you to use the newer "<Sidebar/>" component. Please refer to it's documentation.`,
  );

  return (
    <div className={rootStyles} data-hook={dataHook}>
      {children}
    </div>
  );
};

SideMenu.defaultProps = {
  inFlex: false,
};

SideMenu.propTypes = {
  inFlex: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  dataHook: PropTypes.string,
};

export default SideMenu;
