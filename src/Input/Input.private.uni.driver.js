import publicDriverFactory from './Input.uni.driver';
import { ReactBase } from '../../test/utils/unidriver';

export const testkit = base => {
  const input = base.$$('input').get(0);
  const reactBaseInput = ReactBase(input);

  return {
    ...publicDriverFactory(base),

    startComposing: () => reactBaseInput._private.compositionStart(),
    endComposing: () => reactBaseInput._private.compositionEnd(),
  };
};
