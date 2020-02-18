import * as React from 'react';
import {
  AppendTo,
  Placement,
} from 'wix-ui-core/dist/src/components/popover/Popover.d';

export interface PopoverMenuProps {
  triggerElement: React.ReactNode;
  children?: React.ReactNode;
  maxWidth?: number;
  minWidth?: number;
  zIndex?: number;
  moveBy?: { x: number; y: number };
  placement?: Placement;
  textSize?: 'small' | 'medium';
  appendTo?: AppendTo;
  flip?: boolean;
  fixed?: boolean;
  showArrow?: boolean;
  wrapText?: boolean;
}

export interface MenuItemProps {
  text?: string;
  onClick?: () => any;
  skin?: 'dark' | 'destructive';
  prefixIcon?: React.ReactNode;
  dataHook?: string;
  disabled?: boolean;
}

export interface DividerProps {
  dataHook?: string;
}

export default class PopoverMenu<
  T extends PopoverMenuProps
> extends React.PureComponent<T> {
  static MenuItem: (props?: MenuItemProps) => React.ReactElement;
  static Divider: (props?: DividerProps) => React.ReactElement;
}
