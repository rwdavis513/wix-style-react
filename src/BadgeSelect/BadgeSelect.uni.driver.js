import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { badgeUniDriverFactory } from '../Badge/Badge.uni.driver';
import popoverUniDriverFactory from '../Popover/Popover.uni.driver';
import * as DATA_ATTR from './DataAttr';
import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';

export const badgeSelectUniDriverFactory = (base, body) => {
  const popoverDriver = popoverUniDriverFactory(base, body);
  const badgeDriver = badgeUniDriverFactory(
    base.$(`[data-hook="${DATA_ATTR.DATA_BADGE}"]`),
  );
  const dropdownLayoutDriver = dropdownLayoutDriverFactory(
    base.$(`[data-hook="${DATA_ATTR.DATA_DROPDOWN}"]`),
  );

  const driver = {
    ...baseUniDriverFactory(base),

    /** Returns 'true' whether the element exists */
    exists: popoverDriver.exists,

    /** Click on an option */
    clickAtOption: async index => {
      await badgeDriver.click();
      await dropdownLayoutDriver.clickAtOption(index);
    },
  };

  return {
    driver,
    badgeDriver,
  };
};
