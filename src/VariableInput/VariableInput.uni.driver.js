import { errorIndicatorDriverFactory } from '../ErrorIndicator/ErrorIndicator.uni.driver';
import { warningIndicatorDriverFactory } from '../WarningIndicator/WarningIndicator.uni.driver';
import { dataHooks } from './constants';
import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';

export const getContent = base => base.$('.public-DraftEditor-content');
export const getPlaceholder = base =>
  base.$('.public-DraftEditorPlaceholder-root');

const getErrorIndicator = base => base.$(`[data-hook=${dataHooks.error}]`);
const errorIndicatorDriver = (base, body) =>
  errorIndicatorDriverFactory(getErrorIndicator(base), body);
const getWarningIndicator = base => base.$(`[data-hook=${dataHooks.warning}]`);
const warningIndicatorDriver = (base, body) =>
  warningIndicatorDriverFactory(getWarningIndicator(base), body);
export default (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
    isDisabled: async () =>
      (await getContent(base).attr('contenteditable')) === 'false',
    getContent: () => getContent(base).text(),
    getPlaceholder: () => getPlaceholder(base).text(),
    enterText: async text => {
      const contentElement = await getContent(base).getNative(); // eslint-disable-line no-restricted-properties

      // TODO: implement for puppeteer. Throw error if type is not handled
      if (base.type === 'react') {
        return ReactBase(getContent(base)).beforeInput({ data: text });
      } else if (base.type === 'protractor') {
        contentElement.sendKeys(text);
      }
    },
    blur: async () => {
      if (base.type === 'react') {
        return ReactBase(getContent(base)).blur();
      } else if (base.type === 'puppeteer') {
        await page.$eval('.public-DraftEditor-content', e => e.blur());
      }
    },
    hasError: async () => await getErrorIndicator(base).exists(),
    getErrorMessage: () => errorIndicatorDriver(base, body).getErrorMessage(),
    hasWarning: async () => await getWarningIndicator(base).exists(),
    getWarningMessage: () =>
      warningIndicatorDriver(base, body).getWarningMessage(),
  };
};
