import { isClassExists } from '../../test/utils';
import { tooltipTestkitFactory } from 'wix-ui-core/dist/src/testkit';

const getTextElement = element =>
  element.querySelector(`[data-hook="loader-text"]`);

const loaderDriverFactory = ({ element }) => {
  const tooltipTestkit = tooltipTestkitFactory({
    wrapper: element,
    dataHook: `loader-tooltip`,
  });

  return {
    component: () => element,
    exists: () => !!element,

    /** returns the loader color ('blue' or 'white') */
    getColor: () => (isClassExists(element, 'blue') ? 'blue' : 'white'),

    /** returns the element text */
    getText: () => getTextElement(element).textContent,

    /** true if the element has text */
    hasText: () => !!getTextElement(element),

    /** true when using the large loader */
    isLarge: () => isClassExists(element, 'large'),

    /** true when using the medium loader */
    isMedium: () => isClassExists(element, 'medium'),

    /** true when using the small loader */
    isSmall: () => isClassExists(element, 'small'),

    /** true when using the tiny loader */
    isTiny: () => isClassExists(element, 'tiny'),

    /** true when loader is in loading status */
    isLoading: () => isClassExists(element, 'loading'),

    /** true when loader is in error status */
    isError: () => isClassExists(element, 'error'),

    /** true when loader is in success status */
    isSuccess: () => isClassExists(element, 'success'),

    /** trigger the tooltip and returns the value of the tooltip message (async function) */
    getStatusMessage: () => {
      tooltipTestkit.mouseEnter();
      return tooltipTestkit.getContentElement().textContent;
    },
  };
};

export default loaderDriverFactory;
