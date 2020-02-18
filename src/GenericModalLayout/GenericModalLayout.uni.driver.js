import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const genericModalLayoutUniDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    isFullscreen: () => base.hasClass('fullscreenContainer'),
  };
};
