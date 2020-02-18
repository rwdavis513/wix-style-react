import ReactTestUtils from 'react-dom/test-utils';

import { isClassExists } from '../../test/utils';
import { dataHooks } from './Tag.helpers';

const getThumb = element => element.querySelector('span');

const tagDriverFactory = ({ element }) => {
  const getRemoveButton = () =>
    element.querySelector(`[data-hook="${dataHooks.removeButton}"]`);
  const removeTag = () => {
    const removeButton = getRemoveButton();
    if (removeButton) {
      ReactTestUtils.Simulate.click(removeButton);
    }
  };

  return {
    exists: () => !!element,
    isTiny: () => isClassExists(element, 'tinySize'),
    isSmall: () => isClassExists(element, 'smallSize'),
    isMedium: () => isClassExists(element, 'mediumSize'),
    isLarge: () => isClassExists(element, 'largeSize'),
    isStandardTheme: () => isClassExists(element, 'standardTheme'),
    isWarningTheme: () => isClassExists(element, 'warningTheme'),
    isErrorTheme: () => isClassExists(element, 'errorTheme'),
    isDarkTheme: () => isClassExists(element, 'darkTheme'),
    isRemovable: () => !!getRemoveButton(),
    removeTag,
    click: () => ReactTestUtils.Simulate.click(element),
    isThumbExists: () => isClassExists(getThumb(element), 'thumb'),
    isDisabled: () => isClassExists(element, 'disabled'),
    getLabel: () => element.textContent,
  };
};

export default tagDriverFactory;
