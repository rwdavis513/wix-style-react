import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface VariableInputDriver extends BaseUniDriver {
  /** Returns true if component is disabled */
  isDisabled(): Promise<boolean>;
  /** Get the text content of the component*/
  getContent(): Promise<string>;
  /** Get the text content of the component placeholder*/
  getPlaceholder(): Promise<string>
  /** Enter text as value to the component*/
  enterText(value:string): Promise<void>;
  /** Simulate blur event */
  blur() : Promise<void>;
  /** Returns true if error indication exists */
  hasError(): Promise<boolean>;
  /** Get the error message content */
  getErrorMessage(): Promise<string>;
  /** Returns true if warning indication exists */
  hasWarning(): Promise<boolean>;
  /** Get the warning message content */
  getWarningMessage(): Promise<string>;
}
