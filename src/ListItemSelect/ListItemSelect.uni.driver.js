import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

const byDataHook = dataHook => `[data-hook="${dataHook}"]`;

export const listItemSelectDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Check whether the checkbox appears */
    hasCheckbox: base.$(byDataHook(dataHooks.CHECKBOX)).exists,

    /** Get prefix */
    getPrefix: () => base.$(byDataHook(dataHooks.PREFIX)),

    /** Get title Text */
    getTitle: base.$(byDataHook(dataHooks.TITLE)).text,

    /** Get subtitle Text */
    getSubtitle: async () => {
      const subtitleElement = await base.$(byDataHook(dataHooks.SUBTITLE));
      if (await subtitleElement.exists()) {
        return subtitleElement.text();
      }
    },

    /** Get suffix */
    getSuffix: () => base.$(byDataHook(dataHooks.SUFFIX)),
  };
};
