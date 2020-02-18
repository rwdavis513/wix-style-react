import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const verticalTabsDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
