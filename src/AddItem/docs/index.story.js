import React from 'react';

import AddItem from '..';

import {
  header,
  tabs,
  tab,
  description,
  columns,
  playground,
  api,
  testkit,
  importExample,
  divider,
  code,
  title,
} from 'wix-storybook-utils/Sections';
import * as examples from './examples';

import { Layout } from '../../Layout';
import { baseScope } from '../../../stories/utils/LiveCodeExample';

import { storySettings } from './storySettings';

import themes from './themes.md';
import sizes from './sizes.md';

const liveCode = config =>
  code({
    previewProps: {
      style: { backgroundColor: '#f0f4f7' },
    },
    compact: true,
    components: baseScope,
    ...config,
  });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), liveCode({ source })]);

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: AddItem,
  componentPath: '..',
  componentProps: {
    children: 'Add Item',
    theme: 'dashes',
    alignItems: 'center',
    dataHook: storySettings.dataHook,
    tooltipContent: ' tooltip content',
  },

  exampleProps: {
    children: '',
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/AddItem/',
      component: (
        <Layout gap={0} cols={6}>
          <div style={{ height: '100px' }}>
            <AddItem size="small">Add Item</AddItem>
          </div>
        </Layout>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description(
              'Add Item is a component used to add new items to an existing items list.',
            ),
          ]),

          importExample("import AddItem from 'wix-style-react/AddItem';"),

          divider(),

          columns([
            description({
              title: 'Usage',
              text:
                'AddItem accepts its string based content through `children` prop.',
            }),
          ]),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Plain Example',
              text: 'AddItem plain usage.',
              source: examples.plain,
            },
            {
              title: 'Themes',
              text: themes,
              source: examples.themes,
            },
            {
              title: 'Theme `plain` Alignment',
              text:
                'Different from the rest of the themes, `plain` theme can be aligned to left, right or center in order to maintain visual consistency with the card content.',
              source: examples.alignItems,
            },
            {
              title: 'Sizes',
              text: sizes,
              source: examples.sizes,
            },
            {
              title: 'Content',
              text:
                'For sizes `large`, `medium`, `small` users can choose whether to display the textual content or not, but `tiny` size should always be displayed with the textual content.',
              source: examples.content,
            },
            {
              title: 'States',
              text: 'AddItem can be disabled.',
              source: examples.states,
            },
            {
              title: 'Show Icon',
              text: 'When set to false, icon is removed.',
              source: examples.showIcon,
            },
            {
              title: 'Remove Padding',
              text: 'When set to true, padding is removed',
              source: examples.removePadding,
            },
          ].map(example),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
