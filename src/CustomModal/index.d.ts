import * as React from 'react';


export interface CustomModalProps {
  className?: string,
  dataHook?: string,
  title?: string,
  subtitle?: string,
  primaryButtonText?: string,
  //TODO - refactor when wsr-types is merged to this project
  primaryButtonProps?: object,
  primaryButtonOnClick?: () => void,
  secondaryButtonText?: string,
  //TODO - refactor when wsr-types is merged to this project
  secondaryButtonProps?: object,
  secondaryButtonOnClick?: () => void,
  onCloseButtonClick?: () => void,
  removeContentPadding?: boolean,
  footnote?: React.ReactNode,
  sideActions?: React.ReactNode,
  children: React.ReactNode,
}

export default class CustomModal extends React.PureComponent<CustomModalProps>{}
