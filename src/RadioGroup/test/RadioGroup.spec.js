import React from 'react';
import { mount } from 'enzyme';
import RadioGroup from '../RadioGroup';
import radioGroupDriverFactory from '../RadioGroup.driver';
import { radioGroupTestkitFactory } from '../../../testkit';
import {
  isTestkitExists,
  isEnzymeTestkitExists,
} from '../../../test/utils/testkit-sanity';
import { radioGroupTestkitFactory as enzymeRadioGroupTestkitFactory } from '../../../testkit/enzyme';
import { createRendererWithDriver, cleanup } from '../../../test/utils/unit';

describe('RadioGroup', () => {
  const render = createRendererWithDriver(radioGroupDriverFactory);
  const createDriver = jsx => render(jsx).driver;

  const defaultRadioGroup = props => (
    <RadioGroup {...props}>
      <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
      <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
      <RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio>
      <RadioGroup.Radio value={4}>Option 4</RadioGroup.Radio>
    </RadioGroup>
  );

  afterEach(() => {
    cleanup();
  });

  it('should have the correct radio buttons', () => {
    const driver = createDriver(defaultRadioGroup());
    expect(driver.getNumberOfRadios()).toBe(4);
    expect(driver.getRadioValueAt(0)).toBe('1');
  });

  it('should return true if a radio button is disabled and false otherwise', () => {
    const disabledRadios = [1, 2];
    const driver = createDriver(defaultRadioGroup({ disabledRadios }));
    expect(driver.isRadioDisabled(0)).toBe(true);
    expect(driver.isRadioDisabled(1)).toBe(true);
    expect(driver.isRadioDisabled(2)).toBe(false);
    expect(driver.isRadioDisabled(3)).toBe(false);
  });

  it('should check the option that matches the initial value', () => {
    const value = 2;
    const driver = createDriver(defaultRadioGroup({ value }));
    expect(driver.getSelectedValue()).toBe(value.toString());
  });

  it('should update selected value after change to props', () => {
    const { driver, rerender } = render(defaultRadioGroup({ value: 1 }));
    const value = 2;
    rerender(defaultRadioGroup({ value: 2 }));
    expect(driver.getSelectedValue()).toBe(value.toString());
  });

  it('should not check any options if value was not matched', () => {
    const value = 10;
    const driver = createDriver(defaultRadioGroup({ value }));
    expect(driver.getSelectedValue()).toBe(null);
  });

  describe('onChange attribute', () => {
    it('should be called with the correct option value', () => {
      const onChange = jest.fn();
      const driver = createDriver(defaultRadioGroup({ onChange }));
      driver.selectByValue(1);
      expect(onChange).toBeCalledWith(1);
    });

    it('should not be called upon checked option', () => {
      const value = 1;
      const onChange = jest.fn();
      const driver = createDriver(defaultRadioGroup({ onChange, value }));

      driver.selectByValue(1);
      expect(onChange.mock.calls).toHaveLength(0);
    });

    it('should not be called upon disabled option', () => {
      const disabledRadios = [1];
      const onChange = jest.fn();
      const driver = createDriver(
        defaultRadioGroup({ onChange, disabledRadios }),
      );

      driver.selectByValue(1);
      expect(onChange.mock.calls).toHaveLength(0);
    });
  });

  describe('vAlign attribute', () => {
    const radioGroup = props => (
      <RadioGroup {...props}>
        <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
        <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
      </RadioGroup>
    );

    it('should have a default vcenter class', () => {
      const driver = createDriver(radioGroup());
      expect(driver.getClassOfLabelAt(0)).toContain('vcenter');
      expect(driver.getClassOfLabelAt(1)).toContain('vcenter');
    });

    it('should have a vtop class', () => {
      const driver = createDriver(radioGroup({ vAlign: 'top' }));
      expect(driver.getClassOfLabelAt(0)).toContain('vtop');
      expect(driver.getClassOfLabelAt(1)).toContain('vtop');
    });
  });

  describe('display attribute', () => {
    it('should be vertical by default', () => {
      const driver = createDriver(defaultRadioGroup());
      expect(driver.isVerticalDisplay()).toBe(true);
    });

    it('should be horizontal', () => {
      const driver = createDriver(defaultRadioGroup({ display: 'horizontal' }));
      expect(driver.isHorizontalDisplay()).toBe(true);
    });
  });

  describe('spacing attribute', () => {
    it('should be spaced', () => {
      const driver = createDriver(defaultRadioGroup({ spacing: '30px' }));
      expect(driver.spacing()).toBe('30px');
    });
  });

  describe('line-height attribute', () => {
    it('should have default value', () => {
      const driver = createDriver(defaultRadioGroup());
      expect(driver.lineHeight()).toBe(RadioGroup.defaultProps.lineHeight);
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<RadioGroup />, radioGroupTestkitFactory)).toBe(
        true,
      );
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(
          <RadioGroup />,
          enzymeRadioGroupTestkitFactory,
          mount,
        ),
      ).toBe(true);
    });
  });
});
