import * as React from 'react';

export interface DividerProps {
  dataHook?: string,
  direction?: DividerDirection,
  skin?: DividerSkin,
}

export type DividerDirection = 'horizontal' | 'vertical';
export type DividerSkin = 'light' | 'dark';

export default class Divider extends React.PureComponent<DividerProps> {}
