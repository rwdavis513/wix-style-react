import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.driver';
import {
  EXPANDABLE_CLASS,
  EXPANDABLE_COLLAPSED,
  EXPANDABLE_EXPANDED,
} from './constants';

const searchDriverFactory = args => {
  const { element } = args;

  const inputWithOptionsDriver = inputWithOptionsDriverFactory({
    ...args,
    element:
      element && element.querySelector('[data-hook="search-inputwithoptions"]'),
  });

  return {
    ...inputWithOptionsDriver,
    driver: {
      ...inputWithOptionsDriver.driver,
      isExpandable: () => element.className.includes(EXPANDABLE_CLASS),
      isCollapsed: () =>
        element.className.includes(EXPANDABLE_COLLAPSED) &&
        !element.className.includes(EXPANDABLE_EXPANDED),
    },
  };
};

export default searchDriverFactory;
