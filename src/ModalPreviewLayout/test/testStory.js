import React from 'react';
import { storiesOf } from '@storybook/react';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings } from './storySettings';
import ModalPreviewLayout from '..';
import Box from '../../Box';
import Modal from '../../Modal';

const multipleChildren = ['first', 'second', 'third'].map(ordinalNum => (
  <Box
    width="90vw"
    height="100%"
    align="center"
    verticalAlign="middle"
    backgroundColor="D80"
  >
    {`${ordinalNum} content page`}
  </Box>
));

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(
  storySettings.testStoryNames.modalNavigationButtons,
  () => (
    <Modal isOpen>
      <ModalPreviewLayout
        closeButtonTooltipText="Close"
        prevButtonTooltipText="Previous"
        nextButtonTooltipText="Next"
        dataHook={storySettings.dataHook}
        title="Basic Website Design"
        onClose={() => null}
        children={multipleChildren}
      />
    </Modal>
  ),
);
