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

import Divider from '..';
import Box from '../../Box';
import * as examples from './examples';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'Divider',

  component: Divider,
  componentPath: '..',

  componentWrapper: ({ component }) => (
    <Box verticalAlign="middle" minHeight="50px">
      {component}
    </Box>
  ),

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Divider/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'A component that separates content by a line horizontally or vertically.',
            }),
          ]),

          columns([
            importExample("import Divider from 'wix-style-react/Divider';"),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Horizontal Example',
              text: 'By default, the divider is horizontal.',
            }),

            code({
              compact: true,
              source: examples.plain,
            }),
          ]),

          columns([
            description({
              title: 'Vertical Example',
              text:
                'The divider could be vertical by using the `direction` prop. Notice that the direct parent should have an explicit `height` or be stretched by flexbox.',
            }),

            code({
              compact: true,
              source: examples.vertical,
            }),
          ]),

          columns([
            description({
              title: 'Example with Dark Skin',
              text:
                'The divider could be displayed in dark color using the `skin` prop.',
            }),

            code({
              compact: true,
              source: examples.dark,
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
