import { dataHooks } from './ContactItemBuilderDataHooks';
import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const contactItemBuilderUniDriverFactory = base => {
  const title = base.$(`[data-hook="${dataHooks.pickerOptionTitle}"]`);
  const subtitle = base.$(`[data-hook="${dataHooks.pickerOptionSubtitle}"]`);

  return {
    ...baseUniDriverFactory(base),
    getTitle: () => title.text(),
    getSubtitle: () => subtitle.text(),
  };
};
