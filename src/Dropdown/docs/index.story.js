import React from 'react';
import {
  header,
  description,
  columns,
  importExample,
  title,
  code,
  tab,
  api,
  testkit,
  playground,
  tabs,
  divider,
} from 'wix-storybook-utils/Sections';
import Dropdown from '..';
import { Layout, Cell } from '../../Layout';
import { storySettings } from './storySettings';
import { baseScope } from '../../../stories/utils/LiveCodeExample';
import * as examples from './examples';

const liveCode = config =>
  code({
    components: baseScope,
    ...config,
  });

const example = props => liveCode(props);

const options = [
  { id: 0, value: 'Option 1' },
  { id: 1, value: 'Option 2' },
  { id: 2, value: 'Option 3' },
  { id: 3, value: 'Option 4' },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Dropdown,
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    placeholder: 'This is a placeholder',
    options,
  },
  exampleProps: {
    options: [{ label: 'simple', value: options }],
  },

  sections: [
    header({
      component: (
        <Layout gap={10}>
          <Cell span={3}>
            <Dropdown
              placeholder="Select dominant hand"
              popoverProps={{ appendTo: 'window' }}
              options={[
                { id: 0, value: 'Left' },
                { id: 1, value: 'Right' },
                { id: 2, value: 'Ambidextrous' },
              ]}
            />
          </Cell>
        </Layout>
      ),
    }),
    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'A Dropdown presents a list of options and allows a user to select one of the options.',
            }),
          ]),

          importExample(),

          divider(),

          title('Usage Examples'),

          ...[
            {
              title: 'Simple',
              subtitle: 'Simple example of usage.',
              source: examples.simple,
            },
            {
              title: 'Grouping',
              subtitle:
                'Any options list can be grouped to defined categories.',
              source: examples.group,
            },
            {
              title: 'Divider',
              subtitle:
                'An example where divider is used to split the options.',
              source: examples.divider,
            },
            {
              title: 'Sizes',
              subtitle:
                'Dropdown supporst three sizes: small, medium and large.',
              source: examples.sizes,
            },
            {
              title: 'Input Prefix',
              subtitle: 'An example where input can contain prefix value.',
              source: examples.prefix,
            },
            {
              title: 'Input Suffix',
              subtitle: 'An example where input can contain suffix value.',
              source: examples.suffix,
            },
            {
              title: 'Footer',
              subtitle:
                'An example where fixed footer is always attached to the bottom of options.',
              source: examples.footer,
            },
            {
              title: 'Dropdown states',
              subtitle: 'Two available states: disabled and error.',
              source: examples.states,
            },
            {
              title: 'Native support',
              subtitle:
                'For mobile usage the component can switch to native dropdown.',
              source: examples.native,
            },
            {
              title: 'Infinite scroll',
              subtitle:
                'An example where loading more options with infinite scroll is presented.',
              source: examples.infinite,
            },
            {
              title: 'Handling overflow',
              subtitle: `Some times we want dropdown to be detached from nearest overflow container. For this we can use popovers feature to set the overflow target to certain element in the DOM. By passing appendTo="window" we say that dropdowns overflow boundary is document.body itself.`,
              source: examples.overflow,
            },
          ].map(example),

          divider(),

          title('Constraints'),

          columns([
            description({
              title: 'Width',
              text:
                'By default long options are wrapped and constrained to parent container width. For options that are too long - dropdown list can be detached from parent container width by passing `appendTo="window"` popover prop. Make sure to control the maximum growth of the dropdown list with `maxWidth` popover prop.',
            }),

            liveCode({
              compact: true,
              source: examples.widthConstraints,
            }),
          ]),

          columns([
            description({
              title: 'Height',
              text:
                'The maximum allowed height of dropdown list container can be adjusted using `maxHeightPixels` prop.',
            }),

            liveCode({
              compact: true,
              source: examples.heightConstraints,
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
