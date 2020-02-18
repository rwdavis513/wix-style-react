import { eyesItInstance } from '../../../test/utils/eyes-it';

import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { storySettings } from '../docs/storySettings';

const { category, storyName } = storySettings;

const testStoryUrl = testName =>
  createTestStoryUrl({
    category,
    storyName: `${storyName}/Deprecated`,
    testName,
  });

describe('Page Deprecated', () => {
  describe('min/max width', () => {
    function eyesOptions({ width }) {
      return {
        enableSnapshotAtBrowserGet: true,
        enableSnapshotAtEnd: false,
        width,
      };
    }

    const eyes = eyesItInstance();
    describe('Default values', () => {
      const url = testStoryUrl('5. Default [min/max]-width');

      eyes.it(
        'should stop growing at max-width',
        async () => {
          await browser.get(url);
        },
        eyesOptions({ width: 1500 }),
      );

      eyes.it(
        'should stop shrinking at default min-width',
        async () => {
          await browser.get(url);
        },
        eyesOptions({ width: 500 }),
      );
    });

    describe('Custom values', () => {
      const url = testStoryUrl('6. Custom [min/max]-width');
      eyes.it(
        'should stop growing at max-width (1400px)',
        async () => {
          await browser.get(url);
        },
        eyesOptions({ width: 1500 }),
      );

      eyes.it(
        'should stop shrinking at default min-width (600px)',
        async () => {
          await browser.get(url);
        },
        eyesOptions({ width: 500 }),
      );
    });
  });
});
