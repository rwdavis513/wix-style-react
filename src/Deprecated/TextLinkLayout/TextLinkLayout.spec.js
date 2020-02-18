import React from 'react';
import textLinkLayoutDriverFactory from './TextLinkLayout.driver';
import TextLinkLayout from './TextLinkLayout';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';

describe('TextLinkLayout', () => {
  const createDriver = createDriverFactory(textLinkLayoutDriverFactory);

  it('should have a textLinkLayout', () => {
    const driver = createDriver(<TextLinkLayout />);

    expect(driver.exists()).toBe(true);
  });

  it('should render children', () => {
    const children = '<div>123</div>';
    const driver = createDriver(
      <TextLinkLayout link="">{children}</TextLinkLayout>,
    );

    expect(driver.getContent()).toBe(children);
  });

  it('should be with medium size by default', () => {
    const driver = createDriver(<TextLinkLayout />);
    expect(driver.getSize()).toBe('medium');
  });

  it('should be with small size', () => {
    const driver = createDriver(<TextLinkLayout size="small" />);
    expect(driver.getSize()).toBe('small');
  });

  it('should be with dark background', () => {
    const driver = createDriver(
      <TextLinkLayout theme="darkBackground" size="small" />,
    );
    expect(driver.isDarkBackground()).toBe(true);
  });

  it('should be with greyscale theme', () => {
    const driver = createDriver(
      <TextLinkLayout theme="greyScale" size="small" />,
    );
    expect(driver.isGreyScale()).toBe(true);
  });

  it('should be with light background', () => {
    const driver = createDriver(<TextLinkLayout size="small" />);
    expect(driver.isLightBackground()).toBe(true);
  });

  it('should be with underline', () => {
    const driver = createDriver(<TextLinkLayout underlineStyle="always" />);
    expect(driver.isUnderline()).toBe(true);
  });

  it('should not be with underline', () => {
    const driver = createDriver(<TextLinkLayout underlineStyle="never" />);
    driver.hover();
    expect(driver.isUnderline()).toBe(false);
  });

  it('should not be with underline by default', () => {
    const driver = createDriver(<TextLinkLayout />);
    expect(driver.isUnderline()).toBe(false);
  });

  it('should have underline on hover', () => {
    const driver = createDriver(<TextLinkLayout />);
    driver.hover();
    expect(driver.isUnderline()).toBe(true);
  });

  it('should be with display block by default', () => {
    const driver = createDriver(<TextLinkLayout />);
    expect(driver.getDisplay()).toBe('block');
  });

  it('should be with a custom display', () => {
    const driver = createDriver(<TextLinkLayout display="inline-block" />);
    expect(driver.getDisplay()).toBe('inline-block');
  });

  it('should have a prefixIcon', () => {
    const driver = createDriver(<TextLinkLayout prefixIcon={<div />} />);

    expect(driver.isSuffixIconExists()).toBe(false);
    expect(driver.isPrefixIconExists()).toBe(true);
  });

  it('should have a suffixIcon', () => {
    const driver = createDriver(<TextLinkLayout suffixIcon={<div />} />);

    expect(driver.isPrefixIconExists()).toBe(false);
    expect(driver.isSuffixIconExists()).toBe(true);
  });
});
