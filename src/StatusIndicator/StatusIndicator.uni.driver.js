import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { tooltipDriverFactory } from '../Tooltip/TooltipNext/Tooltip.uni.driver';
import { dataHooks } from './constants';

export const statusIndicatorDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    hasTooltip: async () => {
      const tooltipDriver = tooltipDriverFactory(
        base.$(`[data-hook="${dataHooks.tooltip}"]`),
        body,
      );
      return await tooltipDriver.exists();
    },

    getTooltipText: async () => {
      const tooltipDriver = tooltipDriverFactory(
        base.$(`[data-hook="${dataHooks.tooltip}"]`),
        body,
      );

      if (await tooltipDriver.exists()) {
        await tooltipDriver.mouseEnter();
        return await tooltipDriver.getTooltipText();
      } else {
        throw new Error(`Tooltip doesn't exist`);
      }
    },
  };
};
