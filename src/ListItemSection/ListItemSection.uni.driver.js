import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

const byDataHook = dataHook => `[data-hook="${dataHook}"]`;

export const listItemSectionDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get title Text */
    getTitle: base.$(byDataHook(dataHooks.TITLE)).text,

    /** Get suffix */
    getSuffix: () => base.$(byDataHook(dataHooks.SUFFIX)),
  };
};
