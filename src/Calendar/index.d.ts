import * as React from 'react';
import {WixComponentProps} from "../BaseComponents/WixComponent";

export interface CalendarProps extends WixComponentProps {
  autoFocus?: boolean,
  numOfMonths?: 1 | 2,
  className?: string,
  onChange: Function,
  onClose?: Function,
  excludePastDates?: boolean,
  filterDate?: Function,
  value?: string | Date | {
    from?: string | Date,
    to?: string | Date,
  },
  selectionMode?: 'day' | 'range',
  showYearDropdown?: boolean,
  showMonthDropdown?: boolean,
  shouldCloseOnSelect?: boolean,
  locale?: string | {distanceInWords?: {}, format?: {},}
}

export default class Calendar extends React.PureComponent<CalendarProps> {
  static areValuesEqual: (value1?: {}, value2?:{}) => boolean;
  static renderDay:	(day: any, modifiers: any) => void;
  static optionalParse:	(dateOrString: Date | string) => void;
  static parseValue:(value: any) => any;
  static isSingleDay:	(value: any) => Date;
  static isRangeValue:	(value: any) => boolean;
  static getUpdatedMonth:	(nextPropsValue: any, numOfMonths: number, currentMonthDate: any) => any;
}
