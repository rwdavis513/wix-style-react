import {
  buttonTestkitFactory,
  headingTestkitFactory,
} from '../../../../dist/testkit/puppeteer';

describe('React application to be interacted with puppeteer testkit', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3105/?type=puppeteer-testkit');
  });

  it('should use a valid puppeter testkit', async () => {
    const actionButtonDataHook = 'action-button';
    const approvalTextDataHook = 'approval-text';

    await page.waitForSelector(`[data-hook=${actionButtonDataHook}]`);
    const actionButtonDriver = await buttonTestkitFactory({
      page,
      dataHook: actionButtonDataHook,
    });
    await actionButtonDriver.click();

    await page.waitForSelector(`[data-hook=${approvalTextDataHook}]`);
    const approvalTextDriver = await headingTestkitFactory({
      page,
      dataHook: approvalTextDataHook,
    });

    expect(await approvalTextDriver.getValue()).toContain('It was clicked!');
  });
});
