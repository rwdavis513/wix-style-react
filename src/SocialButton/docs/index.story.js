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

import SocialButton from '..';

const code = config => baseCode({ components: allComponents, ...config });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), code({ compact: true, source })]);

export default {
  category: storySettings.category,
  storyName: 'SocialButton',

  component: SocialButton,
  componentPath: '..',

  componentProps: {
    text: 'Share',
    icon: 'facebook',
  },

  exampleProps: {
    icon: ['facebook', 'instagram', 'twitter', 'linkedin', 'pinterest'],
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/SocialButton/',
      component: <SocialButton text="Share on Facebook" icon="facebook" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'Button with defined social button colors and icons.',
            }),
          ]),

          columns([
            importExample(
              "import SocialButton from 'wix-style-react/SocialButton';",
            ),
          ]),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Simple Example',
              text: 'Simple usage.',
              source: examples.simple,
            },
            {
              title: 'Text Example',
              text: 'Can be enable or without.',
              source: examples.text,
            },
            {
              title: 'Social Icons',
              text:
                'Component supports: Facebook, Twitter, LinkedIn, Instagram, Pinterest.',
              source: examples.icons,
            },
            {
              title: 'States',
              text: 'Component supports state: disabled.',
              source: examples.disabled,
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
