import React from 'react';
import PropTypes from 'prop-types';
import Popper from 'popper.js';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import isSameDay from 'date-fns/is_same_day';
import setYear from 'date-fns/set_year';
import setMonth from 'date-fns/set_month';
import setDate from 'date-fns/set_date';

import WixComponent from '../BaseComponents/WixComponent';
import Calendar from '../Calendar';

import styles from './DatePicker.scss';
import DateInput from '../DateInput';

import deprecationLog from '../utils/deprecationLog';

/**
 * DatePicker component
 *
 * ### Keyboard support
 * * `Left`: Move to the previous day.
 * * `Right`: Move to the next day.
 * * `Up`: Move to the previous week.
 * * `Down`: Move to the next week.
 * * `PgUp`: Move to the previous month.
 * * `PgDn`: Move to the next month.
 * * `Home`: Move to the previous year.
 * * `End`: Move to the next year.
 * * `Enter`/`Esc`/`Tab`: close the calendar. (`Enter` & `Esc` calls `preventDefault`)
 *
 */

export default class DatePicker extends WixComponent {
  static displayName = 'DatePicker';

  static defaultProps = {
    locale: 'en',
    dateFormat: 'MM/DD/YYYY',
    filterDate: () => true,
    rtl: false,
    width: 150,
    zIndex: 1,
    disabled: false,
    error: false,
  };

  constructor(props) {
    super(props);

    if (props.isOpen !== undefined) {
      deprecationLog('DatePicker isOpen is deprecated. Please use initialOpen');
    }

    const initialOpen =
      (!!props.initialOpen || !!props.isOpen) && !props.disabled;

    this.state = {
      value: props.value || new Date(),
      isOpen: initialOpen,
      isDateInputFocusable: !props.isOpen,
    };
  }

  componentDidMount() {
    super.componentDidMount();

    this._popper = new Popper(this.inputRef, this.calendarRef, {
      placement: 'top-start',
    });
  }

  componentWillUnmount() {
    this._popper.destroy();
    super.componentWillUnmount();
  }

  openCalendar = () => {
    if (!this.state.isOpen) {
      this.setState(
        {
          isOpen: true,
          isDateInputFocusable: false,
          value: this.props.value || new Date(),
        },
        () => this._popper.scheduleUpdate(),
      );
    }
  };

  closeCalendar = () => {
    this.setState({ isOpen: false }, () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    });
    /*
      to fix case when user press tab in opened Calendar and:
        1. Calendar become closed
        2. Focus triggered
        3. openCalendar triggered by focus
        4. Calendar become visible
        5. Looks like nothing happen
      We need to do such steps:
       1. Close calendar(with isDateInputFocusable: false)
       2. After calendar is closed, on next event loop(after focus is fired)  make isDateInputFocusable: focusable
       to allow user to press tab in future and open Calendar
    */
    setTimeout(() => this.makeInputFocusable());
  };

  makeInputFocusable = () => this.setState({ isDateInputFocusable: true });

  _saveNewValue = (value, modifiers = {}) => {
    if (modifiers.disabled) {
      return;
    }

    const isChanged = !isSameDay(value, this.props.value);

    if (isChanged) {
      const newValue = [
        [value.getFullYear(), setYear],
        [value.getMonth(), setMonth],
        [value.getDate(), setDate],
      ].reduce(
        (_value, [datePart, setter]) => setter(_value, datePart),
        this.props.value,
      );

      this.setState({ value: newValue }, () => this.props.onChange(newValue));
    }
  };

  _handleKeyDown = event => {
    // TODO: dirty for now
    // tab key should move focus so can't preventDefault
    if (event.keyCode !== 9) {
      event.preventDefault();
    }

    if (!this.state.isOpen) {
      this.openCalendar();
    }

    // keyHandler(this.state.value);
  };

  onClickOutside() {
    this.closeCalendar();
  }

  _renderInputWithRefForward = () =>
    React.forwardRef((props, ref) => this._renderInput({ ...props, ref }));

  _renderInput = () => {
    const {
      inputDataHook,
      disabled,
      placeholderText,
      readOnly,
      value: initialValue,
      error,
      errorMessage,
      customInput,
      dateFormat,
      inputProps = {},
    } = this.props;
    const { onFocus, ...inputPropsRest } = inputProps;
    return (
      <DateInput
        dataHook={inputDataHook}
        value={initialValue}
        /* This line normally does nothing, because once clicked, component is already focused, hence onFocus
        kicks in and open the calendar.
        Why do we still keep this line? Backward compatibility for clients that test the component and simulate click
        without simulating focus first. */
        onInputClicked={this.openCalendar}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholderText}
        onFocus={e => {
          onFocus && onFocus(e);
          this.openCalendar(e);
        }}
        onKeyDown={this._handleKeyDown}
        tabIndex={this.state.isDateInputFocusable ? 1 : -1}
        error={error}
        errorMessage={errorMessage}
        autoSelect={false}
        dateFormat={dateFormat}
        customInput={customInput}
        {...(customInput ? customInput.props : {})}
        {...inputPropsRest}
      />
    );
  };

  _setInputRef = ref => (this.inputRef = ref);

  _setCalendarRef = ref => (this.calendarRef = ref);

  render() {
    const {
      showMonthDropdown,
      showYearDropdown,
      filterDate,
      excludePastDates,
      rtl,
      shouldCloseOnSelect,
      width,
      calendarDataHook,
      twoMonths,
      locale,
      zIndex,
    } = this.props;

    const { isOpen, value } = this.state;

    const calendarProps = {
      locale,
      showMonthDropdown,
      showYearDropdown,
      filterDate,
      excludePastDates,
      rtl,
      onChange: this._saveNewValue,
      onClose: this.closeCalendar,
      value,
      shouldCloseOnSelect,
      numOfMonths: twoMonths ? 2 : 1,
    };

    return (
      <div style={{ width }} className={styles.root}>
        <div ref={this._setInputRef}>
          <DayPickerInput
            component={this._renderInputWithRefForward()}
            keepFocus={false}
          />
        </div>

        <div
          ref={this._setCalendarRef}
          data-hook={calendarDataHook}
          style={{ zIndex }}
        >
          {isOpen && (
            <Calendar
              className={styles.datePickerCalendar}
              {...calendarProps}
            />
          )}
        </div>
      </div>
    );
  }
}

DatePicker.propTypes = {
  ...Calendar.propTypes,

  /** Can provide Input with your custom props. If you don't need a custom input element, and only want to pass props to the Input, then use inputProps prop. I think this is not in use outside of WSR, and can be deprecated. */
  customInput: PropTypes.node,

  /** Properties appended to the default Input component or the custom Input component. */
  inputProps: PropTypes.object,

  /** Custom date format, can be either:
   * * `string` of tokens (see [`date-fns` docs](https://date-fns.org/v1.29.0/docs/format) for list of supported tokens)
   * * `function` of signature `Date -> String`
   */
  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /** DatePicker instance locale */
  locale: PropTypes.oneOfType([
    PropTypes.oneOf([
      'en',
      'es',
      'pt',
      'fr',
      'de',
      'pl',
      'it',
      'ru',
      'ja',
      'ko',
      'tr',
      'sv',
      'no',
      'nl',
      'da',
      'zh',
      'th',
      'cs',
    ]),
    PropTypes.shape({
      distanceInWords: PropTypes.object,
      format: PropTypes.object,
    }),
  ]),

  /** Is the DatePicker disabled */
  disabled: PropTypes.bool,

  /** dataHook for the DatePicker's Input */
  inputDataHook: PropTypes.string,

  /** calendarDataHook for the DatePicker's calendar view */
  calendarDataHook: PropTypes.string,

  /** placeholder of the Input */
  placeholderText: PropTypes.string,

  /** RTL mode */
  rtl: PropTypes.bool,

  /** The selected date */
  value: PropTypes.object,

  /**
   * Controls the whether the calendar will be visible or not
   * @deprecated
   * */
  isOpen: PropTypes.bool,

  /** Controls the whether the calendar will be initially visible or not */
  initialOpen: PropTypes.bool,

  /** will show exclamation icon when true */
  error: PropTypes.bool,

  /** will display message when hovering error icon */
  errorMessage: PropTypes.node,

  /** set desired width of DatePicker input */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** set desired z-index of DatePicker popover */
  zIndex: PropTypes.number,
};
