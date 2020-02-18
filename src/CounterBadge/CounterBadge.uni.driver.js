import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const counterBadgeDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base),

    /* Get the content of the CounterBadge */
    getContent: () => base._prop('innerHTML'),
  };
};
