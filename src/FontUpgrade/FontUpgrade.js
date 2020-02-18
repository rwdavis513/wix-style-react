import React from 'react';
import styles from './FontUpgrade.scss';
import PropTypes from 'prop-types';
import { FontUpgradeContext } from './context';

const FontUpgrade = ({ dataHook, active = true, children }) => {
  return (
    <FontUpgradeContext.Provider value={{ active, styles }}>
      <span
        data-hook={dataHook}
        className={active ? styles.root : null}
        children={children}
      />
    </FontUpgradeContext.Provider>
  );
};

FontUpgrade.propTypes = {
  /** Applied as data-hook HTML attribute that can be used to create driver in testing */
  dataHook: PropTypes.string,

  /** Sets the Madefor font upgrade active when true (which is by default) */
  active: PropTypes.bool,

  /** A renderable node */
  children: PropTypes.node,
};

export default FontUpgrade;
