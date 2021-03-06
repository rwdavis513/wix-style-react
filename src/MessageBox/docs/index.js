import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from './Alert';
import DestructiveAlert from './DestructiveAlert';
import Announcement from './Announcement';
import { storySettings } from './storySettings';
import PremiumModal from './PremiumModal';

import { Category } from '../../../stories/storiesHierarchy';

storiesOf(Category.MODALS, module)
  .add(storySettings.alert.story, () => <Alert />)
  .add(storySettings.destructive.story, () => <DestructiveAlert />)
  // .add(storySettings.custom.story, () => <CustomModal />)
  .add(storySettings.announcement.story, () => <Announcement />)
  .add(storySettings.premium.story, () => <PremiumModal />);
