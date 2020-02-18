import React from 'react';
import { header, playground } from 'wix-storybook-utils/Sections';
import { default as PopoverMenu } from '..';
import { default as PopoverMenuItem } from '../../PopoverMenuItem';
import { storySettings } from './storySettings';

import SectionHelper from '../../SectionHelper';
import { Layout, Cell } from '../../Layout';

import { createAutoExampleWrapper } from '../../../stories/utils/AutoExampleWrapper';

const exampleItems = [
  <PopoverMenuItem
    key="edit"
    dataHook={storySettings.itemDataHook}
    text="Edit"
    onClick={() => {}}
  />,
  <PopoverMenuItem
    key="hide"
    dataHook={storySettings.itemDataHook}
    text="Hide"
    onClick={() => {}}
  />,
  <PopoverMenuItem
    key="delete"
    dataHook={storySettings.itemDataHook}
    text="Delete"
    onClick={() => {}}
  />,
];

const exampleChildren = [
  {
    label: 'One item',
    value: exampleItems.slice(0, 1),
  },
  {
    label: 'Two items',
    value: exampleItems.slice(0, 2),
  },
  {
    label: 'Three items',
    value: exampleItems,
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: createAutoExampleWrapper(PopoverMenu),
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    size: 'normal',
    placement: 'right',
    buttonTheme: 'icon-greybackground',
    children: exampleChildren[0].value,
  },

  exampleProps: {
    children: exampleChildren,
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      component: (
        <Layout>
          <Cell span={6}>
            <SectionHelper title="Deprecated Component">
              Make sure to use the same component from Next API section and
              upgrade your api usage.
            </SectionHelper>
          </Cell>
        </Layout>
      ),
    }),
    playground(),
  ],
};
