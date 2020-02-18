import React from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from '../ErrorIndicator';
import styles from './InputErrorSuffix.st.css';

class InputErrorSuffix extends React.Component {
  render() {
    const { tooltipPlacement, errorMessage, narrow } = this.props;
    return (
      <ErrorIndicator
        {...styles('root', { narrow }, this.props)}
        dataHook="input-tooltip"
        disabled={errorMessage.length === 0}
        placement={tooltipPlacement}
        errorMessage={errorMessage}
      />
    );
  }
}

InputErrorSuffix.propTypes = {
  theme: PropTypes.oneOf(['normal', 'paneltitle', 'material', 'amaterial']),
  errorMessage: PropTypes.node.isRequired,
  focused: PropTypes.bool,
  narrow: PropTypes.bool,
  tooltipPlacement: PropTypes.string,
};

export default InputErrorSuffix;
