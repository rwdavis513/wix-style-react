import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '../Loader';

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Large, white with text',
        props: {
          size: 'large',
          color: 'white',
          text: 'Wubba Lubba Dub Dub',
        },
      },
    ],
  },
  {
    describe: 'Sizes',
    its: [
      {
        it: 'Tiny',
        props: { size: 'tiny' },
      },
      {
        it: 'Small',
        props: { size: 'small' },
      },
      {
        it: 'Medium',
        props: { size: 'medium' },
      },
      {
        it: 'Large',
        props: { size: 'large' },
      },
    ],
  },
  {
    describe: 'Colors',
    its: [
      {
        it: 'Blue',
        props: { color: 'blue' },
      },
      {
        it: 'White',
        props: { color: 'white' },
      },
    ],
  },
  {
    describe: 'Statuses',
    its: [
      {
        it: 'Loading',
        props: { status: 'loading' },
      },
      {
        it: 'Error',
        props: { status: 'error' },
      },
      {
        it: 'Success',
        props: { status: 'success' },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Loader${describe ? '/' + describe : ''}`, module).add(it, () => (
      <Loader {...props} />
    ));
  });
});
