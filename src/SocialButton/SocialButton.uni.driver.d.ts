import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface SocialButtonDriver extends BaseUniDriver {
  getText(): Promise<string>;
}
