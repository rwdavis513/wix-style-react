import React from 'react';
import statsWidgetDriverFactory from './StatsWidget.driver';
import StatsWidget from './StatsWidget';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../test/utils/unit';
import { statsWidgetUniDriverFactory } from './StatsWidget.uni.driver';

describe('StatsWidget', () => {
  const title = 'Stats Widget title';
  const statistics = [
    {
      title: '10$',
      subtitle: 'Revenue',
    },
    {
      title: '2',
      subtitle: 'Products',
    },
    {
      title: '1',
      subtitle: 'Transactions',
    },
    {
      title: '5',
      subtitle: 'Profit',
    },
    {
      title: '15',
      subtitle: 'Music',
    },
  ];

  const statisticsWithPercents = [
    {
      title: '10$',
      subtitle: 'Revenue',
      percent: 15,
    },
    {
      title: '2',
      subtitle: 'Products',
      percent: -15,
    },
    {
      title: '1',
      subtitle: 'Transactions',
      percent: 0,
    },
  ];

  const uniDriverRender = createRendererWithUniDriver(
    statsWidgetUniDriverFactory,
  );
  describe('[sync]', () =>
    runTests(createRendererWithDriver(statsWidgetDriverFactory)));

  describe('[async]', () => runTests(uniDriverRender));

  runPropTypesValidation(uniDriverRender);

  /**PropTypes - error messages are memorized and will only be shown once.
   * PropTypes.resetWarningCache() does not work too, so we can only run these tests once.*/
  function runPropTypesValidation(render) {
    describe('propTypes validation', () => {
      let consoleErrorSpy;

      function createComponent(props) {
        render(<StatsWidget {...props} />);
      }

      const createChildren = n =>
        Array(n)
          .fill()
          .map((v, i) => (
            <StatsWidget.FilterButton
              open
              key={i}
              selectedId={1}
              dataHook="stats-widget-filter"
              options={[{ id: 1, value: 'value' }]}
            />
          ));

      beforeEach(() => {
        consoleErrorSpy = jest
          .spyOn(global.console, 'error')
          .mockImplementation(jest.fn());
      });

      afterEach(() => {
        consoleErrorSpy.mockRestore();
      });

      it('should not initialize component with percent which are not a numbers', async () => {
        const wrongStatistics = [
          {
            title: '10$',
            subtitle: 'Revenue',
            percent: '15%',
          },
          {
            title: '2',
            subtitle: 'Products',
            percent: '-15%',
          },
          {
            title: '1',
            subtitle: 'Transactions',
            percent: '0',
          },
        ];

        createComponent({ title, statistics: wrongStatistics });

        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            'Warning: Failed prop type: Invalid prop `statistics[0].percent` of type `string` supplied to `StatsWidget`, expected `number`',
          ),
        );
      });

      it('should throw when there are more than 3 children', async () => {
        createComponent({
          title,
          statistics,
          children: createChildren(4),
        });

        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            'Warning: Failed prop type: Invalid Prop children, maximum amount of filters are 3',
          ),
        );
      });

      it('should throw when children are not <StatsWidget.FilterButton/>', async () => {
        createComponent({
          title,
          statistics,
          children: [<div key="1" />, <div key="2" />, <div key="3" />],
        });
        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            'Warning: Failed prop type: StatsWidget: Invalid Prop children, only <StatsWidget.FilterButton/> is allowed',
          ),
        );
      });
    });
  }

  function runTests(render) {
    afterEach(() => cleanup());

    let driver;

    function createComponent(props) {
      driver = render(<StatsWidget {...props} />).driver;
    }

    it('should have correct title', async () => {
      createComponent({ title, statistics });
      expect(await driver.titleText()).toBe(title);
    });

    it('should show statistics and not empty state', async () => {
      createComponent({ title, statistics });
      expect(await driver.getStatisticTitle(0)).toBe(statistics[0].title);
      expect(await driver.getStatisticSubTitle(0)).toBe(statistics[0].subtitle);
      expect(await driver.isEmptyStateExists()).toBe(false);
    });

    it('should show empty state and not statistics', async () => {
      createComponent({ title, emptyState: <div>Empty</div> });
      expect(await driver.isEmptyStateExists()).toBe(true);
      expect(await driver.isStatisticsContentExists()).toBe(false);
    });

    it('should show abs of percentage', async () => {
      createComponent({ title, statistics: statisticsWithPercents });
      expect(await driver.getStatisticPercentValue(0)).toBe(
        Math.abs(statisticsWithPercents[0].percent) + '%',
      );
      expect(await driver.getStatisticPercentValue(1)).toBe(
        Math.abs(statisticsWithPercents[1].percent) + '%',
      );
    });

    it('should check the stats percent color skin', async () => {
      createComponent({ title, statistics: statisticsWithPercents });
      expect(await driver.isNegativePercentValue(0)).toBe(false);
      expect(await driver.isNegativePercentValue(1)).toBe(true);
    });

    it('should put proper classes to percentage according to value', async () => {
      createComponent({ title, statistics: statisticsWithPercents });

      expect(await driver.getStatisticPercentClass(0)).toContain('isPositive');
      expect(await driver.getStatisticPercentClass(1)).toContain('isNegative');

      expect(await driver.getStatisticPercentClass(2)).not.toContain(
        'isNegative',
      );
      expect(await driver.getStatisticPercentClass(2)).not.toContain(
        'isPositive',
      );
    });

    it('should show filter with DropdownBase inside', async () => {
      const children = (
        <StatsWidget.FilterButton
          open
          selectedId={1}
          dataHook="stats-widget-filter"
          options={[{ id: 1, value: 'value' }]}
        />
      );
      createComponent({ title, statistics, children });
      expect(
        await driver
          .getFilterButtonDriver('stats-widget-filter')
          .dropdownLayoutDriver.exists(),
      ).toBe(true);
    });

    it('should be able to transfer a suffix inside', async () => {
      createComponent({
        title,
        statistics: statisticsWithPercents,
        suffix: <div data-hook="suffix-element-hook">some test</div>,
      });
      expect(await driver.getSuffixElementByHook('suffix-element-hook')).toBe(
        'some test',
      );
    });

    it('filters should have selectable options', async () => {
      const onSelectStub = jest.fn();

      const children = (
        <StatsWidget.FilterButton
          open
          selectedId={1}
          dataHook="stats-widget-filter"
          onSelect={onSelectStub}
          options={[{ id: 1, value: 'value' }]}
        />
      );
      createComponent({ title, statistics, children });
      await driver
        .getFilterButtonDriver('stats-widget-filter')
        .dropdownLayoutDriver.clickAtOption(0);
      expect(onSelectStub).toHaveBeenCalledWith({ id: 1, value: 'value' });
    });

    it('should show filters with option value specified', async () => {
      const value = 'Last Week';
      const children = (
        <StatsWidget.FilterButton
          open
          selectedId={1}
          dataHook="stats-widget-filter"
          options={[{ id: 1, value }]}
        />
      );
      createComponent({ title, statistics, children });
      expect(
        await driver
          .getFilterButtonDriver('stats-widget-filter')
          .dropdownLayoutDriver.optionsContent(),
      ).toContain(value);
    });
  }
});
