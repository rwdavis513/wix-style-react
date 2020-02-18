import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './Badge.st.css';

const badgeDriverFactory = ({ element, eventTrigger }) => {
  const stylableDOMUtil = new StylableDOMUtil(style, element);

  return {
    /** checks if element exists */
    exists: () => !!element,
    /** returns elements innerHtml */
    getContent: () => element.innerHTML,
    /** returns elements text */
    text: () => element.textContent,
    getType: () => stylableDOMUtil.getStyleState(element, 'type'),
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin'),
    getSize: () => stylableDOMUtil.getStyleState(element, 'size'),
    isUppercase: () =>
      stylableDOMUtil.getStyleState(element, 'uppercase') === 'true',
    hasClickCursor: () =>
      stylableDOMUtil.getStyleState(element, 'clickable') === 'true',
    getPrefixIcon: () => stylableDOMUtil.select('.prefix'),
    getSuffixIcon: () => stylableDOMUtil.select('.suffix'),
    click: () => eventTrigger.click(element),
  };
};

export default badgeDriverFactory;
