import React from 'react';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react/index';

import checkboxDriverFactory from '../Checkbox.driver';
import { checkboxUniDriverFactory } from '../Checkbox.uni.driver';
import Checkbox from '../Checkbox';

const cachedConsoleWarn = global.console.warn;

describe('Checkbox', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(checkboxDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(checkboxUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    it('should be unchecked and not disabled by default', async () => {
      const { driver } = render(<Checkbox />);
      expect(await driver.isChecked()).toBe(false);
      expect(await driver.isDisabled()).toBe(false);
    });

    it('should be checked', async () => {
      const { driver } = render(<Checkbox checked />);
      expect(await driver.isChecked()).toBe(true);
    });

    it('should be disabled', async () => {
      const { driver } = render(<Checkbox disabled />);
      expect(await driver.isDisabled()).toBe(true);
    });

    it('should have an error state', async () => {
      const { driver } = render(<Checkbox hasError />);
      expect(await driver.hasError()).toBe(true);
    });

    it('should call onChange when clicking the Checkbox', async () => {
      const onChange = jest.fn();

      const { driver } = render(<Checkbox onChange={onChange} />);

      await driver.click();

      expect(onChange).toBeCalledWith(
        expect.objectContaining({ target: { checked: true } }),
      );
    });

    it('should not call onChange when clicking disabled Checkbox', async () => {
      const onChange = jest.fn();

      const { driver } = render(<Checkbox onChange={onChange} disabled />);

      await driver.click();
      expect(onChange).not.toBeCalled();
    });

    it('should not run in indeterminate mode when not specified', async () => {
      const { driver } = render(<Checkbox />);

      expect(await driver.isIndeterminate()).toBe(false);
    });

    it('should run in indeterminate mode when specified', async () => {
      const { driver } = render(<Checkbox indeterminate />);

      expect(await driver.isIndeterminate()).toBe(true);
    });

    it('should show error message when in error state with message', async () => {
      const errorMessage = 'Error message';
      const { driver } = render(
        <Checkbox hasError errorMessage={errorMessage} />,
      );
      expect(await driver.getErrorMessage()).toEqual(errorMessage);
    });

    it('should not show error message when disabled', async () => {
      const errorMessage = 'Error message';
      const { driver } = render(
        <Checkbox hasError errorMessage={errorMessage} disabled />,
      );
      await expect(driver.getErrorMessage()).rejects.toThrow(Error);
    });

    it('should not show error message when no error message stated', async () => {
      const { driver } = render(<Checkbox hasError />);
      await expect(driver.getErrorMessage()).rejects.toThrow(Error);
    });

    it('should not show error message when not in error state', async () => {
      const errorMessage = 'Error message';
      const { driver } = render(<Checkbox errorMessage={errorMessage} />);
      await expect(driver.getErrorMessage()).rejects.toThrow(Error);
    });

    it('should not have error when disabled', async () => {
      const { driver } = render(<Checkbox hasError disabled />);
      expect(await driver.hasError()).toEqual(false);
    });

    it('should have the correct label', async () => {
      const { driver } = render(<Checkbox>Info</Checkbox>);
      expect(await driver.getLabel()).toEqual('Info');
    });

    it('should return the label driver', async () => {
      const { driver } = render(<Checkbox>Info</Checkbox>);
      expect(await (await driver.getLabelDriver()).getLabelText()).toEqual(
        'Info',
      );
    });
  }

  describe('deprecation', () => {
    const render = createRendererWithDriver(checkboxDriverFactory);

    it('should not warn with deprecation warning, if no size', async () => {
      global.console.warn = jest.fn();
      render(<Checkbox />);
      expect(global.console.warn).not.toBeCalled();
      global.console.warn = cachedConsoleWarn;
    });
  });
});
