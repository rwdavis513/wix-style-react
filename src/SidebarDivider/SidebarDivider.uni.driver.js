import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const SidebarDividerDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    isFullWidth: async () => (await base.attr('data-full-width')) === 'true',
  };
};
