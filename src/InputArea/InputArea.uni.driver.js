import { errorIndicatorDriverFactory } from '../ErrorIndicator/ErrorIndicator.uni.driver';
import { warningIndicatorDriverFactory } from '../WarningIndicator/WarningIndicator.uni.driver';
import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const inputAreaUniDriverFactory = (base, body) => {
  const textAreaElement = base.$(`.root`);
  const textArea = base.$('textarea');
  const counterSelector = '[data-hook="counter"]';
  const indicatorSelector = `[data-hook="${dataHooks.tooltip}"]`;
  const errorIndicatorTestkit = () =>
    errorIndicatorDriverFactory(base.$(indicatorSelector), body);
  const warningIndicatorTestkit = () =>
    warningIndicatorDriverFactory(base.$(indicatorSelector), body);

  const textAreaBase = ReactBase(textArea);

  return {
    ...baseUniDriverFactory(base),

    trigger: (trigger, event) => textAreaBase[trigger](event),
    focus: () => textAreaBase.focus(),
    enterText: text => textArea.enterValue(text),
    getValue: () => textArea.value(),
    getName: () => textArea.attr('name'),
    getPlaceholder: () => textArea._prop('placeholder'),
    getDefaultValue: () => textArea._prop('defaultValue'),
    getRowsCount: () => textArea._prop('rows'),
    getMaxLength: () => textArea._prop('maxLength'),
    getTabIndex: () => textArea._prop('tabIndex'),
    getReadOnly: () => textArea._prop('readOnly'),
    getResizable: () => textAreaElement.hasClass('resizable'),
    getDisabled: () =>
      textAreaElement.hasClass('disabled') && textArea._prop('disabled'),
    getHasCounter: () => !!base.$$(counterSelector).length,
    getCounterValue: () => base.$(counterSelector).text(),
    hasExclamation: () => base.$$(`.exclamation`).length === 1,
    hasError: () => textAreaElement.hasClass('hasError'),
    hasWarning: () => textAreaElement.hasClass('hasWarning'),
    isFocusedStyle: () => textAreaElement.hasClass('hasFocus'),
    isSizeSmall: () => textArea.hasClass('sizeSmall'),
    isHoveredStyle: () => textAreaElement.hasClass('hasHover'),
    isOfStyle: style => textAreaElement.hasClass([`theme-${style}`]),
    isFocus: () => textAreaBase.isFocus(),
    exists: () => textArea.exists(),
    getStyle: () => textArea._prop('style'),
    getAriaLabel: () => textArea.attr('aria-label'),
    getAriaControls: () => textArea.attr('aria-controls'),
    getAriaDescribedby: () => textArea.attr('aria-describedby'),
    getTooltipDataHook: () => dataHooks.tooltip,
    getTooltipElement: () => base,
    isErrorMessageShown: () => errorIndicatorTestkit().isShown(),
    mouseEnterErrorIndicator: () => errorIndicatorTestkit().mouseEnter(),
    // getErrorMessage - deprecated
    getErrorMessage: () => errorIndicatorTestkit().getErrorMessage(),
    getStatusMessage: () =>
      errorIndicatorTestkit().getErrorMessage() ||
      warningIndicatorTestkit().getWarningMessage(),
  };
};
