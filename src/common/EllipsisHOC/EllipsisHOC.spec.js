import React from 'react';
import EllipsisHOC from '.';

import {
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react/index';

import { ellipsiHOCDriverFactory } from './EllipsisHOC.uni.driver';

describe('EllipsisHOC', () => {
  afterEach(() => cleanup());

  const render = createRendererWithUniDriver(ellipsiHOCDriverFactory);
  const button = props => <button {...props} />;
  const Ellipsed = EllipsisHOC(button);

  describe('`ellipsis` prop`', () => {
    it('should render with ellipsis [when] given true', async () => {
      const { driver } = render(<Ellipsed ellipsis />);
      expect(await driver.hasEllipsis()).toBe(true);
    });

    it('should render without ellipsis [when] undefined', async () => {
      const { driver } = render(<Ellipsed />);
      expect(await driver.hasEllipsis()).toBe(false);
    });
  });
});
