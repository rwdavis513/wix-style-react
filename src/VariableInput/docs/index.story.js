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
import VariableInput from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'VariableInput',

  component: VariableInput,
  componentPath: '..',

  componentProps: {
    initialValue: 'Hello World!',
    size: 'small',
    variableParser: value => (value === 'page.name' ? 'Page name' : false),
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/VariableInput/',
      component: (
        <div style={{ width: '50%' }}>
          <VariableInput
            initialValue="VariableInput will render known variables as {{page.name}} tags"
            variableParser={value => {
              return value === 'page.name' ? 'Page name' : false;
            }}
          />
        </div>
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
                'Input tags component, allowing to show known variables as [`<Tag/>`](/?path=/story/components-api-components--tag) components',
            }),
          ]),

          columns([
            importExample(
              "import VariableInput from 'wix-style-react/VariableInput';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Simple Usage',
              text:
                'This example shows a value that contains plain text and known variable',
            }),

            code({
              compact: true,
              source: examples.simple,
            }),
          ]),
          columns([
            description({
              title: 'Size',
              text:
                'Use the `size` prop to select between small, medium and large sizes',
            }),

            code({
              compact: true,
              source: examples.size,
            }),
          ]),
          columns([
            description({
              title: 'Rows',
              text:
                'Use the `rows` prop to set the component height based on number of rows',
            }),
            code({
              compact: true,
              source: examples.rows,
            }),
          ]),
          columns([
            description({
              title: 'Status',
              text:
                'Add an status (error/warning) indication with possible tooltip',
            }),
            code({
              compact: true,
              source: examples.status,
            }),
          ]),
          columns([
            description({
              title: 'Placeholder',
              text:
                'Use the `placeholder` prop to show a message to the user when component is empty',
            }),
            code({
              compact: true,
              source: examples.placeholder,
            }),
          ]),
          columns([
            description({
              title: 'Disabled',
              text: 'Use `disabled` attribute to disable the component',
            }),
            code({
              compact: true,
              source: examples.disabled,
            }),
          ]),
          columns([
            description({
              title: 'Multiline',
              text:
                'Use `multiline` attribute to control the component scroll direction',
            }),
            code({
              compact: true,
              source: examples.multiline,
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
