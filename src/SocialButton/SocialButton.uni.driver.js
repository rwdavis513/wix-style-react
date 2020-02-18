import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { DataHook } from './constants';

export const socialButtonDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    /** Get buttons text value */
    getText: async () => base.$(`[data-hook="${DataHook.socialTitle}"]`).text(),
  };
};
