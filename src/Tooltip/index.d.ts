import * as React from 'react';
import { WixComponentProps } from '../BaseComponents/WixComponent';
import {
  AppendTo,
  Placement,
} from 'wix-ui-core/dist/src/components/popover/Popover.d';

export interface TooltipNewProps {
  upgrade: true;
  dataHook?: string;
  content?: React.ReactNode;
  disabled?: boolean;
  textAlign?: TooltipNewTextAlign;
  enterDelay?: number;
  exitDelay?: number;
  moveBy?: { x?: number; y?: number };
  appendTo?: AppendTo;
  flip?: boolean;
  fixed?: boolean;
  maxWidth?: React.CSSProperties['maxWidth'];
  onShow?: () => void;
  onHide?: () => void;
  placement?: Placement;
  size?: TooltipNewSize;
  zIndex?: React.CSSProperties['zIndex'];
}

export interface TooltipOldProps extends WixComponentProps {
  upgrade?: false;
  content: React.ReactNode;
  textAlign?: React.CSSProperties['textAlign'];
  placement?: TooltipOldPlacement;
  alignment?: TooltipOldAlignment;
  theme?: TooltipOldTheme;
  showDelay?: number;
  hideDelay?: number;
  showTrigger?: TooltipOldShowTrigger;
  hideTrigger?: TooltipOldHideTrigger;
  active?: boolean;
  bounce?: boolean;
  disabled?: boolean;
  popover?: boolean;
  maxWidth?: React.CSSProperties['maxWidth'];
  minWidth?: React.CSSProperties['minWidth'];
  onClickOutside?: (ev: TouchEvent | MouseEvent) => void;
  color?: React.CSSProperties['color'];
  lineHeight?: React.CSSProperties['lineHeight'];
  onShow?: () => void;
  onHide?: () => void;
  zIndex?: React.CSSProperties['zIndex'];
  appendToParent?: boolean;
  appendByPredicate?: (element: HTMLElement) => boolean;
  appendTo?: HTMLElement;
  moveBy?: { x?: number; y?: number };
  moveArrowTo?: number;
  size?: TooltipOldSize;
  shouldCloseOnClickOutside?: boolean;
  relative?: boolean;
  padding?: React.CSSProperties['padding'];
  shouldUpdatePosition?: boolean;
  showImmediately?: boolean;
  showArrow?: boolean;
}

export type TooltipProps = TooltipNewProps | TooltipOldProps;

export default class Tooltip<
  T extends TooltipProps
> extends React.PureComponent<T> {
  /** @deprecated use `upgrade` prop with `close` method */
  hide: T extends { upgrade: true } ? never : (props?: TooltipProps) => void;
  /** @deprecated use `upgrade` prop with `open` method */
  show: T extends { upgrade: true } ? never : (props?: TooltipProps) => void;

  close: T extends { upgrade: true } ? () => void : never;
  open: T extends { upgrade: true } ? () => void : never;
}

export type TooltipNewAppendTo =
  | 'window'
  | 'scrollParent'
  | 'viewport'
  | 'parent';
export type TooltipNewTextAlign = 'center' | 'start';
export type TooltipNewSize = 'small' | 'medium';
export type TooltipOldPlacement = 'top' | 'right' | 'bottom' | 'left';
export type TooltipOldAlignment =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'center';
export type TooltipOldTheme = 'light' | 'dark' | 'error';
export type TooltipOldShowTrigger =
  | 'custom'
  | 'mouseenter'
  | 'mouseleave'
  | 'click'
  | 'focus'
  | 'blur';
export type TooltipOldHideTrigger =
  | 'custom'
  | 'mouseenter'
  | 'mouseleave'
  | 'click'
  | 'focus'
  | 'blur';
export type TooltipOldSize = 'normal' | 'large';
