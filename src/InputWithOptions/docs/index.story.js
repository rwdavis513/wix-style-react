/* eslint-disable no-console */
import React from 'react';

import InputWithOptions from '..';
import { storySettings } from './storySettings';

const options = [
  { id: 0, value: 'First option' },
  { id: 1, value: 'Unselectable option', unselectable: true },
  { id: 2, value: 'Third option' },
  { id: 3, value: <span style={{ color: 'red' }}>Node option</span> },
  { id: 4, value: '-' },
  {
    id: 5,
    value:
      'Very long option text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj',
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: InputWithOptions,
  componentPath: '..',

  componentProps: {
    options,
  },
  exampleProps: {},
};
