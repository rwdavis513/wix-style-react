import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import { dataHooks } from './constants';
import styles from './SliderHandle.st.css';

class SliderHandle extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;

    this.state = {
      showTooltip: false,
      dragging: false,
      hovered: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.clickFocus = this.clickFocus.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    this._isMounted = false;
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  clickFocus() {}

  handleMouseUp() {
    if (!this.state.hovered) {
      this.toggleTooltip(false);
    }
    this.setState({ dragging: false });
  }

  handleMouseDown() {
    this.toggleTooltip(true);
    this.setState({ dragging: true });
  }

  handleMouseEnter() {
    this.toggleTooltip(true);
    this.setState({ hovered: true });
  }

  handleMouseLeave() {
    if (!this.state.dragging) {
      this.toggleTooltip(false);
    }
    this.setState({ hovered: false });
  }

  toggleTooltip(showTooltip) {
    const { displayTooltip, disabled } = this.props;
    this._isMounted &&
      this.setState({
        showTooltip: displayTooltip && !disabled && showTooltip,
      });
  }

  render() {
    const {
      value,
      offset,
      disabled,
      focusableOnFocus,
      focusableOnBlur,
    } = this.props;
    const { showTooltip } = this.state;

    return (
      <>
        <div
          {...styles('root', { disabled }, this.props)}
          onBlur={focusableOnBlur}
          onFocus={focusableOnFocus}
          tabIndex="0"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          data-hook={dataHooks.sliderHandle}
          style={{ left: `${offset}%` }}
        />
        {showTooltip && value && (
          <div
            data-hook={dataHooks.sliderTooltip}
            className={styles.tooltip}
            style={{ left: `${offset}%` }}
          >
            {value}
          </div>
        )}
      </>
    );
  }
}

SliderHandle.propTypes = {
  disabled: PropTypes.bool,
  displayTooltip: PropTypes.bool,
  offset: PropTypes.number,
  value: PropTypes.string,
};

SliderHandle.defaultProps = {
  displayTooltip: true,
};

export default withFocusable(SliderHandle);
