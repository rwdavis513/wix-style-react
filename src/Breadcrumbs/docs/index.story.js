import React from 'react';
import {
  tab,
  tabs,
  api,
  header,
  divider,
  columns,
  title,
  playground,
  code as baseCode,
  description,
  importExample,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import Breadcrumbs from 'wix-style-react/Breadcrumbs';
import allComponents from '../../../stories/utils/allComponents';

import BreadcrumbsThemes from '!raw-loader!./examples/BreadcrumbsThemes';
import StandardBreadcrumbs from '!raw-loader!./examples/StandardBreadcrumbs';
import BreadcrumbsSizes from '!raw-loader!./examples/BreadcrumbsSizes';
import BreadcrumbsOnClickCallback from '!raw-loader!./examples/BreadcrumbsOnClickCallback';
import ControlledBreadcrumbs from '!raw-loader!./examples/ControlledBreadcrumbs';

const code = config => baseCode({ components: allComponents, ...config });

const items = [
  {
    id: 1,
    value: 'First item',
  },
  {
    id: 2,
    link: 'http://www.wix.com',
    value: 'Linked item',
  },
  {
    id: 3,
    value: 'Third item',
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Breadcrumbs,
  componentPath: '..',

  componentProps: {
    activeId: 1,
    items,
    size: 'medium',
  },
  exampleProps: {
    activeId: [1, 2, 3],
    items: [
      { label: 'One item', value: [{ id: 1, value: 'Homepage' }] },
      { label: 'Three items', value: items },
    ],
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Breadcrumbs.js',
    }),
    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'Breadcrumbs is a type of navigation scheme which reveals the user’s location in a website or Web application.',
            }),
          ]),

          importExample(
            "import Breadcrumbs from 'wix-style-react/Breadcrumbs';",
          ),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Standard',
              text: 'Breadcrumbs items can be either with or without links.',
            }),

            code({
              compact: true,
              source: StandardBreadcrumbs,
            }),
          ]),

          columns([
            description({
              title: 'Sizes',
              text:
                'Breadcrumbs supports 2 sizes: `medium` (default) and `large`.',
            }),

            code({
              compact: true,
              source: BreadcrumbsSizes,
            }),
          ]),

          columns([
            description({
              title: 'Themes',
              text:
                'Breadcrumbs supports 3 themes: `onGrayBackground` (default), `onWhiteBackground` and `onDarkBackground`.',
            }),

            code({
              compact: true,
              source: BreadcrumbsThemes,
            }),
          ]),

          columns([
            description({
              title: 'On click callback',
              text: 'Breadcrumbs supports an onClick callback.',
            }),

            code({
              compact: true,
              source: BreadcrumbsOnClickCallback,
            }),
          ]),

          columns([
            description({
              title: 'Controlled Breadcrumbs',
              text: '',
            }),

            code({
              compact: true,
              source: ControlledBreadcrumbs,
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
