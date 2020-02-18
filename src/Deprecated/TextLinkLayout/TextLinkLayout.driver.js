import ReactTestUtils from 'react-dom/test-utils';
import { findByHook } from '../../../test/utils';
import textDriverFactory from '../../Text/Text.driver';

const textLinkLayoutDriverFactory = ({ element }) => {
  const textElement = findByHook(element, 'text-element');
  const textElementDriver = textDriverFactory({ element: textElement });

  return {
    exists: () => !!element,
    getContent: () => element.textContent,
    doesComponentHasClass: className => element.className.includes(className),
    getColor: () => textElement.style._values.color,
    isDarkBackground: () =>
      textElement.style._values.color === 'rgb(240, 244, 247)',
    isGreyScale: () => textElement.style._values.color === 'rgb(22, 45, 61)',
    hover: () => ReactTestUtils.Simulate.mouseEnter(element),
    isUnderline: () =>
      textElement.style._values['text-decoration'] === 'underline',
    getDisplay: () => element.style._values.display,
    isLightBackground: () =>
      textElement.style._values.color === 'rgb(56, 153, 236)',
    getSize: () => textElementDriver.getSize() || 'unknown',
    isPrefixIconExists: () => !!findByHook(element, 'prefix-icon'),
    isSuffixIconExists: () => !!findByHook(element, 'suffix-icon'),
  };
};

export default textLinkLayoutDriverFactory;
