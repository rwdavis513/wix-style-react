import React from 'react';
import { bool, func, object } from 'prop-types';

import css from './ColorPickerHistory.scss';
import { DataHooks } from './constants';

const ColorPickerHistory = ({ show, current, previous, onClick }) => {
  if (show) {
    return (
      <div className={css.root} data-hook={DataHooks.history}>
        <div
          data-hook={DataHooks.historyPrevious}
          style={{ background: previous.hex() }}
          onClick={() => onClick(previous)}
        />
        <div
          data-hook={DataHooks.historyCurrent}
          style={{ background: current.hex() }}
        />
      </div>
    );
  }
  return null;
};

ColorPickerHistory.propTypes = {
  show: bool.isRequired,
  previous: object.isRequired,
  current: object.isRequired,
  onClick: func.isRequired,
};

export default ColorPickerHistory;
