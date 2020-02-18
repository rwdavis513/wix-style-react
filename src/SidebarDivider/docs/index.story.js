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

import SidebarDivider from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'SidebarDivider',

  component: SidebarDivider,
  componentPath: '..',

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/SidebarDivider/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'A divider within the sidebar that supports inner and full mode.',
            }),
          ]),

          columns([
            importExample(
              "import SidebarDivider from 'wix-style-react/SidebarDivider';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Plain Example',
              text: 'A simple example for an inner sidebar divider',
            }),

            code({
              compact: true,
              source: examples.plain,
            }),
          ]),

          columns([
            description({
              title: 'Full-Width Divider',
              text:
                'An example that demonstrates a divider with full width. Notice that in this mode, the divider has no margins',
            }),

            code({
              compact: true,
              source: examples.fullWidth,
            }),
          ]),

          columns([
            description({
              title: 'Light Skin',
              text:
                'This example uses the `<Sidebar/>` to demonstrate the "light" skin design. Notice that when `<SidebarDivider/>` is contained inside `<Sidebar/>`, it affected by the `skin` prop accordingly',
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
