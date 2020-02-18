import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading, { APPEARANCES } from '..';

const defaultProps = {
  light: false,
  appearance: 'H1',
  children: 'Hey there, good looking',
};

const tests = [
  {
    describe: 'basic',
    its: [
      ...Object.values(APPEARANCES).map(appearance => ({
        it: `appearance prop ${appearance}`,
        props: {
          appearance,
        },
      })),
      {
        it: 'light prop - dark',
      },
      {
        it: 'light prop - light',
        props: {
          light: true,
        },
      },
    ],
  },
  {
    describe: 'ellipsis',
    its: [
      {
        it: 'with',
        props: {
          ellipsis: true,
          children: 'very very long text',
        },
        container: {
          style: { width: '267px' },
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, container }) => {
    storiesOf(`Heading${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <div {...container}>
          <Heading {...defaultProps} {...props} />
        </div>
      ),
    );
  });
});
