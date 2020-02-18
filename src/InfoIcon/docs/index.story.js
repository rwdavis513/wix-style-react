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

import Box from '../../Box';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import basicExample from '!raw-loader!./examples/basic';
import sizeExample from '!raw-loader!./examples/size';
import inlineTextExample from '!raw-loader!./examples/inlineText';
import headingExample from '!raw-loader!./examples/heading';
import InfoIcon from '..';

const content = 'Tooltip content!';
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'InfoIcon',

  component: InfoIcon,
  componentPath: '..',

  componentProps: {
    size: 'medium',
    content,
  },

  componentWrapper: ({ component }) => <Box align="center">{component}</Box>,

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/InfoIcon/',
      component: <InfoIcon content={content} />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            'A component used to display an information icon with some additional details provided in a tooltip.',
          ),

          importExample("import InfoIcon from 'wix-style-react/InfoIcon';"),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Simple Usage',
              text: 'The only required prop is `content`.',
            }),

            code({
              compact: true,
              source: basicExample,
            }),
          ]),

          columns([
            description({
              title: 'Icon Size',
              text: 'You can specify information icon size using `size` prop.',
            }),

            code({
              compact: true,
              source: sizeExample,
            }),
          ]),

          columns([
            description({
              title: 'Text with InfoIcon',
              text:
                'An example where `<InfoIcon>` is used inline with `<Text>` component content.',
            }),

            code({
              compact: true,
              source: inlineTextExample,
            }),
          ]),

          columns([
            description({
              title: 'Heading with InfoIcon',
              text:
                'An example of a `<Heading>` component used together with `<InfoIcon>`.',
            }),

            code({
              compact: true,
              source: headingExample,
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
