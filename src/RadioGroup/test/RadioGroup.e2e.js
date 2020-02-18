import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { radioGroupTestkitFactory } from '../../../testkit/protractor';
import { eyesItInstance } from '../../../test/utils/eyes-it';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { flattenInternalDriver } from '../../../test/utils/private-drivers';
import { storySettings, testStories } from '../docs/storySettings';

const NUM_OF_BUTTONS_IN_EXAMPLE = 4;

const testStoryUrl = (testName, rtl) =>
  createTestStoryUrl({ ...storySettings, testName, rtl });

describe('RadioGroup', () => {
  const eyes = eyesItInstance();
  const radioGroupDriver = radioGroupTestkitFactory({
    dataHook: storySettings.dataHook,
  });
  const loadStory = async (testName, rtl) => {
    await browser.get(testStoryUrl(testName, rtl));
    await waitForVisibilityOf(
      radioGroupDriver.element(),
      'Cannot find RadioGroup',
    );
  };

  eyes.it('should select the second option in a group', async () => {
    await loadStory(testStories.basic);
    radioGroupDriver.selectByIndex(1).click();
    expect(radioGroupDriver.isRadioChecked(1)).toBe(true);
  });

  eyes.it('should not select disabled option', async () => {
    await loadStory(testStories.disabledRadio);
    expect(radioGroupDriver.isRadioDisabled(3)).toBe(true);
    browser
      .actions()
      .mouseMove(radioGroupDriver.getRadioAtIndex(3))
      .click();
    expect(radioGroupDriver.isRadioChecked(3)).toBe(false);
  });

  describe('Focus tests', () => {
    const pressTab = () =>
      browser
        .actions()
        .sendKeys(protractor.Key.TAB)
        .perform();
    const groupDriver = radioGroupDriver;

    const expectNotFocused = async (msg, driver) => {
      const prefix = msg ? `${msg} - ` : '';
      expect(await driver.isFocused()).toBe(false, `${prefix}focused`);
      expect(await driver.hasFocusState()).toBe(
        false,
        `${prefix}hasFocusState`,
      );
      expect(await driver.hasFocusVisibleState()).toBe(
        false,
        `${prefix}hasFocusVisibleState`,
      );
    };

    const expectFocusedByKeyboard = async (msg, driver) => {
      const prefix = msg ? `${msg} - ` : '';
      expect(await driver.isFocused()).toBe(true, `${prefix}focused`);
      expect(await driver.hasFocusState()).toBe(true, `${prefix}hasFocusState`);
      expect(await driver.hasFocusVisibleState()).toBe(
        true,
        `${prefix}hasFocusVisibleState`,
      );
    };

    const expectFocusedByMouse = async (msg, driver) => {
      const prefix = msg ? `${msg} - ` : '';
      expect(await driver.isFocused()).toBe(true, `${prefix}focused`);
      expect(await driver.hasFocusState()).toBe(true, `${prefix}hasFocusState`);
      expect(await driver.hasFocusVisibleState()).toBe(
        false,
        `${prefix}hasFocusVisibleState`,
      );
    };

    eyes.it('should show focus styles when navigated by keyboard', async () => {
      await loadStory(testStories.firstRadioSelected);
      // TODO: replace with forEachAsync
      for (let index = 0; index < NUM_OF_BUTTONS_IN_EXAMPLE; index++) {
        const driver = flattenInternalDriver(
          groupDriver.getButtonDriver(index),
        );
        await expectNotFocused(`button ${index} - before`, driver);
        await pressTab();
        await expectFocusedByKeyboard(`button ${index} - after`, driver);
        index === 0 &&
          (await eyes.checkWindow(`button ${index} with focus-visible`));
      }
    });

    it('should to be selected but NOT to show focus styles when clicked by mouse', async () => {
      await loadStory(testStories.basic);
      // TODO: replace with forEachAsync
      for (let index = 0; index < NUM_OF_BUTTONS_IN_EXAMPLE; index++) {
        const driver = flattenInternalDriver(
          groupDriver.getButtonDriver(index),
        );
        await expectNotFocused(`button ${index} - before`, driver);
        await driver.clickRoot();
        expect(await radioGroupDriver.isRadioChecked(index)).toBe(true);
        await expectFocusedByMouse(`button ${index} - after`, driver);
      }
    });

    eyes.it('should show focus styles on first item (selected)', async () => {
      await loadStory(testStories.firstRadioSelected);
      const driver = flattenInternalDriver(groupDriver.getButtonDriver(0));
      expect(await radioGroupDriver.isRadioChecked(0)).toBe(true);
      await expectNotFocused(`button 0 - before`, driver);
      await pressTab();
      await expectFocusedByKeyboard(`button 0 - after`, driver);
    });
  });

  describe('RTL', () => {
    beforeAll(async () => await loadStory(testStories.basic, true));

    eyes.it('should select the second option in a group', async () => {
      radioGroupDriver.selectByIndex(1).click();
      expect(radioGroupDriver.isRadioChecked(1)).toBe(true);
    });
  });
});
