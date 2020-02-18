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
import FixedExample from '!raw-loader!./FixedPositionExample';

import SidePanel from '..';
import compoundReadmeApi from '../COMPOUND_README.API.md';

const code = config => baseCode({ components: allComponents, ...config });
import Box from '../../Box';

const importDeclaration = `
import SidePanel from 'wix-style-react/SidePanel';
const { Header, Content, Footer } = SidePanel;
`;

export default {
  category: storySettings.category,
  storyName: 'SidePanel',

  component: SidePanel,
  componentPath: '..',

  componentProps: {
    children: (
      <>
        <SidePanel.Header title="Title" infoTooltipContent="Tooltip" />
        <SidePanel.Content>
          <Box height="250px">
            <Box margin="auto">content goes here</Box>
          </Box>
        </SidePanel.Content>
        <SidePanel.Footer>
          <Box height="20px">Footer</Box>
        </SidePanel.Footer>
      </>
    ),
  },

  exampleProps: {},

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/SidePanel/',
      component: <SidePanel buttonText="Click me!" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'A Side Panel container component, created to display a panel with header, content and footer. e.g. Filters',
            }),
          ]),

          columns([importExample(importDeclaration)]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Simple Usage',
              text: 'A simple example of panel with header, content and footer',
            }),

            code({
              compact: true,
              source: `
<SidePanel onCloseButtonClick={() => alert('click!')}>
  <SidePanel.Header
    title="Title"
    infoTooltipContent="Tooltip"
  />
  <SidePanel.Content>
    <Box background="#fafafa" height="200px" align="center" verticalAlign="middle">
      content goes here
    </Box>
  </SidePanel.Content>
  <SidePanel.Footer>
    <Box align="right">
      <Button>Action</Button>
    </Box>
  </SidePanel.Footer>
</SidePanel>
`,
            }),
          ]),

          columns([
            description({
              title: 'Custom Header title element',
              text:
                'Change the header text to be a custom element, for example a search-bar',
            }),

            code({
              compact: true,
              source: `
<SidePanel onCloseButtonClick={() => alert('click!')}>
  <SidePanel.Header title={<Search value="" options={[]}/>}></SidePanel.Header>
  <SidePanel.Content>
    <Box background="#fafafa" height="50px" align="center" verticalAlign="middle">
      content goes here
    </Box>
  </SidePanel.Content>
</SidePanel>
`,
            }),
          ]),

          columns([
            description({
              title: 'Custom Header children',
              text:
                'In addition to the header title, you can provide an element to be below the header but still a part of it',
            }),

            code({
              compact: true,
              source: `
<SidePanel onCloseButtonClick={() => alert('click!')}>
  <SidePanel.Header title="Title">
    <Tabs
      items={[
        { id: 1, title: 'First Tab'},
        { id: 2, title: 'Second Tab' },
      ]}
      activeId={1}
      type="uniformSide"
      width="174px"
    />
  </SidePanel.Header>
  <SidePanel.Content>
    <Box background="#fafafa" height="50px" align="center" verticalAlign="middle">
      content goes here
    </Box>
  </SidePanel.Content>
</SidePanel>
`,
            }),
          ]),

          columns([
            description({
              title: 'Sectioned content',
              text:
                'We recommend using <SidePanel.Content> for each section with <SidePanel.Divider> between them.',
            }),
            code({
              compact: true,
              source: `
<SidePanel>
  <SidePanel.Header title="Title">
  </SidePanel.Header>
  <SidePanel.Content>
    <Box background="#fafafa" height="100px" align="center" verticalAlign="middle">
      First content block
    </Box>
  </SidePanel.Content>

  <SidePanel.Divider/>

  <SidePanel.Content>
    <Box background="#fafafa" height="100px" align="center" verticalAlign="middle">
      Second content block
    </Box>
  </SidePanel.Content>
</SidePanel>
          `,
            }),
          ]),

          columns([
            description({
              title: 'An advanced example',
              text:
                'Full height, fixed position panel. In this example, we built a filters panel',
            }),

            code({
              previewProps: {},
              compact: true,
              source: FixedExample,
            }),
          ]),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        tab({
          title: 'Compound components API',
          sections: [description(compoundReadmeApi)],
        }),
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
