import { toggleButtonDriverFactory } from './ToggleButton.uni.driver';

export const toggleButtonPrivateDriverFactory = (base, body) => {
  return {
    ...toggleButtonDriverFactory(base, body),
    getIconSize: async () =>
      await base.$('[data-hook="toggleButton-icon"]').attr('height'),
  };
};
