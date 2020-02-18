import { circularProgressBarDriverFactory as coreCircularProgressBarDriverFactory } from 'wix-ui-core/drivers/vanilla';
import { tooltipDriverFactory } from 'wix-ui-backoffice/dist/src/components/Tooltip/Tooltip.driver';
import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './CircularProgressBar.st.css';
import { dataHooks } from './constants';

export const circularProgressBarDriverFactory = ({
  element,
  eventTrigger,
  wrapper,
}) => {
  const createTooltipDriver = () =>
    tooltipDriverFactory({
      element: element.querySelector(`[data-hook='${dataHooks.tooltip}']`),
      wrapper,
      eventTrigger,
    });
  const coreProgressBarDriver = coreCircularProgressBarDriverFactory({
    element,
    wrapper,
    eventTrigger,
  });
  const errorIcon = () =>
    element.querySelector(`[data-hook='${dataHooks.errorIcon}']`);
  const successIcon = () =>
    element.querySelector(`[data-hook='${dataHooks.successIcon}']`);
  const progressBar = () =>
    element.querySelector(`[data-hook='${dataHooks.circularProgressBar}']`);
  const stylableDOMUtil = new StylableDOMUtil(style, element);

  const getTooltip = () => createTooltipDriver();

  return {
    ...coreProgressBarDriver,
    isTooltipShown: () => getTooltip().isContentElementExists(),
    getTooltip,
    isErrorIconShown: () => !!errorIcon(),
    isSuccessIconShown: () => !!successIcon(),
    getSize: () => stylableDOMUtil.getStyleState(progressBar(), 'size'),
    getTooltipErrorMessage: async () => {
      await getTooltip().mouseEnter();
      return getTooltip().getContentElement().textContent;
    },
  };
};

export default circularProgressBarDriverFactory;
