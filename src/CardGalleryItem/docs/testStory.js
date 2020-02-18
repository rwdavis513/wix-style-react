import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';

import { testStories, storySettings } from './storySettings';
import exampleProps from './exampleProps';
import CardGalleryItem from 'wix-style-react/CardGalleryItem';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.cardGalleryItem, () => {
  return (
    <div>
      <CardGalleryItem dataHook={storySettings.dataHook} {...exampleProps} />
    </div>
  );
});
