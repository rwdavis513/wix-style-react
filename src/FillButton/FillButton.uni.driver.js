import { dataHooks } from './constants';
import { tooltipDriverFactory } from '../Tooltip/TooltipNext/Tooltip.uni.driver';

export const fillButtonDriverFactory = (base, body) => {
  const tooltipTestkit = tooltipDriverFactory(base, body);
  const byHook = dataHook => `[data-hook="${dataHook}"]`;

  return {
    /** checks whether the component exists in the DOM */
    exists: () => base.exists(),
    /** clicks on trigger element */
    click: () => base.$(byHook(dataHooks.button)).click(),
    /** hovers on the element and fetches tooltip text */
    getTooltipText: () => tooltipTestkit.getTooltipText(),
  };
};
