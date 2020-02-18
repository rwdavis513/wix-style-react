import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface CounterBadgeDriver extends BaseUniDriver {
  getContent(): Promise<HTMLElement>;
}
