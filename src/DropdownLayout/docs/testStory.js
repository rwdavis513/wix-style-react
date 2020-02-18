import React from 'react';
import { storiesOf } from '@storybook/react';

import TestTabSwitches from './tests/TestTabSwitches';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings, testStories } from './storySettings';
import ExampleInfiniteScroll from './ExampleInfiniteScroll';

const kind = getTestStoryKind({
  storyName: storySettings.storyName,
  category: storySettings.category,
});

const TestContainer = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f4f7',
    }}
  >
    {children}
  </div>
);

storiesOf(kind, module).add(testStories.tabsSwitches, () => (
  <TestContainer>
    <input data-hook="input-for-initial-focus" />
    <TestTabSwitches />
    <input style={{ position: 'relative', top: '400px' }} />
  </TestContainer>
));

storiesOf(kind, module).add(testStories.infiniteScroll, () => (
  <ExampleInfiniteScroll />
));
