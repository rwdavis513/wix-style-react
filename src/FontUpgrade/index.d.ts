import * as React from 'react';

export interface FontUpgradeProps {
  dataHook?: string;
  active?: boolean;
  children?: React.ReactNode;
}

export default class FontUpgrade extends React.PureComponent<
  FontUpgradeProps
> {}
