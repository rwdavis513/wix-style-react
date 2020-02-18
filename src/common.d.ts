export interface InjectedFocusableProps {
  onBlur?: () => void;
  onFocus?: () => void;
}

export type IconElement = React.ReactElement<any>;

export type Omit<T, K extends keyof T> = T extends any
  ? Pick<T, Exclude<keyof T, K>>
  : never;