import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import StatusIndicator from '../StatusIndicator';
import { statusIndicatorPrivateDriverFactory } from './StatusIndicator.private.uni.driver';

describe('StatusIndicator', () => {
  const render = createRendererWithUniDriver(
    statusIndicatorPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<StatusIndicator />);

    expect(await driver.exists()).toBe(true);
  });

  it('with no tooltip', async () => {
    const { driver } = render(<StatusIndicator />);

    expect(await driver.hasTooltip()).toBe(false);
  });

  it('with tooltip', async () => {
    const message = 'Hello World';
    const { driver } = render(<StatusIndicator message={message} />);

    expect(await driver.hasTooltip()).toBe(true);
    expect(await driver.getTooltipText()).toBe(message);
  });
});
