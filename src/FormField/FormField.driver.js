import { Simulate } from 'react-dom/test-utils';
import { tooltipDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.driver';
import { dataHooks } from './constants';

const formFieldDriver = ({ element, dataHook }) => {
  const byHook = hook => element.querySelector(`[data-hook*="${hook}"]`);
  const charactersCounter = () => byHook('formfield-counter');

  const tooltipTestkit = tooltipDriverFactory({
    element: byHook(`${dataHook}-formfield-infoicon-tooltip`),
    eventTrigger: Simulate,
  });

  return {
    exists: () => !!element,
    element: () => element,
    getChildren: () => byHook('formfield-children'),
    getLabel: () => byHook('formfield-label'),
    isRequired: () => !!byHook('formfield-asterisk'),
    getLengthLeft: () => {
      const counter = charactersCounter();
      return counter ? parseInt(counter.innerHTML, 10) : null;
    },
    isLengthExceeded: () => {
      const counter = charactersCounter();
      if (counter) {
        const length = parseInt(counter.innerHTML, 10);
        return length < 0;
      }
      return false;
    },
    hasTooltip: () => tooltipTestkit.exists(),
    getInfoContent: () => {
      tooltipTestkit.mouseEnter();
      return tooltipTestkit.getContentElement().textContent;
    },
    getSuffix: () => byHook(dataHooks.suffix),
  };
};

export default formFieldDriver;
