import { dropdownLayoutDriverFactory } from '../DropdownLayout/DropdownLayout.uni.driver';
import { headerUniDriverFactory } from '../Card/Header/Header.uni.driver';
import { badgeUniDriverFactory } from '../Badge/Badge.uni.driver';
import { findBaseByHook } from '../../test/utils';

import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const statsWidgetUniDriverFactory = base => {
  const getBadgeDriver = elm => badgeUniDriverFactory(elm);

  const getStatistic = index =>
    base.$$('[data-hook="stats-widget-content-wrapper"] > div').get(index);

  const getSuffix = () => base.$$('[data-hook*="suffix"]');

  const headerElement = findBaseByHook(base, 'stats-widget-title');

  const headerDriver = headerUniDriverFactory(headerElement);

  return {
    ...baseUniDriverFactory(base),

    getSuffixElementByHook: async () =>
      findBaseByHook(await getSuffix().get(0), 'suffix-element-hook').text(),

    /** returns header title  */
    titleText: () => headerDriver.title(),

    /** fulfilled if element in the DOM  */
    isStatisticsContentExists: () =>
      findBaseByHook(base, 'stats-widget-content-wrapper').exists(),

    /** fulfilled if base in the DOM  */
    isEmptyStateExists: () =>
      findBaseByHook(base, 'stats-widget-empty-state').exists(),

    /** returns title of statistics with index passed as param  */
    getStatisticTitle: async index =>
      findBaseByHook(await getStatistic(index), 'statistics-item-title').text(),

    /** returns subtitle of statistics with index passed as param  */
    getStatisticSubTitle: async index =>
      findBaseByHook(
        await getStatistic(index),
        'statistics-item-subtitle',
      ).text(),

    /** returns percents value of statistics with index passed as param  */
    getStatisticPercentValue: async index =>
      findBaseByHook(await getStatistic(index), 'percent-value').text(),

    /** Check if percent negative value skin equals to `danger`  */
    isNegativePercentValue: async index =>
      (await getBadgeDriver(
        findBaseByHook(await getStatistic(index), 'percent-value'),
      ).getSkin()) === 'danger',

    /** returns all classes of percent wrapper element of statistics with index passed as param  */
    getStatisticPercentClass: async index => {
      const percentIcon = findBaseByHook(
        await getStatistic(index),
        'percent-icon',
      );
      return (
        ((await percentIcon.exists()) && percentIcon.attr('data-class')) || ''
      );
    },

    getFilterButtonDriver: dataHook => {
      const filterButton = findBaseByHook(base, dataHook);
      return {
        dropdownLayoutDriver: dropdownLayoutDriverFactory(
          findBaseByHook(filterButton, 'dropdown-base-dropdownlayout'),
        ),
      };
    },
  };
};
