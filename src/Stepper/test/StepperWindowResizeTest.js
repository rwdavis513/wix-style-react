import React from 'react';
import { storiesOf } from '@storybook/react';

import Stepper from '..';
import { StepType } from '../constants';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings } from './storySettings';

const steps7 = [
  { text: 'This is a long step name', type: StepType.Completed },
  { text: 'This is a long step name' },
  { text: 'This is a long step name', type: StepType.Error },
  { text: 'This is a long step name' },
  { text: 'This is a long step name', type: StepType.Error },
  { text: 'This is a long step name' },
  { text: 'This is a long step name', type: StepType.Disabled },
];

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(storySettings.testStoryNames.WINDOW_RESIZE, () => (
  <Stepper steps={steps7} activeStep={2} dataHook={storySettings.dataHook} />
));
