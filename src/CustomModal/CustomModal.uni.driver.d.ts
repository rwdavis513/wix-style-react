import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface CustomModalDriver extends BaseUniDriver {
  getTitleText: () => Promise<string>,
  getSubtitleText: () => Promise<string>,
  clickPrimaryButton: () => Promise<void>,
  clickSecondaryButton: () => Promise<void>,
  clickCloseButton: () => Promise<void>,
  getPrimaryButtonText: () => Promise<string>,
  getSecondaryButtonText: () => Promise<string>,
}
