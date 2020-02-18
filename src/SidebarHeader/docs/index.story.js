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
import * as examples from './examples';

import SidebarHeader from '..';
import Box from '../../Box';
import LinearProgressBar from '../../LinearProgressBar';

const code = config => baseCode({ components: allComponents, ...config });

const titleExamples = [
  { label: 'Short', value: 'Site Name' },
  {
    label: 'Long',
    value:
      'This is a very long title which exceeds the maximum width of its container',
  },
];

const subtitleExamples = [
  { label: 'Short', value: 'Role: Owner' },
  {
    label: 'Long',
    value:
      'This is a very long subtitle which exceeds the maximum width of its container',
  },
];

const childrenExamples = [
  {
    label: 'Progress bar',
    value: (
      <Box marginTop={3}>
        <LinearProgressBar showProgressIndication value={50} />
      </Box>
    ),
  },
];

export default {
  category: storySettings.category,
  storyName: 'SidebarHeader',

  component: SidebarHeader,
  componentPath: '..',

  componentProps: {
    title: titleExamples[0].value,
    subtitle: subtitleExamples[0].value,
  },

  exampleProps: {
    title: titleExamples,
    subtitle: subtitleExamples,
    children: childrenExamples,
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/SidebarHeader/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'A header within the sidebar with title, subtitle and custom content at the bottom.',
            }),
          ]),

          columns([
            importExample(
              "import SidebarHeader from 'wix-style-react/SidebarHeader';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Plain Example',
              text: 'A simple example for a header with title and subtitle',
            }),

            code({
              compact: true,
              source: examples.plain,
            }),
          ]),

          columns([
            description({
              title: 'Header with Title, Subtitle and Children',
              text:
                'An example that demonstrates a header with a title, subtitle and custom node child',
            }),

            code({
              compact: true,
              source: examples.titlesWithChildren,
            }),
          ]),

          columns([
            description({
              title: 'Header with Children',
              text:
                'An example that demonstrates a header with just a custom node child',
            }),

            code({
              compact: true,
              source: examples.onlyChildren,
            }),
          ]),

          columns([
            description({
              title: 'Header with Ellipsis',
              text:
                'An example that demonstrates a header with a very long title which exceeds the maximum width of its container',
            }),

            code({
              compact: true,
              source: examples.ellipsis,
            }),
          ]),

          columns([
            description({
              title: 'Light Skin',
              text:
                'This example uses the `<Sidebar/>` to demonstrate the "light" skin design. Notice that when `<SidebarHeader/>` is contained inside `<Sidebar/>`, it affected by the `skin` prop accordingly',
            }),

            code({
              compact: true,
              source: examples.lightSkin,
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
