import * as React from 'react';
import {WixComponentProps} from "../../BaseComponents/WixComponent";

export interface HeaderProps extends WixComponentProps{
  title: React.ReactNode,
  subtitle?: React.ReactNode,
  suffix?: React.ReactNode,
  withoutDivider?: boolean,
}

export default class Header extends React.PureComponent<HeaderProps> {}
