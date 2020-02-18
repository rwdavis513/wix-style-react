import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import CustomModal from '../CustomModal';
import { customModalPrivateDriverFactory } from './CustomModal.private.uni.driver';
import Checkbox from '../../Checkbox';
import { dataHooks } from '../constants';

describe('CustomModal', () => {
  const render = createRendererWithUniDriver(customModalPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(
      <CustomModal
        dataHook={dataHooks.customModal}
        primaryButtonText={'Confirm'}
        primaryButtonProps={{ dataHook: dataHooks.primaryButton }}
        secondaryButtonText={'Cancel'}
        secondaryButtonProps={{ dataHook: dataHooks.secondaryButton }}
      >
        Content
      </CustomModal>,
    );

    expect(await driver.exists()).toBe(true);
    expect(await driver.getPrimaryButtonText()).toEqual('Confirm');
    expect(await driver.getSecondaryButtonText()).toEqual('Cancel');
  });
  it('should render children', async () => {
    const children = <div data-hook="child">Child div</div>;
    const { driver } = render(<CustomModal>{children}</CustomModal>);

    expect(await driver.childExists('[data-hook=child]')).toBe(true);
  });

  it('should receive class name', async () => {
    const expectedClass = 'classy';
    const { driver } = render(
      <CustomModal className={expectedClass}>Content</CustomModal>,
    );

    expect(await driver.hasClass(expectedClass)).toBe(true);
  });

  it('should render title', async () => {
    const title = 'Modal Title';
    const { driver } = render(<CustomModal title={title}>Content</CustomModal>);

    expect(await driver.getTitleText()).toEqual(title);
  });

  it('should render subtitle', async () => {
    const subtitle = 'Subtitle here';
    const title = 'Modal Title';
    const { driver } = render(
      <CustomModal title={title} subtitle={subtitle}>
        Content
      </CustomModal>,
    );

    expect(await driver.getSubtitleText()).toEqual(subtitle);
  });

  it('should click on the primary action button', async () => {
    const props = {
      primaryButtonText: 'Confirm',
      primaryButtonOnClick: jest.fn(),
      primaryButtonProps: { dataHook: dataHooks.primaryButton },
    };
    const { driver } = render(<CustomModal {...props}>Content</CustomModal>);
    await driver.clickPrimaryButton();
    expect(props.primaryButtonOnClick).toHaveBeenCalledTimes(1);
  });

  it('should click on the secondary action button', async () => {
    const props = {
      secondaryButtonText: 'Cancel',
      secondaryButtonOnClick: jest.fn(),
      secondaryButtonProps: { dataHook: dataHooks.secondaryButton },
    };
    const { driver } = render(<CustomModal {...props}>Content</CustomModal>);
    await driver.clickSecondaryButton();
    expect(props.secondaryButtonOnClick).toHaveBeenCalledTimes(1);
  });
  it('should click on the close button', async () => {
    const props = {
      onCloseButtonClick: jest.fn(),
    };
    const { driver } = render(<CustomModal {...props}>Content</CustomModal>);

    await driver.clickCloseButton();

    expect(props.onCloseButtonClick).toHaveBeenCalledTimes(1);
  });

  it('should allow changing the primary button text', async () => {
    const { driver } = render(
      <CustomModal
        primaryButtonText="Press me"
        primaryButtonProps={{ dataHook: dataHooks.primaryButton }}
      >
        Content
      </CustomModal>,
    );
    expect(await driver.getPrimaryButtonText()).toEqual('Press me');
  });

  it('should allow changing the secondary button text', async () => {
    const { driver } = render(
      <CustomModal
        secondaryButtonText="Don't press me"
        secondaryButtonProps={{ dataHook: dataHooks.secondaryButton }}
      >
        Content
      </CustomModal>,
    );
    expect(await driver.getSecondaryButtonText()).toEqual("Don't press me");
  });

  it(`should render 'sideActions'`, async () => {
    const dataHook = 'sideActions';
    const selector = '[data-hook="' + dataHook + '"]';
    const sideActions = (
      <div data-hook={dataHook}>
        <Checkbox>Check this</Checkbox>
      </div>
    );
    const { driver } = render(
      <CustomModal sideActions={sideActions}>Content</CustomModal>,
    );

    expect(await driver.childExists(selector)).toBe(true);
  });

  it(`should render 'footnote'`, async () => {
    const dataHook = 'footnote';
    const selector = '[data-hook="' + dataHook + '"]';
    const footnote = <div data-hook={dataHook}>Footnote here</div>;
    const { driver } = render(
      <CustomModal footnote={footnote}>Content</CustomModal>,
    );

    expect(await driver.childExists(selector)).toBe(true);
  });
});
