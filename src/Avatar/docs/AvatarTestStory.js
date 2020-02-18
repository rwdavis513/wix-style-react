import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import Avatar from '..';
import { storySettings } from './storySettings';
import style from './AvatarStory.scss';

const kind = getTestStoryKind({
  category: storySettings.category,
  storyName: storySettings.storyName,
});

storiesOf(kind, module).add(storySettings.testStories.SIZES, () => {
  return (
    <div className={style.container}>
      {[
        'size90',
        'size72',
        'size60',
        'size48',
        'size36',
        'size30',
        'size24',
        'size18',
      ].map(size => (
        <Avatar name="John Doe" size={size} key={size} />
      ))}
    </div>
  );
});

storiesOf(kind, module).add(storySettings.testStories.COLORS, () => {
  return (
    <div className={style.container}>
      {['A1', 'A2', 'A3', 'A4', 'A5', 'A6'].map(color => (
        <Avatar name="John Doe" color={color} key={color} />
      ))}
    </div>
  );
});

storiesOf(kind, module).add(storySettings.testStories.PLACEHOLDER, () => {
  return (
    <div className={style.container}>
      {[
        'size90',
        'size72',
        'size60',
        'size48',
        'size36',
        'size30',
        'size24',
        'size18',
      ].map(size => (
        <Avatar size={size} key={size} />
      ))}
    </div>
  );
});
