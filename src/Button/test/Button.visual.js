import React from 'react';
import AddChannel from 'wix-ui-icons-common/AddChannel';
import Button from '../Button';
import { SIZES, SKINS } from '../constants';
import { visualize, story, snap } from 'storybook-snapper';

import {
  getSkinBackground,
  renderButtonBlock,
} from '../../utils/ButtonHelpers';

const defaultProps = {
  children: 'Button',
};

const skins = Object.values(SKINS).reduce((output, skin) => {
  return [...output, { skin, background: getSkinBackground(skin) }];
}, []);

const sizes = Object.values(SIZES);

const tests = [
  {
    describe: 'Sizes',
    its: sizes.map(size => ({ it: size, props: { size } })),
  },
  {
    describe: 'Affixes',
    its: sizes.map(size => ({
      it: size,
      props: {
        size,
        prefixIcon: <AddChannel />,
        suffixIcon: <AddChannel />,
      },
    })),
  },
];

const blockOfTests = [
  {
    it: 'Primary Skins',
    render: () => renderButtonBlock({ Component: Button, skins }),
  },
  {
    it: 'Secondary Skins',
    render: () =>
      renderButtonBlock({
        Component: Button,
        props: { priority: 'secondary' },
        skins,
      }),
  },
];

visualize('Button', () => {
  blockOfTests.forEach(({ it, render }) => {
    snap(it, render);
  });

  tests.forEach(({ describe, its }) => {
    story(describe, () => {
      its.map(({ it, props }) =>
        snap(it, () => <Button {...defaultProps} {...props} />),
      );
    });
  });
});
