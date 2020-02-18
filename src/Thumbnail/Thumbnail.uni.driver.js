import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { dataHooks } from './constants';

export const thumbnailDriverFactory = base => {
  const byHook = hook => base.$(`[data-hook*="${hook}"]`);
  const getThumbnailWrapper = () => byHook(dataHooks.thumbnailWrapper);
  const getStyle = async (element, rule) =>
    (await element.attr('style')).match(new RegExp(`${rule}: (.*?);`))[1];

  return {
    ...baseUniDriverFactory(base),

    /** Get thumbnail title */
    getTitle: async () =>
      (
        await textUniDriverFactory(await byHook(dataHooks.thumbnailTitle))
      ).getText(),

    /** Get thumbnail description */
    getDescription: () => byHook(dataHooks.thumbnailDescription).text(),

    /** Get selected icon */
    getSelectedIcon: () => byHook(dataHooks.thumbnailSelectedIcon),

    getBackgroundImage: () => byHook(dataHooks.thumbnailBackgroundImage),

    /** Is Thumbnail selected */
    isSelected: async () =>
      (await getThumbnailWrapper().attr('data-selected')) === 'true',

    /** Is Thumbnail disabled */
    isDisabled: async () =>
      (await getThumbnailWrapper().attr('data-disabled')) === 'true',

    /** Get thumbnail image */
    getImage: () => byHook(dataHooks.thumbnailImage),

    /** Get thumbnail width, if it's set through `width` prop */
    getWidth: async () => await getStyle(base, 'width'),

    /** Get thumbnail height, if it's set through `height` prop */
    getHeight: async () =>
      await getStyle(await getThumbnailWrapper(), 'height'),
  };
};
