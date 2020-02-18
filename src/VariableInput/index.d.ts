import * as React from 'react';


export interface VariableInputProps {
  className?: string,
  dataHook?: string;
  disabled?: boolean,
  initialValue?: string,
  multiline?: boolean,
  rows?: number,
  size?: VariableInputSize,
  onChange?: (value:string) => void,
  onSubmit?: (value:string) => void,
  onBlur?: (value:string) => void,
  placeholder?: string,
  variableParser?: (value:string) => string|boolean,
  variableTemplate?: {
    prefix: string,
    suffix: string,
  },
}

export default class VariableInput extends React.PureComponent<VariableInputProps>{}

export type VariableInputSize = 'small' | 'medium' | 'large';

export const SIZE: { [key in VariableInputSize]: VariableInputSize }
