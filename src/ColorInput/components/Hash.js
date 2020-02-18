import React from 'react';
import DATA_HOOKS from '../DataHooks';

import styles from './Hash.st.css';

export const Hash = ({ disabled, size }) => (
  <div
    data-hook={DATA_HOOKS.COLOR_INPUT_HASH}
    data-disabled={disabled}
    {...styles('root', { disabled, size })}
  >
    #
  </div>
);
