import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import Star from 'wix-ui-icons-common/Star';
import * as examples from './examples';

import CounterBadge from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'CounterBadge',

  component: CounterBadge,
  componentPath: '..',

  componentProps: {
    children: 1,
    skin: 'general',
  },

  exampleProps: {
    children: [
      { label: 'number', value: 1 },
      { label: 'string', value: 'New!' },
      { label: 'node', value: <Star /> },
    ],
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/CounterBadge/',
      component: <CounterBadge>1</CounterBadge>,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'CounterBadge gives you a quick preview to indicate more action is required.',
            }),
          ]),

          columns([
            importExample(
              "import CounterBadge from 'wix-style-react/CounterBadge';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Number counter',
              text:
                'The most common use of CounterBadge is with a number value truncated to 99.',
            }),

            code({
              compact: true,
              source: examples.numbers,
            }),
          ]),

          columns([
            description({
              title: 'Skins',
              text:
                'Background color can be one of the following: `general`, `danger`, `urgent`, `standard`, `warning` and `success`.',
            }),

            code({
              compact: true,
              source: examples.skins,
            }),
          ]),

          columns([
            description({
              title: 'Custom node',
              text: 'CounterBadge can display a custom node, like an icon.',
            }),

            code({
              compact: true,
              source: examples.custom,
            }),
          ]),

          columns([
            description({
              title: 'Advanced',
              text: 'An example for a CounterBadge counting items in cart.',
            }),

            code({
              compact: true,
              source: examples.advanced,
            }),
          ]),
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
