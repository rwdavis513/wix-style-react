import {
  waitForVisibilityOf,
  protractorUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/protractor';

import { eyesItInstance } from '../../../test/utils/eyes-it';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { modalPreviewLayoutPrivateDriverFactory } from './ModalPreviewLayout.private.uni.driver';
import { storySettings } from './storySettings';

const createStoryUrl = testName =>
  createTestStoryUrl({ ...storySettings, testName });
const testStoryNames = storySettings.testStoryNames;

describe('ModalPreviewLayout', () => {
  const eyes = eyesItInstance();
  let driver;

  const createDriver = async (dataHook = storySettings.dataHook) => {
    driver = protractorUniTestkitFactoryCreator(
      modalPreviewLayoutPrivateDriverFactory,
    )({
      dataHook,
    });

    await waitForVisibilityOf(
      await driver.element(),
      `Cannot find <ModalPreviewLayout/> component with dataHook of ${dataHook}`,
    );

    return driver;
  };

  beforeEach(async () => {
    await browser.get(createStoryUrl(testStoryNames.modalNavigationButtons));
    await createDriver();
  });

  describe('Tooltips', () => {
    eyes.it(
      `should display 'Next' white tooltip when hovering right navigation button`,
      async () => {
        await driver.hoverRightNavigationButton();
      },
    );

    eyes.it(
      `should display 'Prev' white tooltip when hovering left navigation button`,
      async () => {
        await driver.clickRightNavigationButton();
        await driver.hoverLeftNavigationButton();
      },
    );

    eyes.it(
      `should display 'Close' white tooltip when hovering close button`,
      async () => {
        await driver.hoverCloseButton();
      },
    );
  });

  describe('Navigation Buttons', () => {
    eyes.it(
      `should display Left NavigationButton on last child node`,
      async () => {
        await driver.clickRightNavigationButton();
        await driver.clickRightNavigationButton();
      },
    );
  });
});
