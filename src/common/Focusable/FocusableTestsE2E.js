import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { flattenInternalDriver } from '../../../test/utils/private-drivers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

/**
 * IMPORTANT !!!
 * It is the responsibility of the caller to reset the tested component's state beforeEach test.
 * Resetting the state should include resetting the document's activeElement in such a way so that when pressing TAB one time,
 * then the tested component would be focusable.
 *
 * Adds a `describe` block.
 */
export function runFocusTests(driver, storyUrl) {
  runFocusTestsImpl(flattenInternalDriver(driver), storyUrl);
}

// TODO: add tests for error mode and disabled mode
function runFocusTestsImpl(driver, storyUrl) {
  describe('Focusable', () => {
    const pressTab = () =>
      browser
        .actions()
        .sendKeys(protractor.Key.TAB)
        .perform();
    const pressShiftTab = () =>
      browser
        .actions()
        .sendKeys(
          protractor.Key.chord(protractor.Key.SHIFT, protractor.Key.TAB),
        )
        .perform();
    const pressSpace = () =>
      browser
        .actions()
        .sendKeys(protractor.Key.SPACE)
        .perform();

    const expectKeyboardFocused = async (_driver, msg) => {
      const prefix = msg ? `${msg} - ` : '';
      expect(await _driver.hasFocusState()).toBe(
        true,
        `${prefix}hasFocusState`,
      );
      expect(await _driver.hasFocusVisibleState()).toBe(
        true,
        `${prefix}hasFocusVisibleState`,
      );
    };

    const expectNotFocused = async (_driver, msg) => {
      const prefix = msg ? `${msg} - ` : '';
      expect(await _driver.hasFocusState()).toBe(
        false,
        `${prefix}hasFocusState`,
      );
      expect(await _driver.hasFocusVisibleState()).toBe(
        false,
        `${prefix}hasFocusVisibleState`,
      );
    };

    const expectMouseFocused = async (_driver, msg) => {
      const prefix = msg ? `${msg} - ` : '';
      expect(await _driver.hasFocusState()).toBe(
        true,
        `${prefix}hasFocusState`,
      );
      expect(await _driver.hasFocusVisibleState()).toBe(
        false,
        `${prefix}hasFocusVisibleState`,
      );
    };

    beforeAll(async () => {
      await browser.get(storyUrl);
      await waitForVisibilityOf(driver.element(), 'Cannot find element');
    });

    beforeEach(() => autoExampleDriver.remount());

    it('should not be focused [given] initial default', async () => {
      await expectNotFocused(driver);
    });

    // TODO: The next 2 tests are skipped on purpose, I did not yet implement
    // a driver method for programmatically doing focus and blur.
    // This is not in priority to support it.
    xit('should have focus and focus-visible [when] focused programmatically', async () => {
      await driver.focus(); // not implemented

      // Default input method is keyboard
      await expectKeyboardFocused(driver, 'default is keyboard');
    });

    xit('should not be focused [when] blurred programmatically [given] focused programmatically', async () => {
      await driver.focus(); // not implemented
      await expectKeyboardFocused(driver, 'after focus');
      await driver.blur(); // not implemented
      await expectNotFocused(driver, 'after focus');
    });

    it(`should have focus but not focus-visible [when] root element is clicked by mouse`, async () => {
      await driver.clickRoot();
      await expectMouseFocused(driver);
    });

    driver.clickableElements.forEach((element, index) => {
      it(`should not have focus-visible [when] clicked by mouse on clickable #${index}`, async () => {
        await element.click();
        await expectMouseFocused(driver);
      });
    });

    it('should have focus and focus-visible [when] focused by keyboard [given] clicked by mouse and blurred', async () => {
      await expectNotFocused(driver, 'initial');
      await driver.clickRoot();
      await expectMouseFocused(driver, 'after click');
      await pressTab();
      await expectNotFocused(driver, 'after tab');
      await pressShiftTab();
      await expectKeyboardFocused(driver, 'after shift-tab');
    });

    it('should have focus and focus-visible [when] any keyboard key pressed [given] focused by mouse', async () => {
      await driver.clickRoot();
      await expectMouseFocused(driver);
      await pressSpace();
      await expectKeyboardFocused(driver);
    });
  });
}
