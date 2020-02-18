import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface StatusIndicatorDriver extends BaseUniDriver {
  hasTooltip(): Promise<boolean>;
  getTooltipText(): Promise<string>;
}
